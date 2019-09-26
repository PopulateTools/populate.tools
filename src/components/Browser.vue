<template>
    <article class="browser">
        <div class="browser-constitution" :id="'seccion_' + item.index">
            <h2 class="browser-constitution-title" :class="item.class"> {{item.title}}</h2>
            <h4 class="browser-constitution-subtitle"> {{item.subtitle}}</h4>
            <template v-for="article in item.articles">
                <transition name="fade" mode="out-in">
                    <div class="browser-constitution-container-article" :id="article.number">
                        <template v-for="text in article.text">
                            <p class="browser-constitution-paragraph" v-html="wordWrap(text)"></p>
                        </template>
                    </div>
                </transition>
            </template>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        termSelected: {
            type: String
        },
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        wordWrap: function(text) {
            if(this.termSelected === null) {
                return text;
            }
            const wordBold = new RegExp(`\\b${this.termSelected}\\b`, 'gi')
            return text.replace(wordBold, `<span class='term-selected'>$&</span>`)
        }
    }
}
</script>
