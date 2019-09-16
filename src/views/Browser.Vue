<template>
  <div class="browser">
    <section class="browser-container">

        <!-- TODO: FOR IN ARTICLES -->
        <article class="browser-columns browser-column-center">
            <articletext></articletext>
        </article>
    </section>

  </div>
</template>


<script>
const json = [
    {
        "title":"Articulo 1",
        "text": "1. España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.\n2. La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.\n3. La forma política del Estado español es la Monarquía parlamentaria."
    },
    {
        "title": "Articulo 2",
        "text": "La Constitución se fundamenta en la indisoluble unidad de la Nación española, patria común e indivisible de todos los españoles, y reconoce y garantiza el derecho a la autonomía de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas."
    },
    {
        "title": "Articulo 3",
        "text": "1. El castellano es la lengua española oficial del Estado. Todos los españoles tienen el deber de conocerla y el derecho a usarla./n2. Las demás lenguas españolas serán también oficiales en las respectivas Comunidades Autónomas de acuerdo con sus Estatutos./n3. La riqueza de las distintas modalidades lingüísticas de España es un patrimonio cultural que será objeto de especial respeto y protección."
    }
]

json.forEach(x => { console.log(x.title, x.text) })

export default {
    name: 'browser'
}
</script>
