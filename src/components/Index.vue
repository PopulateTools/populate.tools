<template>
    <article class="browser">
        <div class="browser-chapter-container" v-for="(item, index) in items" :id="'browser-title-' + item.index">
            <a @click="resetData('#seccion_' + item.index, 300, '#constitution-text')" :class="item.class">
                <div class="browser-chapter-columns browser-chapter-columns-left">
                    <span class="browser-chapter-title">{{item.title}}</span>
                </div>
                <div class="browser-chapter-columns">
                    <span class="browser-chapter-subtitle" :class="item.class">{{item.subtitle}}</span>
                </div>
            </a>
            <div :id="'indice_' + item.index" class="browser-chapter-sections">
                <div class="browser-chapter-sections-element" v-for="(chapters, _) in item.articles">
                    <transition name="fade" mode="out-in" appear>
                        <a v-scroll-to="{el: '#seccion_' + item.index, container: '#constitution-text' }" :class="chapters.class">
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
import enterView from 'enter-view';

export default {
  props: {
    text: {
      type: Object,
      required: true
    }
  },
  computed: {
    items() {
      return Object.values(this.text).filter((n) => n.class === "title" )
    }
  },
  methods: {
      updateScroll() {
          this.items.forEach((title) => {
            enterView({
                selector: `#seccion_${title.index}`,
                enter: function() {
                    const els = document.getElementsByClassName("browser-chapter-container");
                    for(let i = 0; i < els.length - 1; i++){
                      els[i].classList.remove('active-index');
                    }
                    const element = document.getElementById(`browser-title-${title.index}`)
                    element.classList.add('active-index');
                }
            });
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
