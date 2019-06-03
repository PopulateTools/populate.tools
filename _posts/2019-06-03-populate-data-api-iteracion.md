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

## Utilizar paginación

Un mecanismo muy habitual para obtener múltiples registros de un conjunto de datos es utilizar la
paginación habitual de las bases de datos SQL, utilizando un parámetro que te limita las peticiones
(llamado `limit`) y un parámetro que te da el desplazamiento (llamado `offset`).

De acuerdo a lo descrito en [la
documentación](https://data.populate.tools/docs/index.html#/datasets/get_datasets__dataset_id___format_),
todas las peticiones llevan implícito un límite de 100.000 registros, pero podemos reducir ese
valor. El parámetro offset debe de ser un número entero positivo mayor de 0.

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

Además de las propiedades temporales también podemos utilizar las variables geospaciales, como podría ser la provincia o la comunidad autónoma. La API de Populate Data implementa filtros en todas las columnas del dataset de forma dinámica, y pueden ser construidos como `filter_by_<nombre del campo>`.

## Notificación y detección de errores

Puede ocurrir que cuando usemos la API nos olvidemos de estas limitaciones del número de filas, en ese caso la API nos devolverá un error con código 0 o código 3, indicando en el cuerpo del mensaje el error.

También debemos de estar atentos a la longitud de los datos de la respuesta, si el valor coincide
que son 100.000 registros, el límite por defecto de la API, es muy posible que la petición haya
alcanzado el límite de registros y en ese caso deberemos implementar alguna de las ideas expuestas
de paginación.


