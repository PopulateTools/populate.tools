---
layout: post
title: "Nuevos datos en Populate Data: censo municipal desde 1877"
date: 2019-07-29 8:00:00 +0100
author: pedro
lang: es
product: populate_data
category: technology
---

Hace unos días publicamos una [exploración de datos sobre la evolución de la población española desde 1870](/blog/exploracion-poblacion). Nos hemos basado en un nuevo dataset que hemos incluído en Populate Data: el censo municipal más antiguo que existe. En este post te contamos más sobre este dataset y como explotarlo usando R.

Hemos querido hacer de este estudio de investigación y análisis, y posterior trabajo de diseño y visualización, un ejemplo para dar a conocer Populate Data y mostrar sus potencialidades.

Se ha actualizado [Populate Data](/data/#datos) con el conjunto completo utilizado para la exploración. Lo puedes encontrar en _Demografía → Censo_.

{% asset 'posts/190729-datasets.png' %}

Antes de seguir vamos a mirar cómo se construye el censo y así facilitar el desarrollo de nuevos estudios o aplicaciones con él. En primer lugar debemos saber que estos datos los proporciona el INE dentro de su sección [Cifras de Población y Censos demográficos](https://www.ine.es/dyngs/INEbase/es/categoria.htm?c=Estadistica_P&cid=1254735572981), donde además de los censos más recientes, se incluye una sección llamada _Alteraciones de los municipios en los Censos de Población desde 1842_, que contiene la información del censo que nos ocupa.

Se trata de una recopilación de los diferentes censos registrados en España desde 1842, y que en transcurso de su historia han sufrido algunas modificaciones en cuanto a metodología:

- _Población de hecho_: Número de personas que pernoctaron en el municipio en la fecha de referencia del Censo
- _Población de derecho_: Número de personas que oficialmente tenían su residencia en el municipio en la fecha de referencia
- _Hogares_: Conjunto de personas censadas en un mismo hogar. Esta definición ha ido modificándose en los diferentes censos, llamándose vecinos, células de inscripción, número de familias. Es una variable que habría que estudiar cuidadosamente tienendo en cuenta [la metodología del INE](https://www.ine.es/alteraciones/alteraciones_municipios_metodologia.pdf)

Con estos datos del censo completamos el catálogo de datos de fenómenos demográficos (natalidad, mortalidad, población) que ofrece Populate Data.

### Utilizar datos del censo desde Populate Data con R

Una vez hemos comprendido las diferentes dimensiones del conjunto de datos es necesario dedicar tiempo a estudiar su evolución en el tiempo. De esta investigación es de donde sacaremos los casos más singulares para, una vez identificados y seleccionados, poder pararnos en cada uno de ellos con detenimiento.

Como ejemplo ilustrativo mostramos cómo realizar una extracción de los datos de Populate Data y generar una visualización con R de los municipios que más han crecido desde 1877 hasta 2011.

Primero cargaremos las dependencias y prepararemos el entorno de trabajo:

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
```

Posteriormente nos conectaremos a Populate Data y obtendremos los datos para esos dos años. Nosotros trabajamos con variables de entorno para guardar los credenciales, lo que resulta muy cómodo para compartir ficheros y publicarlos:

```r
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
```

Finalmente, utilizamos el paquete gráfico `ggplot2` para crear una visualización. Esta pieza de código tendría dos partes:

- en la primera parte (antes de llamar a `ggplot`), agrupamos los datos por municipio, extraemos la población del primer y último grupo, ordenamos y sacamos el top 50
- en la segunda creamos el gráfico, de tipo `geom_dumbell` con los datos ya preparados

Utilizamos intensivamente el operador pipe `%>%` que proporciona `dplyr`:

```r
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

El gráfico resultante tiene este aspecto:

{% asset 'posts/190729-chart.png' %}

Vemos que casi todas las capitales de provincia han crecido excepto Cádiz (ya hemos explicado en el análisis que se debe a razones geográficas del emplazamiento de la ciudad).

Y también vemos cómo grandes municipios de la época, como Alcoy y Orihuela, no han crecido tanto, absorbiendo su crecimiento ciudades próximas como Alicante o Elche. Y algo similar ha ocurrido con Asturias y Galicia, donde muchos de sus municipios estaban entre los más poblados el siglo pasado pero la población se ha ido desplazando a otras regiones.

Muy pronto todo el detalle sobre cómo se hizo el estudio de población.

<div class="separator"></div>

Consulta los datos disponibles en [populate.tools/data](/data) y escríbenos si te interesa probarlo.
