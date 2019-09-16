<template>
    <article class="browser-columns browser-column-center">
        <div v-for="item in items" class="browser-constitution">
            <h4 class="browser-constitution-title"> {{item.title}}</h4>
            <p class="browser-constitution-paragraph"> {{item.text}} </p>
        </div>
    </article>
</template>
<script>
import articles from './../json/articles.json'
console.log(articles)

export default {
    data() {
        return {
            items: articles
        }
    }
}
</script>
