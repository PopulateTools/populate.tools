---
layout: story
title: "¿Qué comemos en Madrid, y de donde viene?"
description: Una exploración sobre los alimentos que pasan por Mercamadrid
date: 2019-09-01 8:00:00 +0100
author: blat
lang: es
# product: populate_data
category: technology
img: posts/190701-CartaTelegrafica.jpg
---

<!-- Sandbox purposes -->
{% assign provincias = "A Coruña,Álava,Albacete,Alicante,Almería,Asturias,Ávila,Badajoz,Baleares,Barcelona,Sevilla,Soria,Sta Cruz de Tenerife,Tarragona,Teruel,Toledo,Valencia,Valladolid,Zamora,Zaragoza,Lugo,Madrid,Málaga,Murcia,Navarra,Ourense,Palencia,Pontevedra,Salamanca,Segovia,Girona,Granada,Guadalajara,Huelva,Huesca,Jaén,La Rioja,Las Palmas,León,Lleida,Bizkaia,Burgos,Cáceres,Cádiz,Cantabria,Castellón,Ciudad Real,Córdoba,Cuenca,Gipuzkoa" | split: ',' %}

{% assign categories = "Fruta,Verdura,Patata,Carne,Pescado,Pescado congelado,Pollo,Marisco,Huevos" | split: ',' %}

{% assign products = "naranja,tomate,patata,manzana,cebolla,porcino,freson,vacuno,platano,platanos,zanahorias,peras,sandia,lechugas,pollo,lechuga,mandarina,elaborados,limon,pimientos,melones,pimiento,cerezas,calabacin,kiwi,albaricoque" | split: ',' %}

<div class="row-col">

  <div class="story-menu">
    <a href="#section-1">¿Cuáles son los productos más vendidos?</a>
    <a href="#section-1">¿De dónde vienen los productos?</a>
    <a href="#section-1">¿Qué productos vienen de cada sitio?</a>
  </div>

  <div class="story-content with-story-menu">

    <div class="section">

      <p>Lo primero: disculpas a los no-madrileños, una mayoría aplastante de la población española. Nosotros, a pesar de ser residentes en Madrid (unos oriundos y otros no),  somos conscientes del centralismo mediático, y nada más lejos de nuestra intención que seguir perpetuándolo.</p>

      <p>Pero. Siempre hay un pero. Dimos con un conjunto de datos de Mercamadrid, el mercado mayorista de Madrid.  Y nos entró hambre. Después de alimentarnos nos preguntamos de donde ha venido este melón, de dónde han venido estos tomates, de dónde estas cebollas… y dejamos de preguntarnos, porque nos entraba más hambre.</p>

      <p>Así que metimos todos esos datos en nuestra batidora y esto es lo que ha salido.</p>

      <div class="notes">

        <p>Los datos están extraidos del portal de datos abiertos del Ayuntamiento de Madrid. El periodo al que se refieren todas las visualizaciones en esta página es de Enero a Junio de 2019, ambos incluídos. Si publican más histórico puede que lo incluyamos.</p>

        <p><strong>Importante</strong>: No todos los productos pasan por Mercamadrid, así que esto no pretende comunicar las cantidades exactas que consumimos. Pero dado que gran parte de la alimentación si pasa por Mercamadrid, consideramos interesante realizar esta exploración.</p>

      </div>

    </div>

    <div class="">
      SUBSCRIPTION BOX
    </div>

    <div class="section" id="section-1">

      <h2>Los productos más vendidos</h2>

      <p>O comprados. Los mayoristas se encargan de comprar producto en origen (bueno, en realidad no es tan sencillo) y traerlo hasta aquí, donde otros minoristas (supermercados, tiendas, puestos de mercados) compran para llenar sus anaqueles. Y que a su vez, tu, puedas llenar los tuyos.</p>

      <p><strong>Tu sabes lo que compras - pero de forma agregada, ¿qué consumimos más en Madrid?</strong></p>

      <div class="m_v_2 story-content-full">
        <iframe title="" aria-label="Table" id="datawrapper-chart-ZnEY5" src="//datawrapper.dwcdn.net/ZnEY5/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="477"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>
      </div>


      <div class="insights">

        <p>"Hay que comer fruta y verdura". El tesón de tus progenitores para que te alimentases bien ha dado sus <em>frutos</em> (🥁): Fruta y verdura es lo que más comemos, con mucha diferencia. ¡A tope con la dieta mediterranea! Así estamos de sanos y así nuestra esperanza de vida continua aumentando.</p>

        <p>INCLUIR NOTA SOBRE EL POLLO? PROBABLEMENTE NO APARECE AQUI TODO EL QUE SE VENDE. Los caminos de la distribución son inexcrutables.</p>

      </div>

    </div>

    <div class="section" id="section-1">

      <h2>¿De dónde vienen los productos?</h2>

      <p>Estas son las provincias que alimentan a Madrid.</p>

      <div class="m_v_2 story-content-full">
        <iframe title="" aria-label="Spain provinces (2018) choropleth map" id="datawrapper-chart-JYAPB" src="//datawrapper.dwcdn.net/JYAPB/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="800"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>
      </div>

      <p>Más del 50% de los productos vienen de solo 5 provincias: Almería, Valencia, Murcia, Toledo y Valladolid (y ahora te preguntarás que cuáles son los productos estrella de cada una de esas provincias... te lo contamos más abajo).</p>

      <p><strong>¿Kilómetro cero?</strong> Parece que a nivel general nos queda mucho por avanzar (o poco, según se mire). Sólo un 2,3% de los productos tienen como origen la propia provincia de Madrid (obviamente, habrá mucho producto de proximidad que precisamente por serlo no pasará por Mercamadrid).</p>

      <p><strong>¿Y cuánto producto viene de fuera de España?</strong> Si mezclamos provincias y paises, estas son las geografías que más alimentan Madrid:</p>


      <div class="m_v_2">

        <iframe title="Origen de los productos por provincia y pa&iacute;s" aria-label="Table" id="datawrapper-chart-I29Bo" src="//datawrapper.dwcdn.net/I29Bo/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="766"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>

      </div>


      <p>TABLA TOP PAISES</p>


      <p>Regresando a España: Estos son los productos top de cada provincia. ¿Qué gana en la tuya?</p>

      <div class="m_v_2 story-content-full">

        <!-- {% asset 'posts/190901-TEST-SmallMultiples.svg' %} -->

        <div class="small-multiples">

          {% for province in provincias %}
          <div class="multiple">
            <h3>{{ province }}</h3>
            <table>
            <tr>
              <th>Naranja</th>
              <td class="tb-percentage">45%</td>
              <td class="td-bar-chart tooltipped" data-tooltip="Total de kilos"><div class="td-bar-chart bar-chart-cont"><div class="bar-chart" style="width: 45%;"></div></div></td>
            </tr>
            <tr>
              <th>Fresón</th>
              <td class="tb-percentage">25%</td>
              <td class="td-bar-chart tooltipped" data-tooltip="Total de kilos"><div class="td-bar-chart bar-chart-cont"><div class="bar-chart" style="width: 12%; "></div></div></td>
            </tr>
            <tr>
              <th>Manzana</th>
              <td class="tb-percentage">15%</td>
              <td class="td-bar-chart tooltipped" data-tooltip="Total de kilos"><div class="bar-chart-cont "><div class="bar-chart" style="width: 3%;"></div></div></td>
            </tr>
            </table>
          </div>
          {% endfor %}

        </div>

      </div>


      <p>Y aquí los principales productos de cada provincia (mostramos solo productos con más de 100.000 kilos vendidos en Mercamadrid durante el periodo).</p>

      <div class="m_v_2 story-content-full">
        <div class="flourish-embed" data-src="visualisation/557814"></div><script src="https://public.flourish.studio/resources/embed.js"></script>
      </div>



    </div>

  </div>

</div>

<div class="row-full flex product-browser">

  <div class="item-list product-browser-sidebar">

    <input type="text" placeholder="Provincia..." class="m_v_2">

    {% for province in provincias %}
      <a href="">{{ province }}</a>
    {% endfor %}

  </div>

  <div class="product-browser-content">

    <p>Seleccina una provincia para ver sus principales producciones</p>

    <h2>Top productos de Almería</h2>

    <table>
    <tr>
      <th></th>
      <th class="right tb-kilos">Kilos</th>
      <th class="right tb-percentage">% Total</th>
      <th></th>
    </tr>
    {% for category in categories %}

    <tbody class="category">
      <tr>
        <td class="td-big">
          <a href="" class="toggle-target" data-target="category_{{ category }}">
            <i class="fas fa-plus-circle"></i>
            {{ category }}
          </a>
        </td>
        <td class="right tb-kilos">133.456.789</td>
        <td class="right tb-percentage">82.5%</td>
        <td class="td-bar-chart">
          <div class="bar-chart-cont"><div class="bar-chart" style="width: 45%; "></div></div>
        </td>
      </tr>
    </tbody>

      <tbody class="category_products tb-secondary category_{{ category }}" id="category_{{ category }}">
      {% for product in products %}
        <tr>
          <td class="td-big">
            <a href="">
              {{ product }}
            </a>
          </td>
          <td class="right tb-kilos">133.456.789</td>
          <td class="right tb-percentage">82.5%</td>
          <td class="td-bar-chart">
            <div class="bar-chart-cont"><div class="bar-chart" style="width: 45%; "></div></div>
          </td>
        </tr>
      {% endfor %}
      </tbody>

    {% endfor %}
    </table>



  </div>

</div>


<div class="row-col">

  <div class="story-content with-story-menu">

    Origen de los productos

    <h2>Provincia</h2>




  </div>

</div>
