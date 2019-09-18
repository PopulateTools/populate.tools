<template>
    <article id="constitution-text" class="browser">
        <div v-for="(item, index) in items" class="browser-constitution" :id="'articulo_' + index">
            <h4 class="browser-constitution-title browser-text-terms"> {{item.title}}</h4>
            <template v-for="paragraph in item.text">
                <p class="browser-constitution-paragraph browser-text-terms"> {{paragraph}} </p>
            </template>
        </div>
    </article>
</template>
<script>
import articles from './../json/constitution.json'

export default {
    data() {
        return {
            items: articles
        }
    }
}
</script>
