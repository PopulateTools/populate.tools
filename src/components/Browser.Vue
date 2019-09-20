<template>
    <article class="browser">
        <div class="browser-constitution" :id="'seccion_' + item.index">
            <h2 class="browser-constitution-title browser-text-terms"> {{item.title}}</h2>
            <h4 class="browser-constitution-subtitle browser-text-terms"> {{item.subtitle}}</h4>
            <template v-for="article in item.articles">
                <div class="browser-constitution-container-article" :id="article.number">
                    <template v-for="text in article.text">
                        <p class="browser-constitution-paragraph browser-text-terms"> {{text}} </p>
                    </template>
                </div>
            </template>
        </div>
        <div>
            <span v-for="(group, index) in item.word">{{ group }}</span>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
