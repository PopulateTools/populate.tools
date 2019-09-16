<template>
    <div v-for="(entry, index) in json" :item="entry" :key="index" class="browser-constitution">
        <h4 class="browser-constitution-title"> {{ entry.title }}</h4>
        <p class="browser-constitution-paragraph"> {{ entry.text }} </p>
    </div>
</template>
<script>
export default {
    name: 'ArticleText',
    props: {
        title: String,
        text: String
    }
}
</script>
