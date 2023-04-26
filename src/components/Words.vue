<template>
    <div class="browser-center">
        <div id="constitution-text" class="browser-main-columns browser-center-columns-first">
            <div id="constitution-text-top">
                <transition name="fade" mode="out-in" appear>
                    <div id="browser-header-top" class="browser-header" v-if="termSelected !== null">
                        <div class="browser-header-container">
                            <h4 class="browser-header-title" v-html="ocurrencesSummary(termSelected)"></h4>
                            <router-link :to="{ name: 'home'}" class="browser-header-close">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" class="browser-button-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <template v-for="(item, index) in filteredData">
                <browser :key="index" :item="item" :term-selected="termSelected"></browser>
            </template>
        </div>
        <div id="browser-common-words" class="browser-main-columns browser-center-columns-second">
            <h3 class="browser-center-columns-second-title">TÉRMINOS MÁS UTILIZADOS</h3>
            <div class="browser-common-word-container" v-for="(word, index) in frequencyTerms" :key="index">
                <div :id="word.label" class="browser-common-word-columns">
                    <div class="border-indicator" v-for="rect in bars(+word.total)"></div>
                </div>
                <div class="browser-common-word-columns">
                    <router-link :to="{ name: 'terms', params: { term: word.label} }">
                        <label :class="{checked: termSelected === word.label}" :for="word.label" class="browser-common-word-label">
                            {{ word.label }}
                        </label>
                    </router-link>
                    <router-link :to="{ name: 'home' }" v-if="termSelected === word.label">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" class="browser-button-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
                        </svg>
                    </router-link>
                    <div class="browser-word-related" v-if="termSelected === word.label">
                        <span class="browser-word-related-title">relacionados</span>
                        <span @click="scrollToRelated(termSelected)" class="browser-word-related-text" v-for="(relatedTerm, index) in relatedTerms(word)">
                            <router-link :to="{ name: 'terms', params: {term: relatedTerm}}">
                                {{relatedTerm}}
                            </router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Browser from './Browser'

export default {
    components: {
        Browser
    },
    props: {
        text: {
           type: Object,
           required: true
        },
        termSelected: {
            type: String
        },
    },
    data() {
      return {
        frequencyTerms: this.$root.$data.frequency.sort((a,b) => {
          return (+b.total - +a.total)
        }).slice(0, 50)
      }
    },
    computed: {
        filteredData: function() {
            if (this.termSelected === null) {
                return this.text;
            } else {
                this.$scrollTo('#constitution-text-top', 300, { easing: 'linear', container: '#constitution-text' })
                const dataAsArray = Object.values(this.text)
                return dataAsArray.filter(dataValue => {
                    return dataValue.articles.some(article => {
                        return article.text.some(articleText => {
                            return articleText.toLowerCase().indexOf(this.termSelected.toLowerCase()) > -1
                        })
                    })
                })
            }
        }
    },
    methods: {
        scrollToRelated: function(related) {
            this.$scrollTo('#' + related, 300, { easing: 'linear', container: '#browser-common-words' })
        },
        ocurrencesSummary: function(term) {
          function occurrences(string, subString, allowOverlapping) {
            string += "";
            subString += "";
            if (subString.length <= 0) return (string.length + 1);

            var n = 0, pos = 0, step = allowOverlapping ? 1 : subString.length;

            while (true) {
                pos = string.indexOf(subString, pos);
                if (pos >= 0) {
                    ++n;
                    pos += step;
                } else break;
            }
            return n;
          }

          let articles = 0;
          let total = 0;
          const dataAsArray = Object.values(this.text);
          Object.values(this.text).forEach(dataValue => {
            dataValue.articles.forEach(article => {
              const articleText = article.text.join("\n");
              if(articleText.toLowerCase().indexOf(term.toLowerCase()) !== -1){
                articles++;
              }
              total += occurrences(articleText.toLowerCase(), term, false);
            });
          });

          return `El término <span>${term}</span> se usa en <span>${articles} artículos</span> en <span>${total} ocasiones</span>`;
        },
        relatedTerms: function(word) {
          const term = this.$root.$data.terms.filter((w) => w.label === word.label)[0];
          return this.$root.$data.terms.filter((w) => {
            return (+w.cluster === +term.cluster && w.label !== term.label);
          }).slice(0, 5).map(w => w.label);
        },
        bars: function(n) {
          return Math.ceil((n*25.0)/195.0);
        }
    }
}
</script>
