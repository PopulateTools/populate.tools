---
layout: post
title: "Nuevos datos en Populate Data: censo municipal desde 1877"
date: 2019-07-29 8:00:00 +0100
author: pedro
lang: es
product: populate_data
category: technology
---

Hace unos días publicamos una [exploración de datos sobre la evolución de la población española desde 1870](/blog/exploracion-poblacion). Nos hemos basado en un nuevo dataset que hemos incluído en Populate Data: el censo municipal más antiguo que existe. En este post te mostramos como utilizar este dataset usando R. 

Hemos querido hacer de este estudio de investigación y análisis, y posterior trabajo de diseño y visualización, un ejemplo para dar a conocer Populate Data y mostrar sus potencialidades.

Se ha actualizado [Populate Data](/data/#datos) con el conjunto completo utilizado para la exploración. Lo puedes encontrar en _Demografía → Censo_.

{% asset 'posts/190729-datasets.png' %}

Antes de seguir vamos a mirar cómo se construye el censo y así facilitar el desarrollo de nuevos estudios o aplicaciones con él. En primer lugar debemos saber que el censo consta de tres variables:  población de hecho, población de derecho y hogares. El INE define estas variables de la siguiente manera:

- _Población de hecho_: Número de personas que pernoctaron en el municipio en la fecha de referencia del Censo
- _Población de derecho_: Número de personas que oficialmente tenían su residencia en el municipio en la fecha de referencia
- _Hogares_: recoge conceptos parecidos pero no idénticos en cada Censo. Más o menos coincide con el grupo formado por un vecino y los domiciliados que conviven con él.

Además se ha aprovechado para actualizar los indicadores. Con estos indicadores completamos el catálogo de datos de fenómenos demográficos (natalidad, mortalidad, población) que ofrece Populate Data.

Después de estas actualizaciones disponemos en Populate Data del censo historico dispuesto para ser explorado en busca de respuestas.

### Utilizar datos de Populate Data con R

Una vez hemos comprendido las diferentes dimensiones del conjunto de datos es necesario dedicar tiempo a estudiar su evolución en el tiempo. De esta investigación es de donde sacaremos los casos más singulares para, una vez identificados y seleccionados, poder pararnos en cada uno de ellos con detenimiento.

Como ejemplo ilustrativo mostramos cómo realizar una extracción de los datos de Populate Data y generar una visualización con R:

```r
# Load dependencies
library(tidyverse)
library(httr)
library(ggplot2)
library(bbplot)

# Set seed
set.seed(14723)

# Set working directory
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# Populate Data parameters
dataset <- "ds-censo-municipal-poblacion-derecho"
account <- Sys.getenv('POPULATE_DATA_ACCOUNT')
token <- Sys.getenv('POPULATE_DATA_TOKEN')
origin <- Sys.getenv('POPULATE_DATA_ORIGIN')

# Load 2 years of data
df <- NULL
years <- c(1877, 2011)

for(year in years){
  url <- paste0("https://data.populate.tools/", account , "/datasets/", dataset, ".csv?include=province,municipality&filter_by_year=", year)
  r <- GET(url, add_headers(authorization = paste0("Bearer ", token), origin = origin))
  partial_df <- content(r, "parsed")
  if(nrow(partial_df) == 0) { break }

  df <- rbind(df, partial_df)
}

# Plot differences between 1877 and 2011
df %>% group_by(municipality_name, date) %>% summarize(total = sum(value)) %>%
  mutate(total0 = first(total), total1 = last(total)) %>%
  select(municipality_name, total0, total1) %>%
  distinct(municipality_name, total0, total1) %>%
  ungroup() %>%
  top_n(50, total0) %>%
  ggplot(aes(y=reorder(municipality_name, total0), x=total0, xend=total1)) +
  bbc_style() +
  geom_dumbbell(colour = "#dddddd",
                size = 3,
                colour_x = "#FAAB18",
                colour_xend = "#1380A1"
  ) +
  scale_x_continuous(breaks = c(0, 1000000, 2000000, 3000000),
                     labels = c(0, "1M", "2M", "3M"),
                     position="top")  +
  theme(
    axis.text.x = element_text(size = 11),
    axis.text.y = element_text(size = 10),
    panel.grid.major.y = element_blank(),
    panel.grid.major.x = element_line(color="#eaeaea")
  )

```

Como se puede observar, una vez obtenidos los datos de Populate Data hay no hay que realizar ninguna limpieza de datos, y ya podemos trabajar en agrupaciones y cálculos. Toda esa limpieza y preprocesamiento son realizadas en la fase previa de ETL antes de la carga de datos en la API.

El código utiliza `ggplot`, una conocida librería de visualización en R para generar un gráfico como este:

{% asset 'posts/190729-chart.png' %}

Vemos que casi todas las capitales de provincia han crecido excepto Cádiz (ya hemos explicado en el análisis que se debe a razones geográficas del emplazamiento de la ciudad).

Y también vemos cómo grandes municipios de la época, como Alcoy y Orihuela, no han crecido tanto, absorbiendo su crecimiento ciudades próximas como Alicante o Elche. Y algo similar ha ocurrido con Asturias y Galicia, donde muchos de sus municipios estaban entre los más poblados el siglo pasado pero la población se ha ido desplazando a otras regiones.

Muy pronto todo el detalle sobre cómo se hizo el estudio de población.

<div class="separator"></div>

Consulta los datos disponibles en [populate.tools/data](/data) y escríbenos si te interesa probarlo.
