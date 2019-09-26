<template>
       <article class="browser">
           <div class="browser-chapter-container" v-for="(item, index) in items" :class="item.scroll">
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
                <div :id="'indice_' + index" class="browser-chapter-sections">
                    <div class="browser-chapter-sections-element" v-for="(chapters, index) in item.articles">
                        <a
                            v-scroll-to="{el: '#seccion_' + chapters.index, container: '#constitution-text' }"
                            :class="chapters.class"
                            >
                           <div class="browser-chapter-columns browser-chapter-columns-left">
                               <span class="browser-chapter-title">{{chapters.title}}</span >
                           </div>
                           <div class="browser-chapter-columns">
                               <span class="browser-chapter-subtitle" :class="chapters.class" >{{chapters.subtitle}}</span>
                           </div>
                        </a>
                    </div>
                </div>
           </div>
       </article>
</template>

<script>
import titles from './../data/constitution/data-index-articles'
import enterView from 'enter-view';

export default {
    data() {
        return {
            items: titles
        }
    },
    methods: {
        updateScroll() {
            console.log('scoll')
            enterView({
                selector: '#seccion_12',
                enter: function() {
                    const element = document.getElementById('indice_12')
                    element.classList.add('active-index');
                },
                exit: function() {
                    const element = document.getElementById('indice_12')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_77',
                enter: function() {
                    const element = document.getElementById('indice_77')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('indice_12')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('indice_77')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_156',
                enter: function() {
                    const element = document.getElementById('indice_156')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('indice_77')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('indice_156')
                    element.classList.remove('active-index');
                }
            });

        }
    },
    mounted() {
        console.log('scroll')
        const browserCenter = document.getElementById('constitution-text')
        browserCenter.addEventListener('scroll', this.updateScroll);
    }
}
</script>
