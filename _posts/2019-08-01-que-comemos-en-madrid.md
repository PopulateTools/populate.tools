---
layout: story
body_class: story_merca
title: "¿Qué comemos en Madrid, y de donde viene?"
description: Una exploración sobre los alimentos que pasan por Mercamadrid
date: 2019-09-04 8:00:00 +0100
author: blat
lang: es
category: populate_news
img: posts/190901-mercamadrid-ilu-intro.png
---

<div class="menu-story">

  <div class="menu-story-cue">
    <a href="">
      <i class="fas fa-bars"></i>
      Movidas
    </a>
  </div>

  <div class="menu-story-open">
    <div class="pure-g">

      <div class="pure-u-1 pure-u-md-1-2 menu-story-container">
        <h2>{{ page.title }}</h2>
        <div class="menu-story-items">
          <a href="#top">Lo primero</a>
          <a href="#section-1">¿Cuáles son los productos más vendidos?</a>
          <a href="#section-2">¿De dónde vienen los productos?</a>
          <a href="#section-3">¿Qué productos vienen de cada sitio?</a>
          <a href="#section-4">¿Qué sitios exportan más productos?</a>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1-2 menu-story-about">
        {% include populate_news_about.html %}
      </div>
    </div>
  </div>

</div>

<div class="row-col">

  <div class="story-content">

    <div class="section" id="section-0">

      <p>Lo primero: disculpas a los no-madrileños, una mayoría aplastante de la población española. Nosotros, a pesar de ser residentes en Madrid (unos oriundos y otros no),  somos conscientes del centralismo mediático, y nada más lejos de nuestra intención que seguir perpetuándolo.</p>

      <p>Pero. Siempre hay un pero. Dimos con un conjunto de datos de Mercamadrid, el mercado mayorista de Madrid.  Y nos entró hambre. Después de alimentarnos nos preguntamos de donde ha venido este melón, de dónde han venido estos tomates, de dónde estas cebollas… y dejamos de preguntarnos, porque nos entraba más hambre.</p>

      <p>Así que metimos todos esos datos en nuestra batidora y esto es lo que ha salido.</p>

      <div class="notes">

        <p>Los datos están extraidos del <a href="https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=a4df993ae322b610VgnVCM1000001d4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default">portal de datos abiertos del Ayuntamiento de Madrid</a>. El periodo al que se refieren todas las visualizaciones en esta página es de Enero a Junio de 2019, ambos incluídos. Si publican más histórico puede que lo incluyamos.</p>

        <p><strong>Importante</strong>: No todos los productos que se comen en Madrid pasan por Mercamadrid, claro. Pero si una parte importante, por lo que consideramos interesante hacer esta exploración. No te tomes estos datos como absolutos y completos.</p>

      </div>

    </div>

  </div>

</div>

{% asset 'posts/190901-Merca-Foto' class='' style='' %}

<div class="row-col">

  <div class="story-content">

    <div class="story-newsletter-promo">

      <p>Te puedes suscribir para recibir nuevas exploraciones de datos como esta. Aprox. 1 mail al mes</p>

      <div>{% include subscription_form_es_horizontal.html %}</div>

    </div>

    <div class="section" id="section-1">

      <h2>Los productos más vendidos</h2>

      <p>O comprados. Los mayoristas se encargan de comprar producto en origen (bueno, en realidad no es tan sencillo) y traerlo hasta aquí, donde otros minoristas (supermercados, tiendas, puestos de mercados) compran para llenar sus anaqueles. Y que a su vez, tu, puedas llenar los tuyos.</p>

      <p><strong>Tu sabes lo que compras - pero de forma agregada, ¿qué consumimos más en Madrid?</strong></p>

      <div class="m_v_2 story-content-overcolumn">
        <iframe title="" aria-label="Table" id="datawrapper-chart-ZnEY5" src="//datawrapper.dwcdn.net/ZnEY5/5/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="477"></iframe><script type="text/javascript">(function() {    'use strict';    window.addEventListener('message', function(event) {        if (typeof event.data['datawrapper-height'] !== 'undefined') {            for (var chartId in event.data['datawrapper-height']) {                var iframe = document.getElementById('datawrapper-chart-' + chartId) || document.querySelector("iframe[src*='" + chartId + "']");                if (!iframe) {                    continue;                }                iframe.style.height = event.data['datawrapper-height'][chartId] + 'px';            }        }    });})();</script>
      </div>


      <div class="insights">

        <p>"Hay que comer fruta y verdura". El tesón de tus progenitores para que te alimentases bien ha dado sus <em>frutos</em> (🥁): Fruta y verdura es lo que más comemos, con mucha diferencia. ¡A tope con la dieta mediterranea! Así estamos de sanos y así nuestra esperanza de vida continua aumentando.</p>

        <div class="notes">
          <p><strong>¿Tan poco pollo?</strong> Mercamadrid está dividido en mercados: los principales son carnes, pescados y frutas. Hay naves de polivalencia donde se venden todo tipo de productos y en donde se aprecia un crecimiento muy notable en los últimos años pues cada vez hay mas productos de la denominada cuarta y quinta gama.</p>

          <p>En Mercamadrid no hay mercado de aves, el (poco) pollo que hay es distribuido en las naves de polivalencia. Por eso es un producto tan residual en los datos globales de entrada y salida de alimentos.</p>
        </div>

      </div>

    </div>

    <div class="section" id="section-2">

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





<div class="row-full section-cover section center" id="section-3" style="margin-top: 8em;">
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-6">
        {% asset 'posts/190901-Sparra' class='' style='margin: auto; margin-top: -81%; margin-bottom: -50%; ' %}
      </div>
      <div class="pure-u-1 pure-u-md-5-6">
        <h2>Top productos</h2>
        <p>¿Cuáles son los principales productos que exporta cada provincia a (Merca)Madrid?</p>
      </div>
    </div>
  </div>
</div>


<div class="row-full flex product-browser" id="browser-products">

  <div class="item-list product-browser-sidebar">
    <input type="text" placeholder="Provincia..." id="search-province" />

    <div class="m_v_2" id="provinces"></div>
  </div>

  <div class="product-browser-content">

    <div class=" m_v_b_1 product-browser-content-header">

      <h2>
        Top
        <a href="" class="tab-link current button_small" data-tab="tab-provincias-1" data-rel="categories">categorías</a>
        <a href="" class="tab-link button_small" data-tab="tab-provincias-2" data-rel="products">productos</a>
        <span id="current-province"></span>
      </h2>
      <small><a href="#" data-reset="province-filter">ver todo</a></small>

    </div>

    <table id="table-products"></table>

  </div>

</div>


<div class="row-full section-cover section center" id="section-4" style="margin-top: 8em;">
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3">
        {% asset 'posts/190901-Spain' class='' style='margin-top: -18%; margin-bottom: -23%; ' %}
      </div>
      <div class="pure-u-1 pure-u-md-2-3">
        <h2>Top provincias</h2>
        <p>¿Cuál es el origen de cada uno de los productos que llegan a (Merca)Madrid?</p>
      </div>
    </div>
  </div>
</div>


<div class="row-full flex product-browser" id="browser-provinces">

  <div class="item-list product-browser-sidebar">

    <input type="text" placeholder="Producto..." id="search-product">

    <div class="m_v_2" id="products"></div>

  </div>

  <div class="product-browser-content">

    <h2>Top provincias <span id="current-product"></span></h2>
    <small><a href="#" data-reset="product-filter">ver todo</a></small>

    <table id="table-provinces"></table>

  </div>

</div>


<div class="separator"></div>

<div class="sources section-text narrow-col" id="sources">

  <h2>Créditos</h2>

  <ul>
    <li>Análisis de datos y textos: Fernando Blat y Álvaro Ortiz</li>
    <li>Ilustraciones: Belén Temprado</li>
    <li>Fotografía Mercamadrid: <a href="https://lostiumproject.com/">Juanjo Gaspar</a></li>
  </ul>

</div>



{% contentfor js %}
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
        content += '<tr><th>' + product + '</th><td class="tb-percentage">' +pct+'%</td>';
        content += '<td class="td-bar-chart tooltipped" data-tooltip="'+kg.toLocaleString()+' kg."><div class="td-bar-chart bar-chart-cont"><div class="bar-chart" style="width: '+pct+'%;"></div></div></td></tr>';
      }
      content += '</table></div>';
      $(content).appendTo($container);
    }
  }

  function renderProducts(categories, products, currentProduct){
    var $products = $('#products');
    var productsList = "";
    if(Array.isArray(products)) {
      for(var i = 0; i < products.length; i++){
        productsList += '<a href="#table-provinces-'+products[i]+'" data-product>'+products[i]+'</a>';
      }
    } else {
      for(var i = 0; i < categories.length; i++){
        var category = categories[i];
        productsList += '<a href="#" class="toggle-target" data-target="by_product_category_'+toId(category)+'">' + category + '</a>';
        productsList += '<div class="category_products" id="by_product_category_'+toId(category)+'">';
        for(var j = 0; j < products[category].length; j++){
          productsList += '<a href="#table-provinces-'+products[category][i]+'" data-product>'+products[category][j]+'</a>';
        }
        productsList += '</div>';
      }
    }
    $products.html('');
    $(productsList).appendTo($products);

    if(currentProduct !== null) {
      $('#current-product').html(" de " + currentProduct);
      $('a[data-reset="product-filter"]').show();
    } else {
      $('#current-product').html("");
      $('a[data-reset="product-filter"]').hide();
    }
  }

  function renderProvinces(provinces, currentProvince){
    var $provinces = $('#provinces');
    var provincesList = "";
    for(var i = 0; i < provinces.length; i++){
      provincesList += '<a href="#table-products-'+provinces[i]+'">' + provinces[i] + '</a>' + "\n";
    }
    $provinces.html('');
    $(provincesList).appendTo($provinces);

    if(currentProvince !== null) {
      $('#current-province').html(" de " + currentProvince);
      $('a[data-reset="province-filter"]').show();
    } else {
      $('#current-province').html("");
      $('a[data-reset="province-filter"]').hide();
    }
  }

  function renderProductsPerProvinceTable(provinces, data, currentProvince, showCategories){
    var $container = $("#table-products");
    var tableHTML = '<thead><tr><th></th><th class="right tb-kilos">Kilos</th><th class="right tb-percentage">% Total</th><th></th></tr></thead>';

    if(currentProvince !== null){
      var provinceData = data[currentProvince];
    } else {
      var provinceData = data;
    }

    if(showCategories) {
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
          ' <td class="">' +
          '   <a href="" class="toggle-target" data-target="category_'+toId(category)+'">' +
          '     <i class="fas fa-plus-circle"></i>' + category +
          '   </a>' +
          ' </td>' +
          ' <td class="right tb-kilos">'+categoriesData[category].kg.toLocaleString()+' kg.</td>' +
          ' <td class="right tb-percentage">'+categoriesData[category].pct+'</td>' +
          ' <td class="td-bar-chart">' +
          '   <div class="bar-chart-cont"><div class="bar-chart" style="width:'+categoriesData[category].pct+';"></div></div> ' +
          ' </td></tr></tbody>';
        tableHTML += '<tbody class="category_products tb-secondary category_'+category+'" id="category_'+toId(category)+'">';

        for(var j = 0; j < provinceData.length; j++){
          if(provinceData[j].category === category){
            var pct = (provinceData[j].kg / categoriesData[category].kg) * 100;
            tableHTML += ' <tr>'+
              '   <td class="td-big">' +
              '     <a href="#table-provinces-'+provinceData[j].product+'" data-navigate-product="'+provinceData[j].product+'">'+provinceData[j].product+'</a>' +
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
    } else {
      var flatProducts = Object.values(provinceData);
      var totalKg = 0;
      for(var i = 0; i < flatProducts.length; i++){
        totalKg += provinceData[i].kg;
      }

      tableHTML += '<tbody class="category">';
      for(var i = 0; i < flatProducts.length; i++){
        var pct = (flatProducts[i].kg / totalKg) * 100;
        tableHTML += ' <tr>'+
          '   <td class="">' +
          '     <a href="#table-provinces-'+flatProducts[i].product+'" data-navigate-product="'+flatProducts[i].product+'">'+flatProducts[i].product+'</a>' +
          '   </td>' +
          '   <td class="right tb-kilos">'+flatProducts[i].kg.toLocaleString()+' kg.</td>' +
          '   <td class="right tb-percentage">'+pct.toFixed(1)+'%</td>' +
          '   <td class="td-bar-chart">' +
          '     <div class="bar-chart-cont"><div class="bar-chart" style="width:'+pct+'%"></div></div>' +
          '   </td>' +
          ' </tr>';
      }
      tableHTML += '</tbody>';
    }

    $container.html("");
    $container.html(tableHTML);
  }

  function renderProvincesPerProductTable(data, currentProduct) {
    var $container = $("#table-provinces");
    var tableHTML = '<thead><tr><th></th><th class="right tb-kilos">Kilos</th><th class="right tb-percentage">% Total</th><th></th></tr></thead>';

    if(currentProduct !== null){
      var productData = data[currentProduct];
    } else {
      var productData = data;
    }
    productData.sort(function(c1, c2){
      return c2.kg - c1.kg;
    });

    var totalKg = 0;
    for(var i = 0; i < productData.length; i++){
      totalKg += productData[i].kg;
    }

    for(var i = 0; i < productData.length; i++){
      var d = productData[i];

      var pct = (d.kg/totalKg)*100;

      tableHTML += '<tbody class="category"><tr>' +
        ' <td>' +
        '   <a href="#table-products-'+d.province+'" data-navigate-province="'+d.province+'">'+d.province+'</a>' +
        ' </td>' +
        ' <td class="right tb-kilos">'+d.kg.toLocaleString()+' kg.</td>' +
        ' <td class="right tb-percentage">'+pct.toFixed(1)+'%</td>' +
        ' <td class="td-bar-chart">' +
        '   <div class="bar-chart-cont"><div class="bar-chart" style="width:'+pct+'%"></div></div>' +
        ' </td>' +
        ' </tr>';
      tableHTML += '</tbody>';
    }
    $container.html("");
    $container.html(tableHTML);
  }

  function processDataCSV(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines.slice(1, allTextLines.length -1);
    var dataPerProvince = {};
    var globalDataPerProvince = [];
    var dataPerProduct = {};
    var globalDataPerProduct = [];

    var tempDataPerProvince = {};
    var tempDataPerProduct = {};
    var provinces = [];
    var products = {};
    var allProducts = [];
    for(var i = 0; i < entries.length; i++) {
      var dataRow = entries[i].split(',');
      var province = dataRow[0];
      var category = dataRow[4];
      var product = lowerCaseAllWordsExceptFirstLetters(dataRow[1]);

      if(provinces.indexOf(province) === -1){ provinces.push(province); }

      if(dataPerProvince[province] === undefined) {
        dataPerProvince[province] = [];
      }

      if(dataPerProduct[product] === undefined) {
        dataPerProduct[product] = [];
      }

      if(products[category] === undefined) {
        products[category] = [];
      }

      if(products[category].indexOf(product) === -1){
        products[category].push(product);
      }

      if(allProducts.indexOf(product) === -1){
        allProducts.push(product);
      }

      dataPerProvince[province].push({
        product: product,
        pct: parseFloat(dataRow[2]),
        kg: parseInt(dataRow[3]),
        category: category,
      });

      dataPerProduct[product].push({
        province: province,
        pct: parseFloat(dataRow[2]),
        kg: parseInt(dataRow[3]),
        category: category,
      });

      if(tempDataPerProvince[product] === undefined) {
        tempDataPerProvince[product] = { pct: 0, kg: 0, category: category };
      }

      if(tempDataPerProduct[province] === undefined) {
        tempDataPerProduct[province] = { pct: 0, kg: 0 };
      }

      var kg = parseFloat(dataRow[3]);

      tempDataPerProvince[product].pct += parseFloat(dataRow[2]);
      tempDataPerProvince[product].kg += kg;

      tempDataPerProduct[province].kg += kg;

    }
    var tempProducts = Object.keys(tempDataPerProvince);
    for(var i = 0; i < tempProducts.length; i++) {
      var d = tempDataPerProvince[tempProducts[i]];
      globalDataPerProvince.push({ product: tempProducts[i], kg: d.kg, category: d.category });
    }

    for(var i = 0; i < provinces.length; i++) {
      var d = tempDataPerProduct[provinces[i]];
      globalDataPerProduct.push({ province: provinces[i], kg: d.kg});
    }

    provinces.sort();
    var categories = Object.keys(products).sort();

    for(var i = 0; i < categories.length; i++) {
      products[categories[i]].sort();
    }

    // Handle URLS
    var urlSegment = window.location.hash;
    if(urlSegment.match(/^#table-products/gi)) {
      console.log("table products");
      var elements = urlSegment.split("-");
      if(elements.length === 3){
        currentProvince = elements[2];
      }
    } else if(urlSegment.match(/^#table-provinces/gi)) {
      console.log("table provinces");
      var elements = urlSegment.split("-");
      if(elements.length === 3){
        currentProduct = elements[2];
      }
    }

    renderProvinces(provinces, currentProvince);
    if(currentProvince === null) {
      renderProductsPerProvinceTable(provinces, globalDataPerProvince, currentProvince, true);
    } else {
      renderProductsPerProvinceTable(provinces, dataPerProvince, currentProvince, true);
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#browser-products").offset().top
      }, 100);
    }

    renderProducts(categories, products, currentProduct);
    renderProvincesPerProductTable(globalDataPerProduct, currentProduct);
    if(currentProduct !== null) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#browser-provinces").offset().top
      }, 100);
    }

    // Handle events
    $(document).on('click', '#provinces a', function(e){
      e.preventDefault();
      currentProvince = $(this).html();

      $('a[data-reset="province-filter"]').show();
      renderProvinces(provinces, currentProvince);
      renderProductsPerProvinceTable(provinces, dataPerProvince, currentProvince, true);
      window.location.hash = $(this).attr('href');
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#browser-products").offset().top
      }, 100);
    });

    $(document).on('click', '#products a[data-product]', function(e){
      e.preventDefault();
      currentProduct = $(this).html();

      $('a[data-reset="product-filter"]').show();
      renderProducts(categories, products, currentProduct);
      renderProvincesPerProductTable(dataPerProduct, currentProduct);
      window.location.hash = $(this).attr('href');
    });

    $(document).on('click', '[data-navigate-product]', function(e){
      e.preventDefault();

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#browser-provinces").offset().top
      }, 100);

      currentProduct = $(this).data('navigate-product');
      $('a[data-reset="product-filter"]').show();
      renderProducts(categories, products, currentProduct);
      renderProvincesPerProductTable(dataPerProduct, currentProduct);
      window.location.hash = $(this).attr('href');
    });

    $(document).on('click', '[data-navigate-province]', function(e){
      e.preventDefault();

      $([document.documentElement, document.body]).animate({
        scrollTop: $("#browser-products").offset().top
      }, 100);

      currentProvince = $(this).data('navigate-province');
      $('a[data-reset="province-filter"]').show();
      renderProvinces(provinces, currentProvince);
      renderProductsPerProvinceTable(provinces, dataPerProvince, currentProvince, true);
      window.location.hash = $(this).attr('href');
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

    $('#search-product').on('keyup', function(){
      var suggestion = $(this).val().toLowerCase();
      if(suggestion.length <= 1){
        renderProducts(categories, products, currentProduct);
      } else {
        renderProducts(categories, allProducts.filter(function(p){
          return p.toLowerCase().indexOf(suggestion) !== -1;
        }), currentProduct);
      }
    });

    $('a[data-reset="province-filter"]').click(function(e){
      e.preventDefault();

      currentProvince = null;
      renderProvinces(provinces, currentProvince);
      renderProductsPerProvinceTable(provinces, globalDataPerProvince, currentProvince, true);
      $(this).hide();
    });

    $('a[data-reset="product-filter"]').click(function(e){
      e.preventDefault();

      currentProduct = null;
      renderProducts(categories, products, currentProduct);
      renderProvincesPerProductTable(globalDataPerProduct, currentProduct);
      $(this).hide();
    });

    $('a[data-rel="categories"]').click(function(e){
      e.preventDefault();

      $('[data-rel]').removeClass('current');
      $(this).addClass('current');

      if(currentProvince == null) {
        renderProductsPerProvinceTable(provinces, globalDataPerProvince, currentProvince, true);
      } else {
        renderProductsPerProvinceTable(provinces, dataPerProvince, currentProvince, true);
      }
    });

    $('a[data-rel="products"]').click(function(e){
      e.preventDefault();

      $('[data-rel]').removeClass('current');
      $(this).addClass('current');

      if(currentProvince == null) {
        renderProductsPerProvinceTable(provinces, globalDataPerProvince, currentProvince, false);
      } else {
        renderProductsPerProvinceTable(provinces, dataPerProvince, currentProvince, false);
      }
    });
  }

  // Build data explorer
  var currentProvince = null;
  var currentProduct = null;
  $.ajax({
     type: "GET",
     url: "/datasets/190901_mercamadrid_data_per_province.csv",
     dataType: "text",
     success: function(data) {
       processDataCSV(data);
     }
  });

  // Build small multiples
  $.ajax({
     type: "GET",
     url: "/datasets/190901_mercamadrid_summary_per_province.csv",
     dataType: "text",
     success: function(data) {
       processSummaryCSV(data);
     }
  });

  // Show menu
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 500) {
      // $('.scroll-to-top').fadeIn();
      $('.menu-story').fadeIn();
    } else {
      // $('.scroll-to-top').fadeOut();
      $('.menu-story').fadeOut();
    }
  });
});
</script>
{% endcontentfor %}
