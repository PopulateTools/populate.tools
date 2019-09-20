<template>
    <article class="browser">
        <h2 class="browser-title">La Constitución Española de 1978</h2>
        <div class="browser-chapter-container" v-for="(item, index) in items">
            <div class="browser-chapter-columns browser-chapter-columns-left">
                <a v-scroll-to="{el: '#seccion_' + index, container: '#constitution-text' }" class="browser-chapter-title" :class="item.class">{{item.title}}</a >
            </div>
            <div class="browser-chapter-columns">
                <span class="browser-chapter-subtitle" :class="item.class" >{{item.subtitle}}</span>
            </div>
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

