<template>
       <article class="browser">
           <div class="browser-chapter-container" v-for="(item, index) in items" :id="'browser-title-' + index">
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
                <transition name="fade" mode="out-in" appear>
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
                </transition>
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
            enterView({
                selector: '#seccion_12',
                enter: function() {
                    const element = document.getElementById('browser-title-12')
                    element.classList.add('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-12')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_77',
                enter: function() {
                    const element = document.getElementById('browser-title-77')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-12')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-77')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_156',
                enter: function() {
                    const element = document.getElementById('browser-title-156')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-77')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-156')
                    element.classList.remove('active-index');
                }
            });

        }
    },
    mounted() {
        const browserCenter = document.getElementById('constitution-text')
        browserCenter.addEventListener('scroll', this.updateScroll);
    }
}
</script>
