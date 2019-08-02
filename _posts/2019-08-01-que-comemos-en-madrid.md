---
layout: story
title: "¿Qué comemos en Madrid, y de donde viene?"
description: Una exploración sobre los alimentos que pasan por Mercamadrid
date: 2019-08-01 8:00:00 +0100
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

<!-- <div class="story-menu">
  <a href="#section-1">¿Cuáles son los productos más vendidos?</a>
  <a href="#section-1">¿De dónde vienen los productos?</a>
  <a href="#section-1">¿Qué productos vienen de cada sitio?</a>
</div> -->

<div class="row-col">

  <div class="story-content">

    <div class="section">

      <p>Lo primero: disculpas a los no-madrileños, una mayoría aplastante de la población española. Nosotros, a pesar de ser residentes en Madrid (unos oriundos y otros no),  somos conscientes del centralismo mediático, y nada más lejos de nuestra intención que seguir perpetuándolo.</p>

      <p>Pero. Siempre hay un pero. Dimos con un conjunto de datos de Mercamadrid, el mercado mayorista de Madrid.  Y nos entró hambre. Después de alimentarnos nos preguntamos de donde ha venido este melón, de dónde han venido estos tomates, de dónde estas cebollas… y dejamos de preguntarnos, porque nos entraba más hambre.</p>

      <p>Así que metimos todos esos datos en nuestra batidora y esto es lo que ha salido.</p>

      <div class="notes">

        <p>Los datos están extraidos del portal de datos abiertos del Ayuntamiento de Madrid. El periodo al que se refieren todas las visualizaciones en esta página es de Enero a Junio de 2019, ambos incluídos. Si publican más histórico puede que lo incluyamos.</p>

        <p><strong>Importante</strong>: No todos los productos que se comen en Madrid pasan por Mercamadrid, claro. Pero si una parte importante, por lo que consideramos interesante hacer esta exploración. No te tomes estos datos como absolutos y completos.</p>

      </div>

    </div>

    <div class="story-newsletter-promo">

      <p>Te puedes suscribir para recibir nuevas exploraciones de datos como esta. Aprox. 1 mail al mes</p>

      <div>{% include subscription_form_es_horizontal.html %}</div>

    </div>

    <div class="section" id="section-1">

      <h2>Los productos más vendidos</h2>

      <p>O comprados. Los mayoristas se encargan de comprar producto en origen (bueno, en realidad no es tan sencillo) y traerlo hasta aquí, donde otros minoristas (supermercados, tiendas, puestos de mercados) compran para llenar sus anaqueles. Y que a su vez, tu, puedas llenar los tuyos.</p>

      <p><strong>Tu sabes lo que compras - pero de forma agregada, ¿qué consumimos más en Madrid?</strong></p>

      <div class="m_v_2 story-content-overcolumn">
        <iframe title="" aria-label="Table" id="datawrapper-chart-ZnEY5" src="//datawrapper.dwcdn.net/ZnEY5/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="477"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>
      </div>


      <div class="insights">

        <p>"Hay que comer fruta y verdura". El tesón de tus progenitores para que te alimentases bien ha dado sus <em>frutos</em> (🥁): Fruta y verdura es lo que más comemos, con mucha diferencia. ¡A tope con la dieta mediterranea! Así estamos de sanos y así nuestra esperanza de vida continua aumentando.</p>

        <p>INCLUIR NOTA SOBRE EL POLLO? PROBABLEMENTE NO APARECE AQUI TODO EL QUE SE VENDE. Los caminos de la distribución son inexcrutables.</p>

      </div>

    </div>

    <div class="section" id="section-1">

      <div class="m_v_2 story-content-overcolumn">

        <h2>¿De dónde vienen los productos?</h2>

        <p>Estas son las provincias que alimentan a Madrid.</p>

        <iframe title="" aria-label="Spain provinces (2018) choropleth map" id="datawrapper-chart-JYAPB" src="//datawrapper.dwcdn.net/JYAPB/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="800"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>
      </div>

      <p><strong>Más del 50% de los productos vienen de solo 5 provincias</strong>: Almería, Valencia, Murcia, Toledo y Valladolid (y ahora te preguntarás que cuáles son los productos estrella de cada una de esas provincias... te lo contamos más abajo).</p>

      <p><strong>¿Kilómetro cero?</strong> Parece que a nivel general nos queda mucho por avanzar (o poco, según se mire). Sólo un 2,3% de los productos tienen como origen la propia provincia de Madrid (obviamente, habrá mucho producto de proximidad que precisamente por serlo no pasará por Mercamadrid).</p>

      <p><strong>¿Y cuánto producto viene de fuera de España?</strong> Si mezclamos provincias y paises, estas son las geografías que más alimentan Madrid:</p>


      <div class="m_v_2 ">

        <iframe title="Origen de los productos por provincia y pa&iacute;s" aria-label="Table" id="datawrapper-chart-I29Bo" src="//datawrapper.dwcdn.net/I29Bo/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="766"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>

      </div>


      <p>TABLA TOP PAISES</p>


      <p>Regresando a España: Estos son los productos top de cada provincia. ¿Qué gana en la tuya?</p>

      <div class="m_v_3 story-content-full">

        <div class="small-multiples" id="small-multiples-provinces">
        </div>

      </div>


      <div class="m_v_3 story-content-overcolumn">

        <p>Y aquí los principales productos de cada provincia (mostramos solo productos con más de 100.000 kilos vendidos en Mercamadrid durante el periodo).</p>

        <div class="flourish-embed" data-src="visualisation/557814"></div><script src="https://public.flourish.studio/resources/embed.js"></script>
      </div>

    </div>

  </div>

</div>

<div class="row-full flex product-browser">

  <div class="item-list product-browser-sidebar">
    <input type="text" placeholder="Provincia..." class="m_v_2" id="search-province" />

    <div id="provinces"></div>
  </div>

  <div class="product-browser-content">

    <p>Selecciona una provincia para ver sus principales producciones</p>

    <h2>Top productos de <span id="current-province"></span></h2>

    <table id="table-products"> </table>

  </div>

</div>





<div class="row-full flex product-browser">

  <div class="item-list product-browser-sidebar">

    <input type="text" placeholder="Producto..." class="m_v_2">

    {% for category in categories %}
      <a href="" class="toggle-target" data-target="by_product_category_{{ category }}">{{ category }}</a>

      <div class="category_products" id="by_product_category_{{ category }}">
      {% for product in products %}
        <a href="">{{ product }}</a>
      {% endfor %}
      </div>

    {% endfor %}

  </div>

  <div class="product-browser-content">

    <p>Selecciona un producto para ver sus principales orígenes</p>

    <h2>Top provincias de PRODUCTO</h2>

    <table>
    <tr>
      <th></th>
      <th class="right tb-kilos">Kilos</th>
      <th class="right tb-percentage">% Total</th>
      <th></th>
    </tr>

    {% for province in provincias %}
    <tbody class="category">
      <tr>
        <td>
          <a href="" class="toggle-target" data-target="category_{{ category }}">
            {{ province }}
          </a>
        </td>
        <td class="right tb-kilos">133.456.789</td>
        <td class="right tb-percentage">82.5%</td>
        <td class="td-bar-chart">
          <div class="bar-chart-cont"><div class="bar-chart" style="width: 45%; "></div></div>
        </td>
      </tr>
    </tbody>

    {% endfor %}
    </table>



  </div>

</div>


<script type="text/javascript">
$(function() {

  function toId(str){
    return str.split(" ").join("_");
  }

  function lowerCaseAllWordsExceptFirstLetters(string) {
    return string.replace(/\w\S*/g, function (word) {
      return word.charAt(0) + word.slice(1).toLowerCase();
    });
  }

  function processSummaryCSV(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines.slice(1, allTextLines.length -1);
    var origins
    var data = {};
    var provinces = [];
    for(var i = 0; i < entries.length; i++) {
      var dataRow = entries[i].split(',');
      var province = dataRow[0];
      if(provinces.indexOf(province) === -1){
        provinces.push(province);
      }

      if(data[province] === undefined) {
        data[province] = [];
      }

      data[province].push({
        product: lowerCaseAllWordsExceptFirstLetters(dataRow[1]),
        pct: parseFloat(dataRow[2]),
        kg: parseInt(dataRow[3]),
      });
    }
    provinces.sort();
    var $container = $("#small-multiples-provinces");

    for(var i = 0; i < provinces.length; i++){
      var province = provinces[i];
      var content = '<div class="multiple"><h3>' + province + '</h3><table>';
      data[province].sort(function(i1, i2){
        return (i2.pct - i1.pct);
      });
      for(var j = 0; j < 3; j++){
        var product = data[province][j].product;
        var pct = data[province][j].pct;
        var kg = data[province][j].kg;
        content += '<tr><th>' + product + '</th><td class="tb-percentage">' +pct+'%</td>' +
        '<td class="td-bar-chart tooltipped" data-tooltip="'+kg.toLocaleString()+' kg."><div class="td-bar-chart bar-chart-cont"><div class="bar-chart" style="width: '+pct+'%;"></div></div></td></tr>';
      }
      content += '</table></div>';
      $(content).appendTo($container);
    }
  }

  function renderProvinces(provinces, currentProvince){
    var $provinces = $('#provinces');
    var provincesList = "";
    for(var i = 0; i < provinces.length; i++){
      provincesList += '<a href="#">' + provinces[i] + '</a>' + "\n";
    }
    $provinces.html('');
    $(provincesList).appendTo($provinces);

    $('#current-province').html(currentProvince);
  }

  function renderTable(provinces, data, currentProvince){
    var $container = $("#table-products");
    var tableHTML = '<thead><tr><th></th><th class="right tb-kilos">Kilos</th><th class="right tb-percentage">% Total</th><th></th></tr></thead>';

    var provinceData = data[currentProvince];
    provinceData.sort(function(c1, c2){
      return c2.kg - c1.kg;
    });

    var categories = [];
    var categoriesData = {};
    var totalKg = 0;
    for(var i = 0; i < provinceData.length; i++){
      var d = provinceData[i];
      var category = d.category;

      if(categories.indexOf(category) === -1) { categories.push(category); }
      if(categoriesData[category] === undefined) {
        categoriesData[category] = { kg: 0, pct: null };
      }
      categoriesData[category].kg += d.kg;
      totalKg += d.kg;
    }
    categories.sort(function(c1, c2){
      return categoriesData[c2].kg - categoriesData[c1].kg;
    });

    for(var i = 0; i < categories.length; i++){
      var category = categories[i];
      categoriesData[category].pct = ((categoriesData[category].kg / totalKg)*100).toFixed(1) + "%";

      tableHTML += '<tbody class="category"><tr>' +
        ' <td class="td-big">' +
        '   <a href="" class="toggle-target" data-target="category_'+toId(category)+'">' +
        '     <i class="fas fa-plus-circle"></i>' + category +
        '   </a>' +
        ' </td>' +
        ' <td class="right tb-kilos">'+categoriesData[category].kg.toLocaleString()+' kg.</td>' +
        ' <td class="right tb-percentage">'+categoriesData[category].pct+'</td>' +
        ' <td class="td-bar-chart">' +
        '   <div class="bar-chart-cont"><div class="bar-chart" style="width:'+categoriesData[category].pct+';"></div></div> ' +
        ' </td></tr></tbody>' +
        ' <tbody class="category_products tb-secondary category_'+category+'" id="category_'+toId(category)+'">';

      for(var j = 0; j < provinceData.length; j++){
        if(provinceData[j].category === category){
          var pct = (provinceData[j].kg / categoriesData[category].kg) * 100;
          tableHTML += ' <tr>'+
                       '   <td class="td-big">' +
                       '     <a href="">'+provinceData[j].product+'</a>' +
                       '   </td>' +
                       '   <td class="right tb-kilos">'+provinceData[j].kg.toLocaleString()+' kg.</td>' +
                       '   <td class="right tb-percentage">'+pct.toFixed(1)+'%</td>' +
                       '   <td class="td-bar-chart">' +
                       '     <div class="bar-chart-cont"><div class="bar-chart" style="width:'+pct+'%"></div></div>' +
                       '   </td>' +
                       ' </tr>';
        }
      }
      tableHTML += '</tbody>';
    }

    $container.html("");
    $container.html(tableHTML);
  }

  function processDataCSV(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines.slice(1, allTextLines.length -1);
    var origins
    var data = {};
    var provinces = [];
    for(var i = 0; i < entries.length; i++) {
      var dataRow = entries[i].split(',');
      var province = dataRow[0];
      if(provinces.indexOf(province) === -1){ provinces.push(province); }

      if(data[province] === undefined) {
        data[province] = [];
      }

      data[province].push({
        product: lowerCaseAllWordsExceptFirstLetters(dataRow[1]),
        pct: parseFloat(dataRow[2]),
        kg: parseInt(dataRow[3]),
        category: dataRow[4],
      });
    }
    provinces.sort();
    renderProvinces(provinces, currentProvince);
    renderTable(provinces, data, currentProvince);

    $(document).on('click', '#provinces a', function(e){
      e.preventDefault();
      currentProvince = $(this).html();

      renderProvinces(provinces, currentProvince);
      renderTable(provinces, data, currentProvince);
    });

    $('#search-province').on('keyup', function(){
      var suggestion = $(this).val().toLowerCase();
      if(suggestion.length <= 1){
        renderProvinces(provinces, currentProvince);
      } else {
        renderProvinces(provinces.filter(function(p){
          return p.toLowerCase().indexOf(suggestion) !== -1;
        }), currentProvince);
      }
    });
  }

  // Build small multiples
  $.ajax({
     type: "GET",
     url: "/datasets/analysis/mercamadrid/summary_per_province.csv",
     dataType: "text",
     success: function(data) {
       processSummaryCSV(data);
     }
  });

  // Build data explorer
  var currentProvince = "VALENCIA";
  $.ajax({
     type: "GET",
     url: "/datasets/analysis/mercamadrid/data_per_province.csv",
     dataType: "text",
     success: function(data) {
       processDataCSV(data);
     }
  });
});
</script>


