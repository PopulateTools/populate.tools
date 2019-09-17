<template>
    <div class="browser">
        <section class="browser-container">
            <list-terms></list-terms>
            <article-text></article-text>
        </section>
    </div>
</template>

<script>
import ArticleText from './../components/ArticleText'
import ListTerms from './../components/ListTerms'

export default {
    name: 'browser',
    components: {
        ArticleText,
        ListTerms
    }
}
</script>
