import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import enterView from 'enter-view'
import * as d3 from 'd3'

Vue.use(VueScrollTo)

window.addEventListener('DOMContentLoaded', (event) => {
  // Clusters
  let margin = {top: 100, right: 100, bottom: 100, left: 100};

  let width = 960,
      height = 700,
      padding = 4, // separation between same-color circles
      clusterPadding = 20, // separation between different-color circles
      maxRadius = 16;

  let m = 18, // number of distinct clusters
      z = d3.scaleOrdinal(d3.schemePaired),
      clusters = new Array(m);

  let svg = d3.select('#cluster')
      .append('div')
      .attr('id', 'main')
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  var radiusScale = d3.scaleLinear()
      .range([3, maxRadius])
      .domain([5, 155]);

  d3.csv("/datasets/constitucion/clusters.csv").then((data) => {
    d3.csv("/datasets/constitucion/frequency.csv").then((frequencyData) => {
      // Vue APP
      new Vue({
        router,
        data: {
          terms: data,
          frequency: frequencyData
        },
        render: h => h(App)
      }).$mount('#app')

      let nodes = data.map((el) => {
        let radius = radiusScale(+el.total);
        let d = {cluster: +el.cluster, r: radius, label: el.label};
        clusters[d.cluster] = d;
        return d;
      });

      var Tooltip = d3.select("#cluster")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

      var mouseover = function(d) {
        Tooltip
        .style("opacity", 1)
        d3.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
      }
      var mousemove = function(d) {
        Tooltip
        .html(getClusterTerms(d))
        .style("left", (d3.mouse(this)[0]+70) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
      }
      var mouseleave = function(d) {
        Tooltip
        .style("opacity", 0)
        d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
      }

      let circles = svg.append('g')
      .datum(nodes)
      .selectAll('.circle')
      .data(d => d)
      .enter().append('circle')
      .attr('r', (d) => d.r)
      .attr('fill', (d) => z(d.cluster))
      .attr('stroke', (d) => z(d.cluster))
      .attr('stroke-width', 1)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      ;

      let simulation = d3.forceSimulation(nodes)
      .velocityDecay(0.2)
      .force("x", d3.forceX().strength(.0005))
      .force("y", d3.forceY().strength(.0005))
      .force("collide", collide)
      .force("cluster", clustering)
      .on("tick", ticked);

      function ticked() {
        circles
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
      }

      // These are implementations of the custom forces.
      function clustering(alpha) {
        nodes.forEach(function(d) {
          var cluster = clusters[d.cluster];
          if (cluster === d) return;
          var x = d.x - cluster.x,
            y = d.y - cluster.y,
            l = Math.sqrt(x * x + y * y),
            r = d.r + cluster.r;
          if (l !== r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            cluster.x += x;
            cluster.y += y;
          }
        });
      }

      function collide(alpha) {
        var quadtree = d3.quadtree()
        .x((d) => d.x)
        .y((d) => d.y)
        .addAll(nodes);

        nodes.forEach(function(d) {
          var r = d.r + maxRadius + Math.max(padding, clusterPadding),
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
          quadtree.visit(function(quad, x1, y1, x2, y2) {

            if (quad.data && (quad.data !== d)) {
              var x = d.x - quad.data.x,
                y = d.y - quad.data.y,
                l = Math.sqrt(x * x + y * y),
                r = d.r + quad.data.r + (d.cluster === quad.data.cluster ? padding : clusterPadding);
              if (l < r) {
                l = (l - r) / l * alpha;
                d.x -= x *= l;
                d.y -= y *= l;
                quad.data.x += x;
                quad.data.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
        });
      }

      function getClusterTerms(d) {
        let html = `<h3>${d.label}</h3>`;
        const terms = nodes.forEach(n => {
          if(n.cluster === d.cluster && d.label !== n.label){
            html+= `<p>${n.label}</p>`;
          }
        });
        return html;
      }
    });
  });
});
