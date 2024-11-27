---
layout: post
title: "Cómo introducirte en el mundo del open source si eres estudiante (y ganar puntos para conseguir tu primer trabajo)"
date: 2018-04-04 8:00:00 +0100
author: amiedes
lang: es
category: technology
---

Soy Alberto Miedes, y durante los cursos 2012–2017 estudié Ingeniería de Computadores en la Universidad Complutense de Madrid. Durante mi último año de carrera (y como parte de mi Trabajo de Fin de Grado) realicé varias aportaciones al código de [Decide Madrid](https://decide.madrid.es/), alojado en GitHub en el repositorio de [Consul](https://github.com/consul/consul).

Gracias a esto desarrollé cierta soltura con este tipo de contribuciones, que me llevaron a hacer alguna aportación discreta a otros proyectos y que acabaron derivando en lo que es actualmente mi primer trabajo como desarrollador en Populate.

Aunque con los conocimientos que se tienen al acabar la universidad es difícil hacer una contribución de cierta envergadura a un proyecto, es fácil hacer aportaciones sencillas que vienen muy bien para familiarizarte con las herramientas que se utilizan fuera de la universidad y (con suerte) llamar la atención de los mantenedores del repositorio.

Contribuir a un proyecto open source en tu tiempo libre supone un esfuerzo importante, pues implica que tienes que compatibilizarlo con el resto de tus obligaciones. En mi caso, el último año de carrera tenía únicamente el Trabajo de Fin de Grado pendiente, así que tuve más tiempo libre. Pero como no es lo habitual, me gustaría compartir algunos trucos para poder hacer alguna contribución puntual sin necesidad de invertir grandes cantidades de tiempo.

Siempre da respeto enviar una contribución a un repositorio ajeno, pero si eres estudiante, llevas poco tiempo programando, o es la primera vez que decides hacerlo todavía puede resultar más intimidante.

En este post voy a contar algunos trucos que me han servido a mi para encontrar posibles puntos de contribución.


## Busca tareas catalogadas como “sencillas”

Un primer paso sería buscar aquellas issues marcadas con labels tipo good-first-issue, good-for-contribution o algo del estilo. Por ejemplo, en el repositorio publiclab/plots2 reservan las issues con el label first-timers-only para aquellas personas que no han contribuido nunca a dicho repositorio (y que incluso puede ser su primera contribución a un proyecto open source). En estas issues prestan especial atención a la hora de redactar cuál es el problema e incluso proponen una solución tentativa y los pasos que habría que seguir para resolverla.

<img src="{% asset_path '/assets/img/posts/180404-introducirte-01.png' %}" />

No obstante no siempre vamos a encontrar este tipo de issues. Como en estos casos puede ser un poco abrumador encontrar un punto de la aplicación al que empezar a hincarle el diente, espero que los siguientes trucos te sirvan para encontrar posibles puntos de la aplicación que puedes mejorar.


## Arreglar typos (pequeñas faltas de ortografía)

Es una de las más inmediatas, y por ese mismo motivo a mi a veces me daba vergüenza enviar una pull request para arreglarlos. No obstante arreglar un typo requiere bastantes más pasos de lo que puede parecer en un principio:

1. Aprender los fundamentos de Git. Si no lo has utilizado nunca, te recomiendo los tres primeros capítulos de este libro.
1. Hacer un fork del repositorio y clonarlo. Si tienes dudas sobre este punto échale un vistazo a este artículo.
1. Modificar el archivo en cuestión y hacer un commit
1. Abrir una pull request
1. Responder al feedback (si lo hay) y hacer los cambios oportunos para que te la mergeen.

<img src="{% asset_path '/assets/img/posts/180404-introducirte-02.png' %}" />

No obstante, este tipo de PRs son una buena forma de establecer un primer contacto con los maintainers del repositorio, ver si están pendientes de las contribuciones, si las mergean… Puedes verlo como una especie de ping.

## Mejorar la documentación del setup

Son pocos los proyectos y librerías que tienen una documentación lo suficientemente completa. Además, está el factor de que “completa” en este caso es algo muy subjetivo. Como estudiante de la carrera a menudo me veía en situaciones en las que echaba en falta indicaciones adicionales en la documentación, no porque la documentación estuviese mal, sino porque hay muchos detalles que pueden ser obviados para gente con más experiencia. Alguien que haya trabajado con herramientas muy similares sería capaz de poner un proyecto en funcionamiento sin documentación, alguien con experiencia no necesariamente en las mismas herramientas podrían intuir muchos de los pasos o depurar los posibles problemas.

Esto puede ser un obstáculo importante a la hora de contribuir a un proyecto, pero es al mismo tiempo una oportunidad.

Por ejemplo, cuando empecé a hacer mis primeras contribuciones a consul, recuerdo que tuve muchos problemas a la hora de instalar PostgreSQL. Hasta ese momento había instalado la mayoría de los paquetes haciendo doble click y no había tenido que pensar demasiado acerca de los directorios de instalación, los distintos binarios instalados etc.

La primera vez que lo intenté, estuve varias horas intentándolo sin éxito. Además cuando empiezas a guarrear instalando y desinstalando paquetes que no conoces es fácil acabar dejando restos de anteriores instalaciones que acaban en conflicto. Al final decidí dejarlo estar y retomarlo al día siguiente con mas calma.

Lo que hice fue eliminar todo lo que había instalado el día anterior, y a partir de allí ir apuntando en un documento todos los pasos que seguía, prestando atención también a como podía deshacerlos en el caso de que en algún paso posterior metiese la pata (que de hecho es una estrategia muy útil para cuando te toque escribir la documentación de un proyecto). Tras varios intentos lo conseguí, y esas notas se perdieron en una oscura esquina de mi disco duro…

Una de las cosas que estoy interiorizando desde que empecé a trabajar es que las mismas dudas y problemas que has tenido tu, las ha tenido ya antes otra persona en el pasado. Y cuando no es el caso, alguien las tendrá en el futuro.

Digo esto porque varios meses mas tarde, alguien abrió una nueva issue en consul en relación a la documentación del proyecto. En ese momento hubo un pequeño debate en la issue en el que “me di cuenta” de que tenía sentido utilizar aquellas notas que había tomado en su día para mejorar la documentación, y me animé a hacer la que fue [mi primera PR mergeada en consul](https://github.com/consul/consul/pull/1217) y mi primera aportación un proyecto no personal.

Así que la próxima vez que estés teniendo alguna dificultad a la hora de montar algún proyecto en local, aprovecha para tomar notas y con un poco de esfuerzo adicional puedes mandar una PR con tus aclaraciones. Yo seguí este truco con Consul y [Gobierto](https://github.com/PopulateTools/gobierto) y ambas fueron bienvenidas 😃

## Mejorar la cobertura de código

> Este truco es un poco más avanzado, pues requiere cierto dominio de técnicas de testing y de integración continua. Si buscas un primer punto de partida para aprender sobre testing de aplicaciones échale un vistazo [esta charla](https://vimeo.com/157427268) de Enrique Garcia Cota y al libro [The Way of The Web Tester](https://pragprog.com/book/jrtest/the-way-of-the-web-tester), que es de lectura fácil y no demasiado técnico.

Muchos proyectos open source tienen configurada algún tipo de herramienta que reporta el porcentaje de cobertura del código, es decir, el porcentaje de líneas de la aplicación que son ejecutadas al menos una vez al correr la suite de tests.

Esta me gusta especialmente por los siguientes motivos:

- Es posible que te resulte más satisfactorio que escribir documentación, pero no requiere modificar el comportamiento de la aplicación, así que (en principio) es difícil romper algo.
- Puedes trabajar en ámbitos acotados del código (un método cortito, una clase que veas que es conceptualmente fácil de entender), así que no te sentirás tan desbordado como si tuvieses que pensar en los efectos colaterales que tiene lo que estás haciendo en otras partes de la aplicación.

Por ejemplo en Gobierto usamos Codecov (podéis verlo [aquí](https://codecov.io/gh/PopulateTools/gobierto)). Examinando estos informes es posible encontrar métodos que no estén testeados.

Por ejemplo en el caso del código de Gobierto he elegido [este método](https://codecov.io/gh/PopulateTools/gobierto/src/master/app/models/gobierto_participation/process_stage.rb):

<img src="{% asset_path '/assets/img/posts/180404-introducirte-03.png' %}" />

<small>Las líneas en rojo no son ejecutadas por ningún test</small>

A veces, la primera vez que se escribe un método es muy sencillo y se deja sin testear (mea culpa en este caso 😅), pero a medida que este se va modificando y complicando es fácil que el comportamiento esperado deje de ser trivial. En este caso era un método que incialmente solo comprobaba la fecha de publicación para comprobar si un determinado objeto era “pasado”.

Además, hay código comentado, y eso es un indicativo de que el comportamiento de lo que debía hacer el método no estaba del todo claro. Una manera muy buena de resolver estas ambigüedades sería escribir los tests correspondientes. Y que en los métodos tan cortitos suele ser muy sencillo (pero no por ello menos útiles).


## Y para los que nos gusta hacer trampas… Rubocop!

Ir mirando todos los ficheros de un repositorio uno por uno con la esperanza de encontrar algún fleco que pulir es una tarea un poco ardua, así que un truco es utilizar herramientas como Rubocop, que te permiten detectar despistes como un [método duplicados u obsoletos](https://github.com/PopulateTools/gobierto/pull/368) hasta secciones de código excesivamente complejas, que pueden ser buenas oportunidades para refactorizar o escribir de una forma más clara.

Una opción especialmente interesante de Rubocop para encontrar oportunidades de refactorización es esta:

```rubocop --only Metrics```

Que entre otras cosas es capaz de detectar los métodos excesivamente largos o complejos. Entre las distintas líneas de la salida podemos ver:

<img src="{% asset_path '/assets/img/posts/180404-introducirte-02.png' %}" />

Si buscamos el código del método en cuestión, es fácil ver que es un buen candidato para ser refactorizado:

<script src="https://gist.github.com/amiedes/74fff20338d6d230507b9e45d8a9c698.js"></script>

## Conclusiones

Aunque cuando estás sumergido en el frenesí de la carrera es difícil encontrar un hueco para hacer este tipo de cosas, merece la pena intentar sacar un ratillo por los siguientes motivos:

- Empezarás a tomar contacto con el desarrollo en el mundo real. Desgraciadamente existe una brecha entre los conocimientos que se enseñan en la universidad y los que vas a utilizar a posteriori: no ya sólo en las herramientas que se utilizan (que no es tan importante) sino en la forma de trabajar, las consecuencias que tienen las decisiones que tomas, que detalles se pueden pasar por alto y cuáles no. Te darás cuenta de que no necesariamente lo que ha requerido más esfuerzo durante la universidad va a ser necesariamente lo más útil, y que cosas que ahora te gustaría saber en clase se dieron “deprisa y corriendo”. Esta verdad es dura, pero darte cuenta pronto te permitirá priorizar a qué asignaturas hay que dedicar el tiempo en la universidad, y en cuales no merece la pena desgastarse.
- Mejorar tu fluidez escribiendo (para esto también te vale un blog). Las ideas en la cabeza siempre están muy claras hasta que llega el momento de tener que escribirlas.
- Aprenderás a interactuar con otros desarrolladores, a recibir y dar feedback a otras personas, y a justificar las decisiones que has tomado ante un tercero.
