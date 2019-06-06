---
layout: post
title: "Solicitar grandes cantidades de datos de la API"
date: 2019-06-03 8:00:00 +0100
author: blat
lang: es
product: populate_data
category: technology
---

En esta guía vamos a describir las diferentes estrategias que nos permiten trabajar con grandes
cantidades de datos en [Populate Data](/data). La API de Populate Data establece un límite de 100.000
registros como máximo por petición. Sin embargo hay varios mecanismos para obtener el total del
histórico de un dataset que podemos utilizar.

## Determinar si necesitamos paginación

Cuando utilicemos la API de Populate Data debemos determinar si necesitamos utilizar la paginación
para obtener los datos de una serie.

Estos dos escenarios nos indican si necesitamos pedir datos parcialmente:

- Si realizamos una petición a la API que devuelve exactamente 100.000 registros es muy posible que
  la API haya limitado la petición y que haya más registros en la serie.

- Si el tiempo de respuesta de la API es más lento del habitual debemos de comprobar el número de
  registros que nos devuelve. Si el número es muy elevado el tamaño de la petición puede ser muy
  elevado, y si estamos utilizando la API directamente en una aplicación web cliente (con
  Javascript) es posible que queramos hacer más peticiones pequeñas y rápidas que una muy grande.


## Utilizar paginación

Un mecanismo muy habitual para obtener múltiples registros de un conjunto de datos es utilizar la
paginación habitual de las bases de datos SQL, utilizando un parámetro que te limita las peticiones
(llamado `limit`) y un parámetro que te da el desplazamiento (llamado `offset`).

De acuerdo a lo descrito en [la
documentación](https://data.populate.tools/docs/index.html#/datasets/get_datasets__dataset_id___format_),
todas las peticiones llevan implícito un límite de 100.000 registros, pero podemos reducir ese
valor. El parámetro offset debe de ser un número entero positivo mayor de 0.

De momento la API no ofrece un total de registros, por lo que hay que implementar una estrategia
para que las peticiones paren. Por ejemplo, se puede ir incrementando el valor del offset hasta que
la API devuelva 0 registros, y en ese caso parar.

El siguiente código en R ilustra esta técnica:

```r
# Credentials
pd_account <- "populate-data-tutorials"
pd_authorization <- "Bearer TOKEN"


# Empty dataframe
df_poblacion <- NULL

# Pagination params
limit <- 1000
offset <- 0

# Loop to get info from all years
repeat {
  url <- paste0("https://data.populate.tools/", pd_account, "/datasets/ds-poblacion-municipal.csv?limit=", limit, "&offset=", offset)
  r <- GET(url, add_headers(authorization = pd_authorization, origin = TOKEN_ORIGIN))
  partial_df <- content(r, "parsed")
  if(nrow(partial_df) == 0) { break }

  df_poblacion <- rbind(df_poblacion, partial_df)
  offset <- offset + limit
}
```

Se instancia un bucle infinito que va obteniendo elementos de 1000 en 1000 hasta que el resultado
tenga 0 filas.


## Iterar por alguna dimensión

Otra estrategia muy sencilla es utilizar las referencias geoespaciales o temporales para ir
obteniendo valores de la API en diferentes subconjuntos que luego podamos unir.

Utilizaremos [la información de metadatos](https://data.populate.tools/docs/index.html#/datasets/get_datasets__dataset_id__metadata__format_) de un dataset para saber qué columnas nos permiten desarrollar esta estrategia. Próximamente se incluirán los diferentes valores de cada una de las propiedaddes de un dataset.

Por ejemplo, si un dataset que contiene información por años o por meses se puede filtrar por cada uno de los valores de la fecha e ir concatenando los resultados en una variable.

El siguiente código en R sirve para ilustrar esta idea. Utilizamos una secuencia de años entre 2000
y 2018 y un filtro por año. Los valores se van concatenando en un _data_frame_

```r
# Credentials
pd_account <- "populate-data-tutorials"
pd_authorization <- "Bearer TOKEN"

# Year sequence
years <- seq(2000, 2018, 1)
# Empty dataframe
df_poblacion <- NULL

# Loop to get info from all years
for(year in years) {
  url <- paste0("https://data.populate.tools/", pd_account, "/datasets/ds-poblacion-municipal.csv?filter_by_year", year)
  r <- GET(url, add_headers(authorization = pd_authorization, origin = TOKEN_ORIGIN))
  df_poblacion <- rbind(df_poblacion, content(r, "parsed"))
}
```

Además de las propiedades temporales también podemos utilizar las variables geospaciales, como podría ser la provincia o la comunidad autónoma.

La API de Populate Data implementa filtros en todas las columnas del dataset de forma dinámica, y pueden ser construidos como `filter_by_<nombre del campo>`.


## Mejoras en la paginación

Tenemos dos ideas para mejorar la paginación:

1. Incluir el total de registros en los metadatos del dataset

2. Que los metadatos incluyan la lista de todos los valores únicos de cada propiedad, o al menos de aquellas que tengan sentido (ej: la lista de fechas de una columna fecha).

Sabiendo estos valores, se podrá implementar la paginación por por offset y por dimensiones de forma mucho más sencilla.


<div class="separator"></div>

Consulta los datos disponibles en [populate.tools/data](/data)
