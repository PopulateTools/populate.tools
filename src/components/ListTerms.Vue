<!-- eslint no-undef: "warning" -->

<template>
    <article class="browser-list-terms">
        <h3 class="browser-list-terms-title">Términos</h3>
        <p v-for="commons in terms" class="browser-list-term-text">{{commons}}</p>
    </article>
</template>
<script>

export default {
    data() {
        return {
            terms: ['Educación', 'Vivienda', 'Derechos', 'Bienestar']
        }
    }
}
</script>
