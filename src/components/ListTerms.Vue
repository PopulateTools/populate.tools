
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
            terms: ['Artículo', 'España', 'Estado', 'Derechos', 'Bienestar']
        }
    },
    methods: {
        getWords: function wrapWord(word) {
            this.$nextTick(() => {
                const element = document.getElementById('constitution-text')
                element.innerHTML = element.innerText || element.textContent
                console.log(element.innerText)
                const expr = new RegExp(word, 'i')
                const nodes = [].slice.call(element.childNodes, 0)
                for (var i = 0; i < nodes.length; i++) {
                    const node = nodes[i]
                    if (node.nodeType === 3) {
                        const matches = node.nodeValue.match(expr)
                        if (matches) {
                            const parts = node.nodeValue.split(expr)
                            for (var n = 0; n < parts.length; n++) {
                                if (n) {
                                    const span = element.insertBefore(document.createElement('span'), node)
                                    span.appendChild(document.createTextNode(matches[0]))
                                    span.setAttribute('class', 'term-selected')
                                }
                                if (parts[n]) {
                                    element.insertBefore(document.createTextNode(parts[n]), node)
                                }
                            }
                            element.removeChild(node)
                        }
                    }
                }
            })
        }
    }
}
</script>
