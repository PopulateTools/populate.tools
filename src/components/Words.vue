<template>
    <div class="browser-center">
        <div id="constitution-text" class="browser-main-columns browser-center-columns-first">
            <div>
                <transition name="fade" mode="out-in" appear>
                    <template v-for="(word, index) in commond_words">
                    <div :key="index" class="browser-header" v-if="selectedWord === word.value">
                        <div class="browser-header-container">
                            <h4 class="browser-header-title">El término <span>{{selectedWord}}</span> se usa en <span>{{word.ocurrences}} artículos</span> en <span>{{word.articles}} ocasiones</span>
                            </h4>
                            <a class="browser-header-close" href="#" @click="resetSelectedWord">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" class="browser-button-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
                                </svg>
                            </a>

                        </div>
                    </div>
                    </template>
                </transition>
            </div>
            <template v-for="(item, index) in filteredData">
                <transition name="fade" mode="out-in" appear>
                    <browser :key="index" :item="item" :term-selected="selectedWord"></browser>
                </transition>
            </template>
        </div>
        <div class="browser-main-columns browser-center-columns-second">
            <h3 class="browser-center-columns-second-title">TÉRMINOS MÁS UTILIZADOS</h3>
            <div class="browser-common-word-container" v-for="(word, index) in commond_words" :key="index">
                <div class="browser-common-word-columns">
                    <div class="border-indicator" v-for="rect in word.indicator"></div>
                </div>
                <div class="browser-common-word-columns">
                    <input :id="word.value" :value="word.value" class="browser-commond-word-input" name="filtros" type="radio" v-model="selectedWord" />
                    <label :for="word.value" class="browser-common-word-label">
                        {{ word.value }}
                    </label>
                    <a href="#" v-if="selectedWord === word.value" @click="resetSelectedWord"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" class="browser-button-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
                        </svg>
                    </a>
                    <div class="browser-word-related" v-if="selectedWord === word.value">
                        <span class="browser-word-related-title">relacionados</span>
                        <span class="browser-word-related-text" v-for="(words, index) in word.related">
                            {{words}}
                        </span>
                    </div>
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
            if (this.selectedWord === null) {
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
        },
        getOcurrences: function() {
            return this.commond_words
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
