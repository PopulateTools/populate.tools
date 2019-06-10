---
layout: post
title: "1877-2011: Cómo hemos cambiado"
date: 2019-06-06 8:00:00 +0100
author: blat
lang: es
product: populate_data
category: technology
---

¿Cómo ha evolucionado la población en los municipios españoles en los últimos 150 años? Por suerte, como siempre el INE al rescate. Existe un dataset maravilloso que cuenta habitantes por municipio desde 1874. Lo hemos metido en Populate Data y hemos cacharreado un poco para tratar de entender como ha evolucionado la población en los pueblos y ciudades españolas desde que existen datos.

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

Observando cuáles eran las provincias más pobladas en 1877 y el valor actual, vemos que Barcelona, Valencia y Madrid se han mantenido entre las más pobladas, pero que otras como Asturias o Coruña no han seguido ese ritmo.

{::nomarkdown}
{% include analysis/population/barras_horiz_evolucion_poblacion_provincias.svg %}
{:/}

Algunos pueblos y ciudades han crecido mucho más que otros.

¿Cuáles eran las ciudades más grandes en 1877?

Las ciudades más grandes en 1877 eran Madrid, Barcelona, Valencia y Sevilla. Cabe destacar que entre las 30 más pobladas encontramos Lorca, Reus, Alcoi, Linares y S. Fernando, municipios que no han crecido tanto como los demás, pero que en esos años eran núcleos importantes de población.

****blat ignora cartograma****

?? [CARTOGRAMA DEL TOP 15 CIUDADES MAS GRANDES ENTONCES]
    y/o [DOT PLOT TOP 15 CIUDADES MAS GRANDES ENTONCES]

Si comparamos con la foto de hoy, hay mucho cambio:

?? [CARTOGRAMA DEL TOP 15 CIUDADES MAS GRANDES HOY]
    y/o [DOT PLOT TOP 15 CIUDADES MAS GRANDES HOY]

****blat ignora cartograma****

Las ciudades que hoy son de tamaño medio, ¿cómo eran entonces?

{::nomarkdown}
{% include analysis/population/barras_horiz_evolucion_poblacion_ciudades_log.svg %}
{:/}

(en este gráfico se podría pintar la media de habitantes en las ciudades en 1877 y en 2011)

En esa época las ciudades tenían de media 40.000 habitantes, mientras que en 2011 la media de las ciudades es de casi 200.000 habitantes. (Asumimos que una ciudad es aquel municipio que en 2011 tiene > 100k hab.)

Como vemos, no todos los que ahora son los más grandes lo eran en su día. Muchas circunstancias han condicionado el crecimiento.

¿Qué sitios que en su día eran los más grandes son los que menos han crecido?

{::nomarkdown}
{% include analysis/population/barras_horiz_top_municipios_menos_crecimiento.svg %}
{:/}

Calculando el porcentaje de crecimiento, vemos que ciudades que ahora consideramos pueblos, como Lorca o Alcoi no han credido en relación a los habitantes que tenían. Entre las grandes ciudades, destaca especialmente Cádiz, donde la población se ha mantenido más o menos parecida.


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
