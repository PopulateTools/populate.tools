---
layout: post
title: ¿Cuándo terminará tu municipio de pagar toda su deuda?
subtitle: Herramienta interactiva para entender cuándo tu ayuntamiento podrá deshacerse de su deuda
date: 2016-09-01 8:00:00 +0100
categories:
# excerpt: Even more estimulating excerpt to be used in case you need it.
author: alvaro
main_photo_big:
---

<div class="tool">

  <div class="pure-g center block box_blue">

    <div class="pure-u-1 pure-u-md-10-24">
      <div class="block widget" data-height-reference="debtEvolution" style="padding: 3em 0 0 0">
        <div class="p_v_2">
        	<p class="p_h_4">Los municipios españoles deben</p>
          <div class="highlight_big">28.735 M€</div>
          <div class="highlight_med">616€ por habitante</div>
          <div class="separator"></div>
          <p class="p_h_4">Es la deuda pendiente que tienen el conjunto de nuestros municipios a final del 2015</p>
        </div>
      </div>

    </div>

    <div class="pure-u-1 pure-u-md-1-24"></div>

    <div class="pure-u-1 pure-u-md-13-24">

      <div class="widget p_2 ">

        <div id="debtEvolution" class="debt-chart" data-chart-container="debtEvolution" width="100%" data-chart-data-url="/charts/data/debt-evolution.csv"></div>

      </div>

    </div>

  </div>

</div>


<p>Entre todos los municipios de España debemos 28.735 M€ que se han ido acumulando a lo largo de los años. Pero esto es sólo una pequeña parte de la deuda de las administraciones públicas: la deuda total de España (incluyendo comunidades autónomas, administración central, etc) a abril de 2016 es de 1.078.806M€, 23.188€ por habitante.</p>

<p>El Gobierno impuso una serie de medidas para limitar cuánto se puede endeudar un ayuntamiento, y unas normas que le obligan a dedicar parte de su presupuesto a ir reduciendo la deuda. El resultado es el descenso de la deuda municipal en los últimos años, al tiempo que aumenta el esfuerzo que cada municipio dedica a pagar su deuda (restando recursos para otros temas).</p>

<p><strong>¿Cuánto tiempo tardaremos en pagar la deuda municipal (si no se generase nueva deuda)?</strong></p>

<div class="tool">

  <div class="separator blue short"></div>

  <div class="full_width">

    <!-- {% stylesheet feature_debt_projection_interactive %} -->
    <link type="text/css" rel="stylesheet" href="/assets/feature_debt_projection_interactive.css">
    <iframe src="/widgets/debt_projection_interactive/" id="debt_evolution_widget" scrolling="no" style="border: 0; padding: 0; margin: 0; height: 350px; width: 100%;" frameborder="no" align="center"></iframe>

  </div>

</div>

<div class="separator blue short"></div>

<p>Algunos ejemplos de la proyección (ver nota al pie para detalles sobre cómo hemos proyectado los datos):</p>

{% img 'posts/160901-debt-ex2' %}

{% img 'posts/160901-debt-ex3' %}

<div class="separator blue short"></div>

<p>Pensar que a partir de ahora solo vamos a conseguir reducir la deuda de los municipios es tal vez ser demasiado optimista. Este es por tanto uno de los mejores escenarios posibles. Tampoco consideramos que endeudarse sea necesariamente malo, aunque desde luego que endeudarse sin control si que lo es. La buena noticia es que parece que la deuda de los municipios está más o menos controlada.</p>

<p>La mala noticia es que la deuda de los municipios es solo una parte muy pequeña, apenas un 3%, de la deuda de todas las administraciones públicas. En próximas entregas nos meteremos a analizar la deuda de comunidades autónomas y otros.</p>

<p>En <a href="http://presupuestos.gobierto.es">presupuestos.gobierto.es</a> puedes revisar el presupuesto de tu municipio, y <a href="https://presupuestos.gobierto.es/compare">comparar</a> tu municipio con otros.</p>



<div class="separator blue short"></div>

<div class="note">

  <h2>Metodología y Fuentes</h2>

  <p><strong>Datos deuda municipal:</strong> Los datos de la deuda viva se han obtenido a través del <a href="http://www.minhap.gob.es/es-ES/Areas%20Tematicas/Administracion%20Electronica/OVEELL/Paginas/DeudaViva.aspx" target="_blank">Ministerio de Hacienda y Administraciones Públicas</a>. El dato de la deuda corresponde a la deuda viva a 31 de diciembre del año citado de cada uno de los ayuntamientos. Esta cifra incluye:</p>

  <ul>
    <li>Deudas con entidades de crédito obligadas a declarar a la Central de Información de
      Riesgos del Banco de España, como bancos, cajas de ahorro, cooperativas de crédito,
      sucursales en España de entidades de crédito no residentes y establecimientos financieros
      de crédito.</li>

    <li>Las cuantías correspondientes a emisiones de deuda pública. Se utiliza el protocolo
      de déficit excesivo y para valorar la cuantía de la deuda se han considerado:
      <ul>
        <li>Créditos financieros</li>
        <li>Valores de renta fija</li>
        <li>Productos devengados por activos dudosos</li>
        <li>Préstamos o créditos transferidos a terceros</li>
        <li>Factoring sin recurso</li>
        <li>Fondo de Financiación Pago a Proveedores</li>
        <li>Asociaciones Publico Privadas (APP’s)</li>
      </ul>
    </li>
  </ul>

  <p><a href="http://www.minhap.gob.es/Documentacion/Publico/DGCFEL/DeudaViva/Informe%20Deuda%20Viva%202015%20Total_OVEL_20160506.pdf" target="_blank">Más información</a></p>

  <p><strong>Datos presupuestarios:</strong> Se han extraído de <a href="http://presupuestos.gobierto.es">presupuestos.gobierto.es</a>. <a href="https://presupuestos.gobierto.es/about#method">Ver metodología y fuentes</a>.</p>

  <p><strong>Datos de población:</strong> La información sobre la población de los municipios proviene del INE, extraída y transformada usando la librería <a href="https://github.com/PopulateTools/ruby-px">Ruby-PX</a> desarrollada por <a href="http://populate.tools">Populate</a>.</p>

  <p><strong>Proyección deuda futura</strong> La proyección de cómo evolucionará la deuda en los próximos años la hemos realizado mediante una regresión lineal basada en los datos de los últimos 4 años.</p>

  <p>Si te interesan estos u otros conjuntos de datos ponte en contacto con nosostros en abre@gobierto.es</p>

  <p><strong>Enlaces de interés:</strong></p>

  <ul>
  	<li><a href="http://www.rendiciondecuentas.es/es/informaciongeneral/ingresosentidades/LimitesEndeudamientoEntidadesLocales.html">¿Cuáles son los límites al endeudamiento de las Entidades locales?</a> en rendiciondecuentas.es</li>    
  </ul>

</div>
