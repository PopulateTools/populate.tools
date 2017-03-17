---
layout: post
title: "Las claves de un sistema de agendas para entidades públicas"
subtitle: Diseñando el sistema de agendas ideal
date: 2017-01-26 8:00:00 +0100
categories: transparencia
author: alvaro
# main_photo: 
---

Cabría esperar que las reuniones de cargos públicos fuesen accesibles: que cualquiera pueda saber qué empresas han ido a ver a tal concejal o consejero; con quién se ha reunido tal alcalde o presidente... Cabría pensar que tener visibilidad sobre a qué dedican su tiempo nuestros representantes es algo básico, y que una Ley de Transparencia joven lo tendría en cuenta. Pero la reciente Ley de Transparencia española no lo tuvo: no dice nada sobre la publicación de agendas.

Muchas entidades opinan que si es algo que se debería publicar y lo han incluído como parte de sus normativas y ordenanzas específicas sobre transparencia, o directamene se han lanzado a hacerlo. Algunos de estos esfuerzos se quedan en lo puramente institucional, que muchas veces no tiene especial valor, o se quedan un poco cojos en cuanto a la usabilidad de la información que publican. 

## Algunos ejemplos de agendas

{% img 'posts/170215-agendas-madrid.png' class:'inline caption' title:"agendas.madrid.es - El Ayuntamiento de Madrid publica agendas de muchos cargos, pero es información pasada y sin demasiado detalle" %}


{% img 'posts/170215-agendas-ssreyes.png' class:'inline caption' title:"Hay organizaciones que directamente incrustan un calendario de Google Calendar u otros sistemas similares " %}


{% img 'posts/170215-agendas-moncloa.png' class:'inline caption' title:"Otras organizaciones se limitan a listar eventos demasiado institucionales, que no aportan un valor específico" %}


En los distintos sistemas que ya están en marcha vemos oportunidades de mejora de cara a hacer una información más usable y a conseguir que la información se consuma más (ya que se hace, que se haga lo mejor posible). Esto nos lleva a pensar: **¿cómo sería el sistema de agendas ideal?** Además de realizar el ejercicio teórico estamos implementando el resultado de nuestra reflexión en el módulo de [Altos Cargos y Agendas de Gobierto que verá pronto la luz](https://gobierto.es/blog/20161215-diputacion-de-valencia-gobierto.html). 

Estos son algunas de las preguntas, notas y reflexiones iniciales que nos planteamos:

* **Quién es nuestro público**: en principio cualquier ciudadano, pero como con muchos de los temas alrededor de la transparencia pública la realidad es que la gente no se despierta por las mañanas preguntándose por la agenda de su alcaldesa, ni es realista pensar que podemos estar pendientes de las agendas de muchos de nuestros políticos (nos guste o no, tenemos a multitud de políticos en las distintas administraciones en los que potencialmente estar interesados). 
* Un grupo claro con interés por esta información son los **periodistas**. Los gabinetes de comunicación siempre han preparado avances de agendas para este colectivo. A raiz de conversaciones con distintas entidades vemos como hay una oportunidad para automatizar y hacer más eficiente el trabajo de los gabinetes.
* Y un reto: **¿Quién podría llegar a consumir esta información si la hacemos usable? ¿Cómo podríamos hacer atractiva esta información?**.  

Respecto a la información: ¿Qué tiene sentido compartir? 

* **Lo próximo**: Quién (se va a reunir con quién), cuándo y para qué (y un histórico de lo pasado). Oportunidades de engagement en torno a los eventos futuros.
* **Lo importante**: ¿De qué se ha hablado? ¿A qué conclusiones se ha llegado? La información de un evento que ha tenido lugar es interesante, pero más interesante es lo que se ha hablado y las conclusiones a las que se haya podido llegar.  Esto es algo que muy pocos sistemas o flujos de trabajo contemplan, fundamentalmente porque informar sobre estos temas supone un trabajo considerable. 

Sobre la experiencias de los distintos usuarios potenciales:

* **Del consumidor de la información**: Ahora mismo muchos sistemas de agendas muestran los próximos eventos y a continuación los pasados, con una información muy básica sobre el evento. Y como posibilidad para seguir la información, un feed en ICS o CSV de los eventos.  El CSV está bien para poder descargar y analizar todos los eventos pasados; pero dudo si el ICS es un mecanismo suficientemente extendido.
* **Del creador de la información**: probablemente un cargo ya tenga un sistema de agenda que gestione él/ella o un/a asistente. Sería ideal no obligar a mantener un sistema extra, sino que las agendas privada (no todos los eventos de una agenda deberán ser públicos) y publica estuviesen sincronizadas de alguna forma. 

<div class="separator"></div>

En un próximo post contaremos como hemos aplicado estas premisas para diseñar el sistema de agendas de Gobierto. 

Os dejamos una interesante y reciente análisis a cargo de Miguel Ángel Gonzalo: [La publicidad de la agenda de los parlamentarios](http://miguelgonzalo.net/la-publicidad-de-la-agenda-parlamentaria/). 