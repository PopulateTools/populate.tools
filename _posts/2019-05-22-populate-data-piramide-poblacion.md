---
layout: post
title: "Cómo construir una pirámide de población con Populate Data y D3"
date: 2019-05-22 8:00:00 +0100
author: blat
---

En este tutorial vamos a describir cómo utilizar [Populate Data](https://data.populate.tools) para obtener los datos necesarios para constuir una pirámide de población con HTML y D3.js como esta:

<img class="rot-90" src="{% asset 'posts/190522-populate-data-population-pyramid.png' @path %}">

Populate Data es un servicio ofrecido por [Populate](https://populate.tools) que agrupa multitud de fuentes de datos públicos y privados y que permite consumirlos de forma unificada a través de una API.

## Buscar datos en Populate Data

Para esta visualización en concreto necesitamos los datos del [INE del padrón contínuo](https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&secc=1254736195461&idp=1254734710990) de población municipal por edad y sexo. Utilizaremos el explorador de datos disponible en https://populate.tools/data/ para encontrar un dataset con esta información. De entre todos los datasets de población hay uno que se llama `ds-poblacion-municipal-edad-sexo` y que contiene información a nivel municipal de número de habitantes de cada municipio por edad y sexo. Es un dataset que se actualiza anualmente y tiene las siguientes
columnas:

- `value`: el valor de la población
- `date`: el año del dato
- `sex`: el sexo
- `age`: el año
- `location_id`: el identificador del municipio en base al código INE

La información sobre los códigos INE de los municipios se puede encontrar en el propio INE, o se puede utilizar alguna referencia externa, como la lista con la que trabajamos en Populate: https://github.com/PopulateTools/ine-places/blob/master/lib/ine/places/data/places.csv

Los datos de una serie de Populate Data vienen en formato tabla e incluyen información de varios años y, en este caso, de varios municipios. Para nuestro caso, tenemos que filtrar los datos para un año en concreto y para un municipio en concreto.

Siguiendo la <a href="https://data.populate.tools/docs/index.html#/datasets/get_datasets__dataset_id___format_">documentación de la API</a> `/populate-data-tutorials/datasets/ds-poblacion-municipal-edad-sexo` es la URL en la que debemos de hacer las peticiones para obtener los datos, a la que le vamos añadir estos parámetros:

- `filter_by_date=2018`, para obtener sólo datos de 2018
- `filter_by_location_id=28079`, para obtener sólo los datos de un municipio en concreto (donde 28079 es el código INE de Madrid).
- `except_columns=_id,province_id,location_id,autonomous_region_id`, para mejorar el rendimiento de la página, también vamos a indicar en la petición de la API que se excluyan ciertas columnas que no vamos a utilizar

Además, podemos indicar en qué formato queremos los datos concatenando `.csv` o `.json` después del nombre del dataset.

La URL final, por tanto quedará así: `https://data.populate.tools/populate-data-tutorials/datasets/ds-poblacion-municipal-edad-sexo.csv?filter_by_date=2017&filter_by_location_id=28079&except_columns=_id,province_id,location_id,autonomous_region_id`

La respuesta de esta petición es un CSV con esta forma:

```
value,age,date,sex
16369,23,2018,M
20598,28,2018,M
19035,26,2018,M
20076,27,2018,M
14192,63,2018,V
13782,19,2018,M
13438,15,2018,M
12963,18,2018,M
13559,18,2018,V
21989,53,2018,V
21395,54,2018,V
...
```

## Obtener datos para la visualización

No queremos entrar en detalle de cómo construir la visualización en D3.js, pero vamos a describir cómo obtendríamos los datos desde D3.js (v5) y las transformaciones que necesitaríamos en este caso. Cuando trabajamos en una visualización solemos seguir esta estructura:

1. Preparar el esqueleto de la visualización: el svg, las escalas y los dominios, escalas de color, ejes, etc
2. Obtener los datos a través de la API, transformarlos según nos convenga y dejar una variable `data` preparada para ser usada y _bindeada_
3. Renderizar
4. Añadir funciones para actualizar datos, interactividad y re-renderizado

Para esta visualización realizamos una única llamada a Populate Data, donde obtenemos la población para cada año y edad y convertiremos el valor en porcentaje, habiendo calculado previamente el total de hombres y mujeres para cada edad.

{% highlight javascript %}

// Prepare variables
let currentYear = 2018
let populateDataToken = "FILLME";
let locationId = 28079;
let datasetName = "ds-poblacion-municipal-edad-sexo";
let populateDataURL = `https://data.populate.tools/populate-data-tutorials/datasets/${datasetName}.csv?filter_by_date=${currentYear}&filter_by_location_id=${locationId}&except_columns=_id,province_id,location_id,autonomous_region_id`;
let population = d3.csv(populateDataURL).header("authorization", "Bearer " + populateDataToken);

d3.queue()
  .defer(population.get)
  .await(function(error, jsonPopulation) {

  if (error) throw error

  // Convert to numbers
  jsonPopulation.forEach(d => {
    d.age = parseInt(d.age);
    d.value = Number(d.value);
  })

  // Sort data by age column
  jsonPopulation.sort((a,b) => a.age - b.age);

  // Calculate the total amount of men and women
  const totalMen = this._sumBy(jsonPopulation.filter(p => p.sex === "V"), "value")
  const totalWomen = this._sumBy(jsonPopulation.filter(p => p.sex === "M"), "value")

  // Prepare data variable with the value converted to a percentage
  let data = jsonPopulation.map((item) => {
    item._value = (item.sex === "V") ? (item.value / totalMen) : (item.sex === "M") ? (item.value / totalWomen) : 0;
    return item
  });

{% endhighlight %}


