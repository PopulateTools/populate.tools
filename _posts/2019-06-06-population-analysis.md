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
<style>

#legend {
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 18px;
  height: 150px;
  margin-bottom: 40px;
  width: 300px;
}

.legend-key {
  display: inline-block;
  border-radius: 20%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
</style>


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

  function activeMapLayer(layer){
    for(var i = 0; i < Object.keys(mapLayers).length; i++){
      map.setLayoutProperty(Object.keys(mapLayers)[i], 'visibility', 'none');
    }
    map.setLayoutProperty(layer, 'visibility', 'visible');

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
      content += '<p>Población en 1877: ' + properties.base_vl.toLocaleString() + ' hab.</p>';
      content += '<p>Población en 2011: ' + properties.value.toLocaleString() + ' hab.</p>';
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
    value_2011: {
      options: ['0 - 1000 hab.', '1000 - 5000 hab.', '5000 - 10k hab.', '10k - 50k hab.', '50k - 100k hab.', '100k - 500k hab.', '>= 500k hab.'],
    },
    value_diff: {
      options: ['No han crecido', '0 - 100 %', '100 - 500 %', '500 - 1000 %', '1000 - 5000 %', '5000 - 10000 %', '>= 10000 %'],
    },
    biggest_in_1877: {
      options: ['Más habitantes en 1877'],
      colors: ['#235fa9'],
    },
    biggest_in_2011: {
      options: ['Más habitantes en 2011'],
      colors: ['#235fa9'],
    },
    value_idx_increased: {
      options: ['Han crecido desde 1877'],
      colors: ['#468e29']
    },
    value_idx_decreased: {
      options: ['Han perdido habitantes desde 1877'],
      colors: ['#f2abb7']
    }
  };
  var currentLayer = "value_1877";
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
    map.addControl(new mapboxgl.NavigationControl());
    map.getCanvas().style.cursor = 'default';

    activeMapLayer(currentLayer);

    setTimeout(function(){
      activeMapLayer("value_diff");
    }, 7000);
  });

  var controller = new ScrollMagic.Controller();

  // Intro
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1", // point of execution
    duration: window.innerHeight * 1.7,
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .addIndicators()
  .setPin("#pinned-element1") // the element we want to pin
  .addTo(controller);

  // Map
  var cards = $('#pinned-trigger2 .scrolling-text').length;
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger2", // point of execution
    duration: window.innerHeight * cards * 1.5, // # of cards
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
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

  // Empleo
  var cards = $('#pinned_empleo .scrolling-text').length;
  var scene4 = new ScrollMagic.Scene({
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

<div id="pinned-trigger1" class="scrolling-container">

  <div >

    <div class="embed_full_width" id="pinned-element1">
      {% asset 'posts/190701-CartaTelegrafica' class='' style='' %}
      https://www.ign.es/web/catalogo-cartoteca/resources/html/003682.html
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

    <div class="pure-u-1-2" style="padding-right: 3em; text-align: right;">

      <div class="img_cont shadow" style="margin-bottom: 5em; ">
        {% asset 'posts/190701-Congreso' %}
      </div>

      <div class="img_cont shadow" style=" margin-bottom: 2em; margin-left: 18%; ">
        {% asset 'posts/190701-INE-Historico' %}
      </div>


      <div class="source">
        <small>Portada del Censo de 1877 - Fuente: <a href="https://www.ine.es/inebaseweb/treeNavigation.do?tn=192225&tns=192227#192227">INE</a></small>
      </div>

    </div>

    <div class="pure-u-1-2" style="padding-top: 4em;">

      <h2>1877-2018: Cómo hemos cambiado</h2>

      <p>La década de 1870 fue muy movida en España. Comenzó la I República Española, que duró poco: el general Pavía dio un golpe de estado y tras el pronunciamiento de Sagunto por el General Martinez Campos se restaura a un Borbón en el trono: Alfonso XII. Cánovas del Castillo pone en marcha la Constitución de 1876, que hasta la fecha es la más lóngeva que ha tenido España (2025, pensamos en tí).</p>

      <p>Se inventó el teléfono y la dinamo. Peréz Galdós comenzaba a escribir sus Episodios Nacionales. Tuvimos un Ministro de Hacienda matemático y físico, que además ganó un Nóbel de Literatura (ay, qué diferencia con la actualidad, ¿eh?). Puedes pasear por "su" calle en el centro de Madrid: Echegaray.</p>

      <p>Pero, ¿y nosotros, el común de los mortales? ¿Cuántos éramos? ¿Dónde vivíamos?</p>

      <p>Comisión Estadística del Reino. Así se llamó en 1856 a lo que más tarde sería el INE, el actual Instituto Nacional de Estadística. Su primera tarea fue realizar el censo de población, que se completó en 1877. Desde entonces y cada 10 años el INE se encarga de contarnos, pueblo a pueblo, persona a persona. Y con estos datos podemos entender cómo hemos cambiado.</p>

    </div>

  </div>

</div>

<div class="separator"></div>



<div class="section" >

  <h2>De 15 a 48 millones</h2>

  <div class="scrolling-container" id="pinned-trigger2">

    <div id="pinned_map" class="embed_full_width">
      <div id="map" class="" style="height:700px;"></div>
      <div class="map-overlay" id="legend"></div>
    </div>

    <div class="scrolling-content">

      <div class="scrolling-text">

        <p>En la década de 1870 se registraron en España 15,7 millones de habitantes. Nos hemos multiplicado por 3: En 2018 hemos pasado los 48 millones.</p>

      </div>

      <div class="scrolling-text">
        <p>Hay 5.144 municipios que han perdido habitantes. Estos municipios sumaban en 1877 6,5M de habitantes, un 41% de la población.</p>

        <p>Estos pueblos ahora suman 3,2M, lo que supone solo un 7% de la población.</p>

      </div>

      <div class="scrolling-text">
        <p>De los 100 pueblos más grandes de esa época, más de la mitad estaban entre Galicia y Asturias: 18 estaban en Asturias, 7 en Coruña, 17 en Lugo  y 16 más entre Pontevedra y Orense.</p>

        <p>Esos pueblos tenían de media 1.270 habitantes y de mediana 713 (la mitad eran más pequeños de esta cantidad). El más grande era A Estrada (Pontevedra) con 24.668 habitantes.</p>
      </div>

      <div class="scrolling-text">

        <p>El resto de municipios, 2.601, han crecido. El más grande ya era Madrid, con 400.000 habitantes (ahora tiene 3,2M. Mientras España se ha multiplicado por 3, Madrid lo ha hecho por 8).</p>

        <p>Tenían de media 3.548 habitantes (1.511 de mediana).</p>

      </div>

      <div class="scrolling-text">

        <p>El municipio que más ha crecido de España es Coslada, pasando de 177 habitantes a los más de 73.000 que tiene ahora (se ha multiplicado por más de 400). Todos los que más han crecido están en Madrid o Barcelona, excepto Santa Marta de Tormes, un municipio colidante con la ciudad de Salmanca.</p>

      </div>

    </div>

  </div>

</div>

<div class="section scrolling-container" id="pinned_ciudades">

  <div class="tab-group" id="pinned_ciudades_graf" >

    <div class="sub_section_header" style="margin-left: 160px;">

      <h3>Las ciudades más grandes entonces y ahora</h3>

      <div class="tabs">
        <a href="" class="tab-link current button_small" data-tab="tab-1">1877</a>
        <a href="" class="tab-link button_small" data-tab="tab-2">2011</a>
      </div>

    </div>

    <div id="tab-1" class="tab-content current">
      {% include analysis/population/barras_horiz_evolucion_poblacion_municipios_1877.svg %}
    </div>
    <div id="tab-2" class="tab-content">
      {% include analysis/population/barras_horiz_evolucion_poblacion_municipios_2011.svg %}
    </div>

  </div>

  <div class="scrolling-content">

    <div class="scrolling-text note">
      <p>Casi todas las ciudades más grandes en 1877 han mantenido su posición en el ranking.</p>
    </div>

    <div class="scrolling-text note">
      <p>Entre las medianas han sucedido muchos cambios. Algunas han crecido mucho más que otras.</p>
    </div>

    <div class="scrolling-text note">
      <p>Se puede observar como centros industriales han surgido, y cómo otras ciudades con industrias antaño relevantes han bajado mucho su actividad. </p>
    </div>

  </div>

</div>


<div class="section">

  <div class="pure-g">

    <div class="pure-u-1-4">

      <div class="note">
        <p>Aunque las provincias más habitadas en 1877 ya eran las zonas costeras, esa tendencia no
        ha hecho más que mantenerse estos años.</p>

        <p>Asturias ha pasado de ser la tercera provincia más habitado a ocupar el puesto número 12. Las islas y el País Vasco, por el contrario, han pasado a ser provincias
        con un crecimiento similar a Málaga, Murcia o Sevilla.</p>
      </div>

    </div>

    <div class="pure-u-3-4">

      <div class="tab-group">

        <div class="sub_section_header" style="margin-left: 160px;">

          <h3>Las provincias más grandes entonces y ahora</h3>

          <div class="tabs">
        		<a href="" class="tab-link current button_small" data-tab="tab-provincias-1">1877</a>
        		<a href="" class="tab-link button_small" data-tab="tab-provincias-2">2011</a>
        		<a href="" class="tab-link button_small" data-tab="tab-provincias-3">Diferencias</a>
        	</div>

        </div>

      	<div id="tab-provincias-1" class="tab-content current">
          {% include analysis/population/barras_horiz_evolucion_poblacion_provincias_1877.svg %}
      	</div>
      	<div id="tab-provincias-2" class="tab-content">
      		{% include analysis/population/barras_horiz_evolucion_poblacion_provincias_2011.svg %}
      	</div>
        <div id="tab-provincias-3" class="tab-content">
      		{% include analysis/population/diff_provincias_1877_2011.svg %}
      	</div>

      </div>


    </div>

  </div>

</div>


<div class="section">

  <div class="pure-g">

    <div class="pure-u-1-4">

      <div class="note">

        <p>No todas las ciudades han crecido al mismo ritmo. Hay algunas que han crecido menos o mucho menos que la media.</p>

        <p>Las razones son variadas; algunas ciudades cómo Cádiz no han crecido porque literalmente no tienen sitio: el municipio está practicamente rodeado de mar y no hay sitio donde construir.</p>

        <p>Alrededor de Cádiz sí que ha habido crecimiento: Chiclana, Jerez de la Frontera, Puerto Real o el Puerto de Santa María suman entre todos más de 400.000 habitantes de crecimiento.</p>

      </div>

    </div>

    <div class="pure-u-3-4">

      <div class="tab-group">

        <div class="sub_section_header" style="margin-left: 160px;">

          <h3>Las ciudades más grandes que menos han crecido</h3>

        	<div class="button_small">1873</div>

        </div>

      	<div>
          {% include analysis/population/barras_horiz_top_municipios_menos_crecimiento.svg %}
      	</div>

      </div>


    </div>

  </div>

</div>


<div class="section" >

  <div class="pure-g">

    <div class="pure-u-1-2" style="padding-right: 3em; text-align: right;">

      <div class="img_cont shadow" style="margin-bottom: 5em; margin-left: -7rem; ">
        {% asset 'posts/190701-Puente' %}
      </div>

    </div>

    <div class="pure-u-1-2" style="padding-top: 4em;">

      <h2>Cómo condiciona la proximidad a una capital</h2>

      <p>¿Qué factores influyen el que una población haya crecido más o menos que otras? Nos hemos preguntado si la proximidad a la capital de provincia condiciona su crecimiento a largo plazo.</p>

      <p>La facilidad de desplazarte a otro sitio para buscar trabajo o nuevas oportunidades es un factor que condiciona el crecimiento de población.</p>

      <p>Hemos calculado la distancia de los municipios a las capitales de provincia y a las ciudades de más de 100.000 habitantes en 2011.</p>

    </div>

  </div>

  <p>Si observamos el siguiente gráfico vemos como los municipios hasta 25km de distancia de la ciudad más cercana han crecido mucho más que aquellos que están más lejos. De hecho a partir de esa distance la correlación entre crecimiento y distancia a la capital desaparece.</p>

  {% asset 'posts/190701-Scatter-Distancia.png' %}


  <p></p>

  {% include analysis/population/raw_relacion_dist_pct_small_multiples.svg %}

  <p>La conclusión general es que cuánto más cerca estás de una capital, más creces. El crecimiento va disminuyendo según te alejas. Y como se puede observar hay varias provincias que tienen una cola inversa: cuánto más se acercan al límite de la provincia más aumenta la población.</p>

</div>

<div class="section scrolling-container" id="pinned_empleo">

  <div class="embed_full_width" id="pinned_empleo_img" >
    {% asset 'posts/190701-Empleo' style="width: 100%; margin-bottom: 3em; " %}
    <h2 style="position: absolute; top: 2em; font-size: 2.5em; left: 6rem; color: #333; ">Empleo y población</h2>
  </div>

  <div class="scrolling-content">

    <div class="scrolling-text">
      <p>En 1877 el 39% de la población vivía en núcleos de menos de 3.000 habitantes. Hoy en día solo el 36% de la gente vive en ciudades de menos de 25.000 habitantes. El sitio en el que vives condiciona el tipo de trabajo disponible. </p>
    </div>

    <div class="scrolling-text">
      <p>Y en 1877 la mayor parte de la gente vivía en sitios pequeños, en el campo, donde el trabajo mayoritario era la agricultura y ganadería. Esto ha cambiado de forma radical en los últimos 100 años</p>

      {% include analysis/population/aporte_empleo_por_sector.svg %}
    </div>

    <div class="scrolling-text">
      <p>Si ponemos en contexto los tipos de ocupación y la evolución de la población ocupada en total y para cada sector, se entiende todavía mejor:</p>

      {% include analysis/population/evolucion_pb_aporte_empleo_por_sector.svg %}
    </div>

  </div>

</div>

<div class="separador"></div>



<div class="sources">

  Fuentes
  - Populate Data
  - INE
  - Contabilidad Histórica Nacional


  Atribución
  - Mapa
  - Facsimil Censo
  - Puente
  - Empleo https://ordorenascendi.blogspot.com/2012/07/los-problemas-agrarios-inicios-del_430.html


</div>

- - -

XXXXXXXXX


## 15.7M Habitantes

Ahora somos un poco más de 47 millones (47.007.376 habitantes), hace 150 años sólo 15.7 millones (15.781.142 hab). Hemos crecido a un ritmo de 220.000 personas por año de una forma más o mens lineal:

{::nomarkdown}
{% include analysis/population/evolucion_poblacion.svg %}
{:/}

Si nos fijamos en el incremento de población tras cada medición de la encuesta vemos que el incremento de población ha ido creciendo, excepto dos parones que hubo entre 1990 y 2010 que ya se ha recuperado.

{::nomarkdown}
{% include analysis/population/variacion_poblacion.svg %}
{:/}

Y el crecimiento de la población tampoco ha sido constante a lo largo de las distintas provincias, como era de esperar. Hay núcleos que han concentrado más actividad. Historicamente se debía a que se instalaban centros de poder, lo que

{::nomarkdown}
{% include analysis/population/small_multiples_evo_poblacion_provincias.svg %}
{:/}


****blat ignora cartograma****

?? [CARTOGRAMA DEL TOP 15 CIUDADES MAS GRANDES ENTONCES]
    y/o [DOT PLOT TOP 15 CIUDADES MAS GRANDES ENTONCES]

Si comparamos con la foto de hoy, hay mucho cambio:

?? [CARTOGRAMA DEL TOP 15 CIUDADES MAS GRANDES HOY]
    y/o [DOT PLOT TOP 15 CIUDADES MAS GRANDES HOY]

****blat ignora cartograma****




# Cómo te condiciona la proximidad a una capital

¿Qué factores influyen el que una población haya crecido más o menos que otras? Nos hemos preguntado si la proximidad a la capital de provincia condiciona su crecimiento a largo plazo.

Hemos calculado la distancia de los municipios a las capitales de provincia y a las ciudades de más de 100.000 habitantes en 2011.

Si observamos el siguiente gráfico vemos como los municipios hasta 25km de distancia de la ciudad más cercana han crecido mucho más que aquellos que están más lejos. De hecho a partir de esa distance la correlación entre crecimiento y distancia a la capital desaparece.

{::nomarkdown}
{% include analysis/population/raw_relacion_dist_pct.svg %}
{:/}

Hay provincias donde no se da esta relación, como es el caso de Ciudad Real o Badajoz.

{::nomarkdown}
{% include analysis/population/raw_relacion_dist_pct_small_multiples.svg %}
{:/}

En otras provincias, como Madrid, Sevilla, Toledo o Málaga, las poblaciones más cercanas a la capital han crecido a un ritmo más rápido que el resto.

Cádiz y Soria son las provincias con menos variación de población, y donde la distancia influye menos, posiblemente no por la distancia en sí, sino porque los municipios han crecido muy poco.


(Pintar Cartograma hexagonal de los municipios de una provincia y sus ciudades)


# Evolución de los sectores de empleo y la población
