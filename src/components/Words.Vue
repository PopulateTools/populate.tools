<template>
    <div class="browser-center">
        <div id="constitution-text" class="browser-main-columns browser-center-columns-first">
            <template v-for="(item, index) in filteredData">
                <browser :key="index" :item="item"></browser>
            </template>
        </div>
        <div class="browser-main-columns browser-center-columns-second">
            <h3 class="browser-center-columns-second-title">Conceptos más utilizados</h3>
            <div class="browser-common-word-container" v-for="(word,index) in commond_words" :key="index">
                <input :id="word.value" class="browser-commond-word-input" type="checkbox" v-model="word.checked" v-on:change="getfilteredData($event, word.value)">
                <label :for="word.value" class="browser-common-word-label">
                    {{ word.value }}
                </label>
            </div>
        </div>
    </div>
</template>
<script>
import Browser from './Browser'
import data from './../json/data'

export default {
    name: 'palabras',
    components: {
        Browser
    },
    computed: {
        selectedFilters: function() {
            let filters = []
            let checkedFiters = this.commond_words.filter(obj => obj.checked)
            checkedFiters.forEach(element => {
                filters.push(element.value)
            })
            return filters
        }
    },
    data() {
        return {
            filteredData: [],
            commond_words: [{
                checked: false,
                value: 'ley'
            },
            {
                checked: false,
                value: 'gobierno'
            },
            {
                checked: false,
                value: 'derecho'
            },
            {
                checked: false,
                value: 'libertades'
            },
            {
                checked: false,
                value: 'villa'
            }
        ]
        }
    },
    methods: {
        getfilteredData: function(event, word) {
            const dataAsArray = Object.values(data)
            let filteredDataByfilters = []
            if (this.selectedFilters.length > 0) {
                filteredDataByfilters = dataAsArray.filter(dataValue => {
                    return dataValue.articles.some(article => {
                        return article.text.some(articleText => {
                            return articleText.toLowerCase().indexOf(word.toLowerCase()) > -1
                        })
                    })
                })
                this.filteredData = filteredDataByfilters
            } else {
                this.filteredData = data
            }
        }
    },
    mounted() {
        this.getfilteredData('Constitución')
    }
}
</script>
<!--
common_words: ['ley', 'gobierno', 'derecho', 'generales', 'constitución', 'comunidades', 'autónomas', 'congreso', 'miembros', 'derechos', 'públicos', 'cortes', 'mayoría', 'ejercicio', 'mediante', 'rey', 'cámaras', 'acuerdo', 'general', 'poderes', 'leyes', 'tribunal', 'orgánica', 'diputados', 'funciones', 'presidente', 'constitucional', 'comunidad', 'regulará', 'términos', 'judicial', 'apartado', 'título', 'régimen', 'estatutos', 'autónoma', 'españa', 'forma', 'plazo', 'administración', 'interés', 'estatuto', 'perjuicio', 'consejo', 'social', 'españoles', 'absoluta', 'normas', 'territorio', 'legislación', 'anterior', 'senado', 'principios', 'ciudadanos', 'tratados', 'procedimiento', 'mismo', 'propuesta', 'iniciativa', 'autonomía', 'territorial', 'libertades', 'público', 'casos', 'establezca', 'reconoce', 'seguridad', 'años', 'efectos', 'tribunales', 'política', 'dentro', 'defensa', 'corresponde', 'edad', 'cualquier', 'competencias', 'cámara', 'senadores', 'proyecto', 'libertad', 'deberán', 'bases', 'ámbito', 'dispuesto', 'mandato', 'presupuestos', 'órgano', 'órganos', 'organización', 'condiciones', 'desarrollo', 'establecido', 'ningún', 'competencia', 'poder', 'español', 'protección'] -->
