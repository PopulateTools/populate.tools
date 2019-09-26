<template>
    <article class="browser">
        <div class="browser-chapter-container" v-for="(item, index) in items" :id="'browser-title-' + index">
            <a @click="resetData('#seccion_' + index, 300, '#constitution-text')" :class="item.class">
                <div class="browser-chapter-columns browser-chapter-columns-left">
                    <span class="browser-chapter-title">{{item.title}}</span>
                </div>
                <div class="browser-chapter-columns">
                    <span class="browser-chapter-subtitle" :class="item.class">{{item.subtitle}}</span>
                </div>
            </a>
            <div :id="'indice_' + index" class="browser-chapter-sections">
                <div class="browser-chapter-sections-element" v-for="(chapters, index) in item.articles">
                    <transition name="fade" mode="out-in" appear>
                        <a v-scroll-to="{el: '#seccion_' + chapters.index, container: '#constitution-text' }" :class="chapters.class">
                            <div class="browser-chapter-columns browser-chapter-columns-left">
                                <span class="browser-chapter-title">{{chapters.title}}</span>
                            </div>
                            <div class="browser-chapter-columns">
                                <span class="browser-chapter-subtitle" :class="chapters.class">{{chapters.subtitle}}</span>
                            </div>
                        </a>
                    </transition>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import titles from './../data/constitution/data-index'
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
                selector: '#seccion_66',
                enter: function() {
                    const element = document.getElementById('browser-title-66')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-12')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-66')
                    element.classList.remove('active-index');

                }
            });
            enterView({
                selector: '#seccion_77',
                enter: function() {
                    const element = document.getElementById('browser-title-77')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-66')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-77')
                    element.classList.remove('active-index');

                }
            });
            enterView({
                selector: '#seccion_112',
                enter: function() {
                    const element = document.getElementById('browser-title-112')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-77')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-112')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_124',
                enter: function() {
                    const element = document.getElementById('browser-title-124')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-112')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-124')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_134',
                enter: function() {
                    const element = document.getElementById('browser-title-134')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-124')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-134')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_146',
                enter: function() {
                    const element = document.getElementById('browser-title-146')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-134')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-146')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_156',
                enter: function() {
                    const element = document.getElementById('browser-title-156')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-146')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-156')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_182',
                enter: function() {
                    const element = document.getElementById('browser-title-182')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-156')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-182')
                    element.classList.remove('active-index');
                }
            });
            enterView({
                selector: '#seccion_190',
                enter: function() {
                    const element = document.getElementById('browser-title-190')
                    element.classList.add('active-index');

                    const PreviousElement = document.getElementById('browser-title-182')
                    PreviousElement.classList.remove('active-index');
                },
                exit: function() {
                    const element = document.getElementById('browser-title-190')
                    element.classList.remove('active-index');
                }
            });
        },
        resetData: function(element, duration, container) {
            if (this.$router.currentRoute.name === 'home') {
                this.$scrollTo(element, duration, { container: container })
            } else {
                this.$router.push(
                                  { name: 'home' },
                                  () => setTimeout(() => this.$scrollTo(element, duration, { container: container }), 1))

            }
        }
    },
    mounted() {
        const browserCenter = document.getElementById('constitution-text')
        browserCenter.addEventListener('scroll', this.updateScroll);
    }
}
</script>
