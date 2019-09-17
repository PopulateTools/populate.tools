<!-- eslint no-undef: "warning" -->

<template>
    <article class="browser-columns browser-column-center">
        <div v-for="item in items" class="browser-constitution">
            <h4 class="browser-constitution-title"> {{item.title}}</h4>
            <template v-for="paragraph in item.text">
                <p class="browser-constitution-paragraph"> {{paragraph}} </p>
            </template>
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
