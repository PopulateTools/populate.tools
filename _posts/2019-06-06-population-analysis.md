---
layout: story
title: "1877-2011: Cómo hemos cambiado"
date: 2019-06-06 8:00:00 +0100
author: blat
lang: es
product: populate_data
category: technology
---


<script src='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />


<script type="text/javascript">
$(function () { // wait for document ready

  $('.tabs a').click(function(e){
    e.preventDefault();

    var tab_id = $(this).attr('data-tab');

    $(this).parent().find('a').removeClass('current');
    $(this).closest('.tab-group').find('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  function activeMapLayer(layer){
    if(layer === currentLayer){
      return;
    }
    currentLayer = layer;
    for(var i = 0; i < Object.keys(mapLayers).length; i++){
      map.setLayoutProperty(Object.keys(mapLayers)[i], 'visibility', 'none');
    }
    map.setLayoutProperty(layer, 'visibility', 'visible');

    if(layer !== "coslada"){
      map.flyTo({
        zoom: 5.5
      });
    }

    map.off('click', layer);
    map.on('click', layer, function(e) {
      map.getCanvas().style.cursor = 'pointer'; // When the cursor enters a feature, set it to a pointer

      var municipalities = map.queryRenderedFeatures(e.point, {
        layers: [layer]
      });

      if(municipalities[0] === undefined){
        popup.remove();
        return;
      }

      var properties = municipalities[0].properties;

      var content = '<h3>' + properties.plac_nm + '</h3>';
      if(properties.base_vl !== undefined)
        content += '<p>Población en 1877: ' + properties.base_vl.toLocaleString() + ' hab.</p>';
      if(properties.value !== undefined)
        content += '<p>Población en 2011: ' + properties.value.toLocaleString() + ' hab.</p>';
      if(properties.valu_dx !== undefined)
        content += '<p>Incremento desde 1877: ' + properties.valu_dx.toFixed(2).toLocaleString() + '%</p>';

      var lon = properties.plac_ln;
      var lat = properties.plac_lt;
      var coordinates = new mapboxgl.LngLat(lon, lat);

      popup.setLngLat(coordinates)
       .setHTML(content)
       .addTo(map);
    });

    var options = mapLayers[layer].options;
    var colors = mapLayers[layer].colors || ["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#0c2c84"];

    var legend = document.getElementById("legend");
    legend.innerHTML = "";
    for (i = 0; i < options.length; i++) {
      var option = options[i];
      var color = colors[i];
      var item = document.createElement('div');
      var key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

      var value = document.createElement('span');
      value.innerHTML = option;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
    }
  }

  var mapLayers = {
    value_1877: {
      options: ['0 - 1000 hab.', '1000 - 3000 hab.', '3000 - 10k hab.', '10k - 25k hab.', '25k - 50k hab.', '50k - 100k hab.', '>= 100k hab.'],
    },
    value_diff: {
      options: ['No han crecido', '0 - 100 %', '100 - 500 %', '500 - 1000 %', '1000 - 5000 %', '5000 - 10000 %', '>= 10000 %'],
    },
    biggest_in_1877: {
      options: ['Más habitantes en 1877'],
      colors: ['#235fa9'],
    },
    value_idx_increased: {
      options: ['Han crecido desde 1877'],
      colors: ['#468e29']
    },
    value_idx_decreased: {
      options: ['Han perdido habitantes desde 1877'],
      colors: ['#f2abb7']
    },
    coslada: {
      options: ['Coslada'],
      colors: ['#468e29']
    }
  };
  var currentLayer = null;
  var popup = new mapboxgl.Popup; // Initialize a new popup

  mapboxgl.accessToken = 'pk.eyJ1IjoicG9wdWxhdGUiLCJhIjoiZWE3NWQzZjA5NjY3NGQ5ZjU1YzlkYmRhMWE1MjEwMTMifQ.2gXfaomaWSEfdESul35_-g';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/populate/cjxpty6902kio1co79fzck5wp',
    center: [-3.68041, 40.4449045],
    zoom: 5.5
  });

  map.on('load', function() {
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.getCanvas().style.cursor = 'default';
    activeMapLayer("value_1877");
  });


  var controller = new ScrollMagic.Controller();

  if(window.innerWidth > 768) {

    // Intro
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#pinned-trigger1", // point of execution
      duration: window.innerHeight * 1.4,
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .addIndicators()
    .setPin("#pinned-element1") // the element we want to pin
    .addTo(controller);

  }

  window.onscroll = function() {
    if (isInViewport(document.querySelector('#map_step_2'))) {
      activeMapLayer('value_idx_decreased');
    }
    if (isInViewport(document.querySelector('#map_step_3'))) {
      activeMapLayer('value_idx_increased');
    }
    if (isInViewport(document.querySelector('#map_step_4'))) {
      activeMapLayer('biggest_in_1877');
      map.flyTo({
        center: [-6.7073325, 42.5682217],
        zoom: 7
      });
    }
    if (isInViewport(document.querySelector('#map_step_5'))) {
      activeMapLayer('coslada');
      map.flyTo({
        center: [-3.5731813, 40.428762],
        zoom: 10
      });
    }
    if (isInViewport(document.querySelector('#map_step_6'))) {
      // activeMapLayer('coslada');
      map.flyTo({
        center: [-6.235303, 36.50524],
        zoom: 12
      });
    }
  };


  // Map
  var cards = $('#pinned-trigger2 .scrolling-text').length;
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger2", // point of execution
    duration: window.innerHeight * cards * 1.5, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  // .setTween("#map_step_1", .2, {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7})
  .addIndicators()
  .setPin("#pinned_map") // the element we want to pin
  .addTo(controller);


  // Ciudades
  var cards = $('#pinned_ciudades .scrolling-text').length;
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#pinned_ciudades", // point of execution
    duration: window.innerHeight * cards * .9, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .addIndicators()
  .setPin("#pinned_ciudades_graf") // the element we want to pin
  .addTo(controller);

  // Provincias
  var cards = $('#pinned_provincias .scrolling-text').length;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#pinned_provincias", // point of execution
    duration: window.innerHeight * cards * .9, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .addIndicators()
  .setPin("#pinned_provincias_graf") // the element we want to pin
  .addTo(controller);

  // Ciudades que no crecen
  var cards = $('#pinned_ciudades_no .scrolling-text').length;
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#pinned_ciudades_no", // point of execution
    duration: window.innerHeight * cards * .9, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .addIndicators()
  .setPin("#pinned_ciudades_no_graf") // the element we want to pin
  .addTo(controller);

  // Empleo
  var cards = $('#pinned_empleo .scrolling-text').length;
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#pinned_empleo", // point of execution
    duration: window.innerHeight * cards * 1.5, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .addIndicators()
  .setPin("#pinned_empleo_img") // the element we want to pin
  .addTo(controller);

});

</script>

<!--
<div class="story-menu embed_full_width">
  <a href="#story-start">Portada</a>
  <a href="#pinned_map">Mapas</a>
  <a href="#pinned_ciudades">Evolución de pueblos y ciudades</a>
  <a href="#proximity">Proximidad</a>
  <a href="#pinned_empleo">Empleo</a>
</div>
-->

<div id="pinned-trigger1" >

  <div class="scrolling-container">

    <div id="pinned-element1">
      <div class="embed_full_width" >
        {% asset 'posts/190701-CartaTelegrafica' class='' style='' %}
      </div>
    </div>

    <div class="scrolling-content">

      <div class="scrolling-text">

        <h2>Año 1870</h2>

        <p>¿Cuántos personas vivían en España? ¿Dónde vivían? ¿Qué ciudades y pueblos eran los más grandes entonces? ¿Cómo han evolucionado hasta ahora? ¿Los más grandes entonces lo siguen siendo ahora? ¿Cuántas nuevas ciudades han surgido? La España Vacía... ¿desde cuándo está vacía?</p>

        <p>Nos zambullimos en los datos de población por municipio más antiguos que se registran para entender cómo hemos cambiado y hacia donde nos dirigimos.</p>

      </div>

    </div>

  </div>

</div>

<div class="section" style="padding-top: 8em;">

  <div class="pure-g">

    <div class="pure-u-1 pure-u-md-1-2" style="padding-right: 3em; text-align: right;">

      <div class="img_cont shadow" style="margin-bottom: 5em; ">
        {% asset 'posts/190701-Congreso' %}
      </div>

      <div class="img_cont shadow" style=" margin-bottom: 2em; margin-left: 18%; ">
        {% asset 'posts/190701-INE-Historico' %}
      </div>

      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>

    </div>

    <div class="pure-u-1 pure-u-md-1-2" style="padding-top: 4em;">

      <div class="text-container">

        <h2>1877-2018: Cómo hemos cambiado</h2>

        <p>La década de 1870 fue muy movida en España. Comenzó la I República Española, que duró poco: el general Pavía dio un golpe de estado y tras el pronunciamiento de Sagunto por el General Martinez Campos se restaura a un Borbón en el trono: Alfonso XII. Cánovas del Castillo pone en marcha la Constitución de 1876, que hasta la fecha es la más lóngeva que ha tenido España (2025, pensamos en tí).</p>

        <p>Se inventó el teléfono y la dinamo. Peréz Galdós comenzaba a escribir sus Episodios Nacionales. Tuvimos un Ministro de Hacienda matemático y físico, que además ganó un Nóbel de Literatura (ay, qué diferencia con la actualidad, ¿eh?). Puedes pasear por "su" calle en el centro de Madrid: Echegaray.</p>

        <p>Pero, ¿y nosotros, el común de los mortales? ¿Cuántos éramos? ¿Dónde vivíamos?</p>

        <p>Comisión Estadística del Reino. Así se llamó en 1856 a lo que más tarde sería el INE, el actual Instituto Nacional de Estadística. Su primera tarea fue realizar el censo de población, que se completó en 1877. Desde entonces y cada 10 años el INE se encarga de contarnos, pueblo a pueblo, persona a persona. Y con estos datos podemos entender cómo hemos cambiado.</p>

      </div>

    </div>

  </div>

</div>


<div class="separator"></div>


<div class="section" id="pinned-trigger2">

  <h2>De 15 a 48 millones</h2>


  <div ></div>

  <div class="scrolling-container">

    <div id="pinned_map" class="embed_full_width">
      <div id="map"></div>
      <div class="map-overlay" id="legend"></div>
    </div>

    <div class="scrolling-content">

      <div class="scrolling-text" id="map_step_1">

        <p>En la década de 1870 se registraron en España 15,7 millones de habitantes. Nos hemos multiplicado por 3: En 2018 hemos pasado los 48 millones.</p>

      </div>

      <div class="scrolling-text" id="map_step_2">
        <p>Hay 5.144 municipios que han perdido habitantes. Estos municipios sumaban en 1877 6,5M de habitantes, un 41% de la población.</p>

        <p>Estos municipios ahora suman 3,2M, lo que supone solo un 7% de la población.</p>

      </div>

      <div class="scrolling-text" id="map_step_3">
        <p>El resto de municipios, 2.601, han crecido. El más grande ya era Madrid, con 400.000 habitantes (ahora tiene 3,2M. Mientras España se ha multiplicado por 3, Madrid lo ha hecho por 8).</p>

        <p>Tenían de media 3.548 habitantes (1.511 de mediana).</p>

      </div>

      <div class="scrolling-text"  id="map_step_4">
        <p>De los 100 municipios más grandes de esa época, más de la mitad estaban entre Galicia y Asturias: 18 estaban en Asturias, 7 en Coruña, 17 en Lugo  y 16 más entre Pontevedra y Orense.</p>

        <p>Esos municipios tenían de media 1.270 habitantes y de mediana 713 (la mitad eran más pequeños de esta cantidad). El más grande era A Estrada (Pontevedra) con 24.668 habitantes.</p>

      </div>

      <div class="scrolling-text"  id="map_step_5">

        <p>El municipio que más ha crecido de España es Coslada, un municipio con mucha extensión muy próximo a Madrid, pasando de 177 habitantes a los más de 73.000 que tiene ahora (se ha multiplicado por más de 400).</p>

        <p>Todos los que más han crecido están en Madrid o Barcelona (excepto Santa Marta de Tormes, un municipio pegado a Salmanca.</p>

      </div>

      <div class="scrolling-text"  id="map_step_6">

        <p>La geografía ha limitado el crecimiento de algunos municipios. Cádiz es el ejemplo más extremo: Su población apenas se ha incrementado porque ya en 1870 estaba llena de gente.</p>

      </div>

    </div>

  </div>




</div>

<div class="section scrolling-container" id="pinned_ciudades">

  <div class="tab-group" id="pinned_ciudades_graf" >

    <div class="sub_section_header">

      <div class="text-container">

        <h3>Las ciudades más grandes entonces y ahora</h3>

        <div class="tabs">
          <a href="" class="tab-link current button_small" data-tab="tab-1">1877</a>
          <a href="" class="tab-link button_small" data-tab="tab-2">2011</a>
        </div>

      </div>

    </div>

    <div id="tab-1" class="tab-content current">
      {% include analysis/population/barras_horiz_evolucion_poblacion_municipios_1877.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
    </div>
    <div id="tab-2" class="tab-content">
      {% include analysis/population/barras_horiz_evolucion_poblacion_municipios_2011.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
    </div>

  </div>

  <div class="scrolling-content">

    <div class="scrolling-text note">
      <p>Casi todas las ciudades más grandes en 1877 han mantenido su posición en el ranking.</p>

      <p>Entre las medianas han sucedido muchos cambios. Algunas han crecido mucho más que otras. Zaragoza, Palma de Mallorca, Córdoba, Bilbao, Gijón... han crecido más que la media. </p>
    </div>

  </div>

</div>


<div class="section scrolling-container" id="pinned_provincias">

  <div class="tab-group" id="pinned_provincias_graf">

    <div class="sub_section_header">

      <div class="text-container">
        <h3>Las provincias más grandes entonces y ahora</h3>

        <div class="tabs">
      		<a href="" class="tab-link current button_small" data-tab="tab-provincias-1">1877</a>
      		<a href="" class="tab-link button_small" data-tab="tab-provincias-2">2011</a>
      		<a href="" class="tab-link button_small" data-tab="tab-provincias-3">Diferencias</a>
      	</div>
      </div>

    </div>

  	<div id="tab-provincias-1" class="tab-content current">
      {% include analysis/population/barras_horiz_evolucion_poblacion_provincias_1877.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
  	</div>
  	<div id="tab-provincias-2" class="tab-content">
  		{% include analysis/population/barras_horiz_evolucion_poblacion_provincias_2011.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
  	</div>
    <div id="tab-provincias-3" class="tab-content">
  		{% include analysis/population/diff_provincias_1877_2011.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
  	</div>

  </div>

  <div class="scrolling-content">

    <div class="scrolling-text note">
      <p>Aunque las provincias más habitadas en 1877 ya eran las zonas costeras, esa tendencia no
      ha hecho más que mantenerse estos años.</p>

      <p>Asturias ha pasado de ser la tercera provincia más habitada a ocupar el puesto número 12.</p>
    </div>

  </div>

</div>


<div class="section scrolling-container" id="pinned_ciudades_no">

  <div class="tab-group" id="pinned_ciudades_no_graf">

    <div class="sub_section_header">

      <div class="text-container">
        <h3>Las ciudades más grandes que menos han crecido</h3>
    	   <div class="button_small">1873</div>
      </div>

    </div>

  	<div>
      {% include analysis/population/barras_horiz_top_municipios_menos_crecimiento.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
  	</div>

  </div>

  <div class="scrolling-content">

    <div class="scrolling-text note">
      <p>No todas las ciudades han crecido al mismo ritmo. Algunas ciudades cómo Cádiz no han crecido porque literalmente no tienen sitio: el municipio está practicamente rodeado de mar. Pero el crecimiento se contagia a los municipios limítrofes: Chiclana, Jerez de la Frontera, Puerto Real o el Puerto de Santa María suman entre todos más de 400.000 habitantes de crecimiento.</p>

    </div>

  </div>

</div>


<div class="section" id="proximity">

  <div class="pure-g">

    <div class="pure-u-1 pure-u-md-1-2" style="padding-right: 3em; text-align: right;">

      <div class="img_cont shadow" style="margin-bottom: 5em; margin-left: -7rem; ">
        {% asset 'posts/190701-Puente' %}
      </div>

    </div>

    <div class="pure-u-1 pure-u-md-1-2">

      <h2>Cerca de la capital</h2>

      <p>¿Qué factores influyen el que una población haya crecido más o menos que otras? Nos hemos preguntado si la proximidad a la capital de provincia condiciona su crecimiento a largo plazo.</p>

      <p>La facilidad de desplazarte a otro sitio para buscar trabajo o nuevas oportunidades es un factor que condiciona el crecimiento de población: Si estás muy lejos de donde está tu trabajo te tendrás que mudar, si te puedes desplazar con facilidad podrás quedarte. </p>

    </div>

  </div>

  <p>Hemos visualizado el aumento o disminución de la población en relación con la distancia de un municipio a la capital de su provincia: </p>

  <div class="m_v_2">
    {% asset 'posts/190701-Scatter-Distancia.png' %}
    <div class="source">Fuente: <a href="#sources">Elaboración propia / INE / Populate Data</a></div>
  </div>

  <p>La conclusión general es que cuánto más cerca estás de una capital, más creces. El crecimiento va disminuyendo según te alejas. Y como se puede observar hay varias provincias que tienen una cola inversa: cuánto más se acercan al límite de la provincia más aumenta la población. Esto es debido a que se han ido formando ciudades de tamaño relevante cerca de los límites de la provincia.</p>

  {% include analysis/population/raw_relacion_dist_pct_small_multiples.svg %}


</div>

<div class="section scrolling-container" id="pinned_empleo">

  <div class="embed_full_width" id="pinned_empleo_img" >
    {% asset 'posts/190701-Empleo' style="width: 100%; margin-bottom: 3em; " %}
    <h2 style="position: absolute; top: 2em; font-size: 2.5em; left: 6rem; color: #333;">Empleo y población</h2>
  </div>

  <div class="scrolling-content">

    <div class="scrolling-text biggy">
      <p>En 1877 el 39% de la población vivía en núcleos de menos de 3.000 habitantes, sitios pequeños en el campo, donde el trabajo mayoritario era la agricultura y ganadería. Desde entonces, la estructura del mercado de trabajo ha cambiado radicalmente.</p>

      {% include analysis/population/aporte_empleo_por_sector.svg %}
      <div class="source right">Fuente: <a href="#sources">FRP / Contabilidad Histórica Nacional</a></div>

      <p>Hoy en día solo el 36% de la gente vive en ciudades de menos de 25.000 habitantes.</p>

    </div>

    <div class="scrolling-text biggy">
      <p>Si ponemos en contexto los tipos de ocupación y la evolución de la población ocupada en total y para cada sector, se entiende todavía mejor:</p>

      {% include analysis/population/evolucion_pb_aporte_empleo_por_sector.svg %}
      <div class="source right">Fuente: <a href="#sources">INE / Populate Data</a></div>
    </div>

  </div>

</div>


<div class="separator"></div>


<div class="section narrow-col" id="next">

  <h2>¿Qué nos depara el futuro?</h2>

  <p>Seguimos masticando los datos para mostrarlos de nuevas formas. Suscríbete y te avisamos con esta y otras actualizaciones:</p>

  <div>{% include subscription_form_es.html %}</div>

</div>



<div class="separator"></div>


<div class="sources narrow-col" id="sources">

  <h2>Fuentes</h2>

  <p><strong>Datos</strong></p>
  <ul>
    <li><a href="http://www.ine.es/intercensal/intercensal.do?search=1&cmbTipoBusq=0&textoMunicipio=Ponferrada&btnBuscarDenom=Consultar+selecci%F3n">INE</a> / <a href="https://populate.tools/data">Populate Data</a></li>
    <li><a href="https://espacioinvestiga.org/g-table-16/">FRP / Leantro Prados de la Escosura / Contabilidad Histórica Nacional</a></li>
  </ul>


  <p><strong>Fotografías</strong></p>
  <ul>
    <li>Mapa Telegráfico: <a href="https://www.ign.es/web/catalogo-cartoteca/resources/html/003682.html">IGN</a></li>
    <li>Facsimil Censo <a href="https://www.ine.es/inebaseweb/treeNavigation.do?tn=192225&tns=192227#192227">INE</a></li>
    <li>Puente (c) Álvaro Ortiz</li>
    <li>Empleo <a href="https://ordorenascendi.blogspot.com/2012/07/los-problemas-agrarios-inicios-del_430.html">Historia Incompleta de España</a></li>
  </ul>


</div>
