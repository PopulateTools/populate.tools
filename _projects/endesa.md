---
layout: project_v2
title: Endesa
name: Tu energía cuenta
client: Endesa
img: project_full/mockup_project.png
weight: 1
lang: en
permalink: projects/endesa
---

<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

<div class="w-100 mt5 mb7 hero">
  <div class="container h-100 flex flex-wrap flex-nowrap-ns items-center justify-between">
    <div class="w-100 w-20-ns mt5 mb4 mt0-ns mb0-ns"><img src="{% asset 'project_full/endesa_logo' @path %}" alt="Endesa" /></div>
    <div class="w-100 w-40-ns f3">
      <strong class="db mb2">
        Exploración y visualización de datos<br />
        y storytelling para Endesa</strong
      >
      <span class="db fw3">Cómo convertir datos complejos en historias</span>
    </div>
    <div class="mt5-ns mr4-ns nl5 nr4 relative">
      <img src="{% asset 'project_full/mobile_screenshot_1' @path %}" alt="Endesa" />
      <div class="absolute" style="top: 14.65%; left: 21.5%; width: 67.53%; height: 100%;">
        <div
          class="absolute w-100 overflow-y-hidden"
          style="height: 71.8%; border-bottom-left-radius: 8.66% 4.21%; border-bottom-right-radius: 8.66% 4.21%;"
        >
          <video class="w-100" src="{% asset 'project_full/video/coverymovilscrollytelling.mp4' @path %}" autoplay loop></video>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="dn-ns">
  <div class="mb7 cf"></div>
  <div class="mb6 cf"></div>
</div>

<div class="container cf">
  <div class="sidebar fl dn db-ns">
    <ul class="list f7 pl0 pr5">
      <li class="mb3 pointer"><a class="link" href="#proyecto">El proyecto</a></li>
      <li class="mb3 pointer"><a class="link" href="#claves">Claves</a></li>
      <li class="mb3 pointer"><a class="link" href="#storytelling">Storytelling</a></li>
      <li class="mb3 pointer"><a class="link" href="#consumo-energia">Visualización</a></li>
      <li class="mb3 pointer"><a class="link" href="#analisis">Análisis de datos</a></li>
      <li class="mb3 pointer"><a class="link" href="#resultado">El resultado</a></li>
    </ul>
  </div>

  <div class="main fl w-100">
    <section class="mb5 mb6-ns">
      <div id="proyecto" class="anchor"></div>
      <div class="cf w-100 mb5 mb6-ns">
        <h3 class="fl w-100 w-col-a-ns mb4">Proyecto</h3>
        <div class="fl w-100 w-col-b-ns">
          <p>
            Tu energía cuenta es un site que explica cómo somos los hogares españoles de acuerdo a nuestro consumo de energía a través de
            análisis de datos, visualizaciones interactivas y reportajes periodísticos.
          </p>
          <p>
            Hemos analizado los datos de consumo eléctrico de millones de hogares españoles para definir una serie de tipos de hogares en
            base a su consumo eléctrico, su composición, y sus actividades.
          </p>
          <p>
            Hemos puesto en contexto los datos de consumo de Endesa con diversas fuentes externas para darles contexto y entender mejor cómo
            somos los hogares españoles. En colaboración con <a href="https://www.webedia.es" target="_blank">Webedia</a> y <a href="https://visualizados.com" target="_blank">Visualizados</a>. Visita el
            proyecto en <a href="https://tuenergiacuenta.com">tuenergiacuenta.com</a>.
          </p>
        </div>
      </div>
      <div id="claves" class="anchor"></div>
      <div class="cf w-100">
        <h3 class="fl w-100 w-col-a-ns mb4">Claves</h3>
        <div class="fl w-100 w-col-b-ns">
          <div class="flex mb5">
            <div class="w-50 pr3 pr5-ns">
              <img class="db mb4 h3" src="{% asset 'project_full/claves-1' @path %}" alt="Exploración y análisis de datos" />
              <strong class="db mb2">Exploración y análisis de datos</strong>
              <p>
                Análisis de millones de registros de consumo eléctrico horario y búsqueda de fuentes de datos públicas y abiertas para
                contextualizar y enriquecer los datos.
              </p>
            </div>
            <div class="w-50">
              <img class="db mb4 h3" src="{% asset 'project_full/claves-2' @path %}" alt="Visualizaciones" />
              <strong class="db mb2">Visualizaciones</strong>
              <p>
                Transformamos los datos complejos en visualizaciones que permiten comprender de forma intuitiva distintas facetas de los
                mismos.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="w-50 pr3 pr5-ns">
              <img class="db mb4 h3" src="{% asset 'project_full/claves-3' @path %}" alt="Storytelling" />
              <strong class="db mb2">Storytelling</strong>
              <p>Creamos historias a partir de los datos para conectar con los lectores.</p>
            </div>
            <div class="w-50">
              <img class="db mb4 h3" src="{% asset 'project_full/claves-4' @path %}" alt="Storytelling" />
              <strong class="db mb2">Mobile-first</strong>
              <p>Visualizaciones e historias pensadas para que funcionen en móvil de forma nativa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="full-width cf mb5 mb6-ns overflow-hidden image-gallery" style="background-color: #fafafa">
      <h3 class="center mv4 mv5-ns">Iteraciones</h3>
      <div class="flex justify-center" style="margin-bottom: -20px">
        <img src="{% asset 'project_full/iterations_01' @path %}" />
        <img src="{% asset 'project_full/iterations_02' @path %}" />
        <img src="{% asset 'project_full/iterations_03' @path %}" />
        <img src="{% asset 'project_full/iterations_04' @path %}" />
        <img src="{% asset 'project_full/iterations_05' @path %}" />
      </div>
    </div>

    <div id="storytelling" class="anchor"></div>
    <section class="flex flex-wrap-reverse justify-center items-center mb5 mb6-ns">
      <div class="w-100 w-50-ns">
        <h3 class="mb4">Storytelling</h3>
        <p>
          ¿Cómo contar una historia compleja (qué dice el consumo eléctrico de los hogares españoles) en la que el lector a priori puede que
          no tenga demasiado interés?
        </p>
        <p>
          Propusimos utilizar un formato moderno que permite ser profuso en visualizaciones y elementos visuales al tiempo que se mantiene
          el patrón de interacción básico (el scroll). Con el scrollytelling combinamos textos y enfoque periodístico con visualizaciones
          que se transforman y actualizan para acompañar la historia y reforzar los elementos comunicativos.
        </p>
      </div>
      <div class="relative">
        <img src="{% asset 'project_full/mobile_screenshot_1' @path %}" />
        <div class="absolute" style="top: 14.65%; left: 21.5%; width: 67.53%; height: 100%;">
          <div
            class="absolute w-100 overflow-y-hidden"
            style="height: 71.8%; border-bottom-left-radius: 8.66% 4.21%; border-bottom-right-radius: 8.66% 4.21%;"
          >
            <video class="w-100" src="{% asset 'project_full/video/coverymovilscrollytelling.mp4' @path %}" autoplay loop></video>
          </div>
        </div>
      </div>
    </section>

    <section class="mb5 mb6-ns relative">
      <img src="{% asset 'project_full/laptop_screenshot_1' @path %}" />
      <div class="absolute" style="top: 7.328%; left: 16.127%; width: 68.056%; height: 80.029%;">
        <video class="w-100 h-100" src="{% asset 'project_full/video/portatil_scrollytelling.mp4' @path %}" autoplay loop></video>
      </div>
    </section>

    <div id="consumo-energia" class="anchor"></div>
    <section class="mb5 mb6-ns">
      <h3 class="mb4">Visualizando cómo se consume la energía</h3>
      <p>
        Para complementar el scrollytelling hemos diseñado e implementado una serie de <strong>visualizaciones interactivas</strong> que
        exploran y profundizan en distintas dimensiones de los datos.
      </p>
      <p>
        ¿Qué hace cada hogar en cada momento? Analizando datos de consumo eléctrico horario y de la Encuesta de Empleo del Tiempo del INE,
        <strong>visualizamos qué está haciendo cada hogar en cada momento</strong>. Puedes ver de un vistazo cómo cambian las actividades en
        el mismo momento de un tipo de hogar a otro.
      </p>
    </section>

    <section class="mb5 mb6-ns flex justify-center">
      <div class="relative">
        <img class="db" src="{% asset 'project_full/mobile_screenshot_2' @path %}" />
        <div class="absolute" style="top: 9.182%; left: 35.44%; width: 32.72%; height: 100%;">
          <div
            class="absolute w-100 overflow-y-hidden"
            style="height: 77.74%; border-bottom-left-radius: 8.66% 4.21%; border-bottom-right-radius: 8.66% 4.21%;"
          >
            <video class="w-100" src="{% asset 'project_full/video/movilcentralquehacenloshogares.mp4' @path %}" autoplay loop></video>
          </div>
        </div>
      </div>
    </section>

    <div id="reto" class="anchor"></div>
    <section class="mb5 mb6-ns">
      <p>
        <strong>¿Qué ocurre en las grandes ciudades cuando llega el verano?</strong> Analizamos las series temporales de datos para ver cómo
        afecta la llegada del verano en distintas localidades. ¿Se vacían las grandes ciudades? ¿El consumo en las zonas vacaciones aumenta
        considerablemente? La respuesta, de un vistazo.
      </p>
    </section>

    <section class="center mb5 mb6-ns">
      <img src="{% asset 'project_full/laptop_screenshot_2' @path %}" />
    </section>

    <div id="analisis" class="anchor"></div>
    <section class="mb5 mb6-ns">
      <h3 class="mb4">Análisis de datos, ¿cómo lo hemos hecho?</h3>
      <p>
        Los datos esenciales han sido las curvas de consumo en Watios hora de millones de clientes de Endesa a lo largo de distintos
        periodos.
      </p>
      <p>
        Estas curvas han sido procesadas mediante técnicas de análisis de series temporales, lo que ha permitido eliminar el ruido y
        determinar la curva modelo de cada hogar. Sobre estas curvas ha realizado un proceso iterativo de entrenamiento y análisis de
        clusters hasta determinar unos conjuntos de hogares representativos, utilizando una función de entrenamiento que minimizaba la
        distancia de las curvas a todos los clusters.
      </p>
      <p>
        Estos clústers han permitido crear un modelo matemático de clasificación que ha sido empleado a lo largo del proyecto para
        clasificar subconjuntos de curvas, por ejemplo, curvas de cada una de las provincias españolas.
      </p>
      <p>
        Estos modelos también se han aplicado en la Encuesta de Empleo del Tiempo del INE. Para cada una de las actividades principales y
        secundarias y según si sucedían dentro o fuera de casa se han creado unas curvas “virtuales” de consumo eléctrico. Al aplicar dicho
        modelo se han extraído los hogares y las personas de cada una de las tipologías definidas por el cluster. Esto ha permitido extraer
        conclusiones de las actividades y los hábitos por tipología de hogar.
      </p>

      <img class="w-100 mt4" src="{% asset 'project_full/source_code' @path %}" />
    </section>

    <section class="mb5 mb6-ns">
      <div id="resultado" class="anchor"></div>
      <div class="cf">
        <h3 class="fl w-100 w-col-a-ns">Resultado</h3>
        <div class="fl w-100 w-col-b-ns">
          De una base de datos con cientos
          <strong
            >de millones de registros de clientes repartidos por toda España a visualizaciones que te permiten entender los datos</strong
          >
          de un vistazo y una historia para guiarte en su exploración, contextualizando con fuentes de datos externas para explicar otras
          facetas de los datos.
        </div>
      </div>
    </section>

    <div class="full-width mb5 mb6-ns flex justify-center" style="background-color: #ebebeb">
      <img class="db" src="{% asset 'project_full/mockup_project' @path %}" />
    </div>

    <section class="mb5 mb6-ns">
      <h3 class="mb4">Iconos e ilustraciones</h3>
      <div class="flex flex-wrap justify-between items-end mb5">
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-0' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-1' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-2' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-3' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-4' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-5' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-6' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-7' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-8' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-9' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-10' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-11' @path %}" />
        </div>
        <div class="ma1 pa1">
          <img src="{% asset 'project_full/icon-12' @path %}" />
        </div>
      </div>

      <div class="flex flex-wrap justify-between items-end mb5">
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-1' @path %}" />
        </div>
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-2' @path %}" />
        </div>
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-3' @path %}" />
        </div>
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-4' @path %}" />
        </div>
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-5' @path %}" />
        </div>
        <div class="pa1 ma1">
          <img src="{% asset 'project_full/user-6' @path %}" />
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-end mb5">
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion1' @path %}" />
        </div>
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion2' @path %}" />
        </div>
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion3' @path %}" />
        </div>
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion4' @path %}" />
        </div>
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion5' @path %}" />
        </div>
        <div class="ma2 pa2">
          <img src="{% asset 'project_full/ilustracion6' @path %}" />
        </div>
      </div>
    </section>

    <section>
      <div class="cf">
        <h3 class="fl w-100 w-col-a-ns">Skills</h3>
        <ul class="fl w-100 w-col-b-ns list pl0">
          <li class="mb2">Análisis de datos</li>
          <li class="mb2">Visualización</li>
          <li class="mb2">Front-end</li>
          <li class="mb2">Diseño visual</li>
        </ul>
      </div>
    </section>
  </div>
</div>
