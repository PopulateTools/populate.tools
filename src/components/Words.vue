<template>
    <div class="browser-center">
        <div id="constitution-text" class="browser-main-columns browser-center-columns-first">
            <div class="browser-header">
                <h4 class="browser-header-title" v-if="selectedWord !== null">{{selectedWord}} se usa en <span>20 artículos</span> en <span>10 ocasiones</span></h4>
            </div>
            <template v-for="(item, index) in filteredData">
                <browser :key="index" :item="item" :term-selected="selectedWord"></browser>
            </template>
        </div>
        <div class="browser-main-columns browser-center-columns-second">
            <h3 class="browser-center-columns-second-title">CONCEPTOS MÁS UTILIZADOS</h3>
            <div class="browser-common-word-container" v-for="(word, index) in commond_words" :key="index">
                <div class="browser-common-word-columns">
                    <div class="border-indicator" v-for="rect in word.indicator"></div>
                </div>
                <div class="browser-common-word-columns">
                    <input :id="word.value" :value="word.value" class="browser-commond-word-input" name="filtros" type="radio" v-model="selectedWord" />
                    <label :for="word.value" class="browser-common-word-label">
                        {{ word.value }}
                        <a href="#" v-if="selectedWord === word.value" @click="resetSelectedWord"> X </a>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Browser from './Browser'
import wholeText from './../data/constitution/data'
import mostUsedWords from './../data/constitution/most_used_words'
export default {
    name: 'palabras',
    components: {
        Browser
    },
    data() {
        return {
            selectedWord: null,
            commond_words: mostUsedWords
        }
    },
    computed: {
        filteredData: function() {
          if(this.selectedWord === null) {
              return wholeText;
          } else {
              const dataAsArray = Object.values(wholeText)
              return dataAsArray.filter(dataValue => {
                  return dataValue.articles.some(article => {
                      return article.text.some(articleText => {
                          return articleText.toLowerCase().indexOf(this.selectedWord.toLowerCase()) > -1
                      })
                  })
              })
          }
        }
    },
    methods: {
        resetSelectedWord() {
          this.selectedWord = null
        },
        isChecked(word) {
            return this.selectedWord === word
        }
    }
}
</script>
