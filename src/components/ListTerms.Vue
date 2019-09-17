
<!-- eslint no-undef: "warning" -->
<template>
    <article class="browser-list-terms">
        <h3 class="browser-list-terms-title">Términos</h3>
        <button v-for="commons in terms" @click="getWords(commons)" class="browser-list-btn">{{commons}}</button>
    </article>
</template>
<script>
export default {
    data() {
        return {
            terms: ['Estado', 'Articulo', 'Derechos', 'Poderes']
        }
    },
    methods: {
        getWords: function wrapWord(word) {

            this.$nextTick(() => {
                const wordBold = new RegExp(word, 'g')
                const element = document.getElementById('constitution-text')
                element.classList.remo
                element.innerHTML = element.innerHTML.replace(wordBold, `<span class="term-selected-${word}">$&</span>`)
            })
        }
    }
}
</script>
