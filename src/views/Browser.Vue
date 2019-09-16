<template>
    <div class="browser">
        <section class="browser-container">
            <article-text></article-text>
        </section>
    </div>
</template>

<script>
import products from './../json/articles.json'
import ArticleText from './../components/ArticleText'

export default {
    name: 'browser',
    components: {
        ArticleText
    },
    data() {
        return {
            items: products
        }
    }
}
</script>
