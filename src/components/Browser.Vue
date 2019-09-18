<template>
    <article id="constitution-text" class="browser">
        <div v-for="(item, index) in items" class="browser-constitution" :id="'seccion_' + index">
            <h2 class="browser-constitution-title browser-text-terms"> {{item.title}}</h2>
            <h4 class="browser-constitution-subtittle">{{item.subtitle}}</h4>
            <template v-for="article in item.articles">
                <div class="browser-constitution-container-article" :id="article.number">
                    <h4 class="browser-constitution-title-article">{{ article.title }}</h4>
                    <template v-for="text in article.text">
                        <p class="browser-constitution-paragraph browser-text-terms"> {{text}} </p>

                    </template>
                </div>
            </template>
        </div>
    </article>
</template>
<script>
import articles from './../json/constitution-titles.json'

export default {
    data() {
        return {
            items: articles
        }
    }
}
</script>
