<template>
    <article class="browser">
        <h2 class="browser-title">La Constitución Española de 1978</h2>
        <div v-for="(item, index) in items" class="browser-chapter">
            <a v-scroll-to="{el: '#seccion_' + index, container: '#constitution-text' }" class="browser-chapter-title" :class="item.class">{{item.title}}</a >
            <span class="browser-chapter-subtitle" :class="item.class" >{{item.subtitle}}</span>
        </div>
    </article>
</template>
<script>
import titles from './../json/data-index'

export default {
    name: 'index',
    data() {
        return {
            items: titles
        }
    }
}
</script>

