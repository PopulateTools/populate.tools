<template>
       <article class="browser">
           <div class="browser-chapter-container" v-for="(item, index) in items">
                <a
                    v-scroll-to="{el: '#seccion_' + index, container: '#constitution-text' }"
                    :class="item.class"
                    >
                   <div class="browser-chapter-columns browser-chapter-columns-left">
                       <span class="browser-chapter-title">{{item.title}}</span >
                   </div>
                   <div class="browser-chapter-columns">
                       <span class="browser-chapter-subtitle" :class="item.class" >{{item.subtitle}}</span>
                   </div>
                </a>
           </div>
       </article>
</template>
<script>
import titles from './../data/constitution/data-index'

export default {
    name: 'index',
    data() {
        return {
            items: titles
        }
    }
}
</script>
