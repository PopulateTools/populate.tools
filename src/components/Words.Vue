<template>
    <div class="browser-center">
        <div id="constitution-text" class="browser-main-columns browser-center-columns-first">
            <template v-for="(item, index) in filteredData">
                <browser :key="index" :item="item"></browser>
            </template>
        </div>
        <div class="browser-main-columns browser-center-columns-second">
            <h3 class="browser-center-columns-second-title">CONCEPTOS MÁS UTILIZADOS</h3>
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
                    value: 'ley',
                    checked: false
                },
                {
                    value: 'gobierno',
                    checked: false
                },
                {
                    value: 'derecho',
                    checked: false
                },
                {
                    value: 'generales',
                    checked: false
                },
                {
                    value: 'constitución',
                    checked: false
                },
                {
                    value: 'comunidades',
                    checked: false
                },
                {
                    value: 'autónomas',
                    checked: false
                },
                {
                    value: 'congreso',
                    checked: false
                },
                {
                    value: 'miembros',
                    checked: false
                },
                {
                    value: 'derechos',
                    checked: false
                },
                {
                    value: 'públicos',
                    checked: false
                },
                {
                    value: 'cortes',
                    checked: false
                },
                {
                    value: 'mayoría',
                    checked: false
                },
                {
                    value: 'ejercicio',
                    checked: false
                },
                {
                    value: 'mediante',
                    checked: false
                },
                {
                    value: 'rey',
                    checked: false
                },
                {
                    value: 'cámaras',
                    checked: false
                },
                {
                    value: 'acuerdo',
                    checked: false
                },
                {
                    value: 'general',
                    checked: false
                },
                {
                    value: 'poderes',
                    checked: false
                },
                {
                    value: 'leyes',
                    checked: false
                },
                {
                    value: 'tribunal',
                    checked: false
                },
                {
                    value: 'orgánica',
                    checked: false
                },
                {
                    value: 'diputados',
                    checked: false
                },
                {
                    value: 'funciones',
                    checked: false
                },
                {
                    value: 'presidente',
                    checked: false
                },
                {
                    value: 'constitucional',
                    checked: false
                },
                {
                    value: 'comunidad',
                    checked: false
                },
                {
                    value: 'regulará',
                    checked: false
                },
                {
                    value: 'términos',
                    checked: false
                },
                {
                    value: 'judicial',
                    checked: false
                },
                {
                    value: 'apartado',
                    checked: false
                },
                {
                    value: 'título',
                    checked: false
                },
                {
                    value: 'régimen',
                    checked: false
                },
                {
                    value: 'estatutos',
                    checked: false
                },
                {
                    value: 'autónoma',
                    checked: false
                },
                {
                    value: 'españa',
                    checked: false
                },
                {
                    value: 'forma',
                    checked: false
                },
                {
                    value: 'plazo',
                    checked: false
                },
                {
                    value: 'administración',
                    checked: false
                },
                {
                    value: 'interés',
                    checked: false
                },
                {
                    value: 'estatuto',
                    checked: false
                },
                {
                    value: 'perjuicio',
                    checked: false
                },
                {
                    value: 'consejo',
                    checked: false
                },
                {
                    value: 'social',
                    checked: false
                },
                {
                    value: 'españoles',
                    checked: false
                },
                {
                    value: 'absoluta',
                    checked: false
                },
                {
                    value: 'normas',
                    checked: false
                },
                {
                    value: 'territorio',
                    checked: false
                },
                {
                    value: 'legislación',
                    checked: false
                },
                {
                    value: 'anterior',
                    checked: false
                },
                {
                    value: 'senado',
                    checked: false
                },
                {
                    value: 'principios',
                    checked: false
                },
                {
                    value: 'ciudadanos',
                    checked: false
                },
                {
                    value: 'tratados',
                    checked: false
                },
                {
                    value: 'procedimiento',
                    checked: false
                },
                {
                    value: 'mismo',
                    checked: false
                },
                {
                    value: 'propuesta',
                    checked: false
                },
                {
                    value: 'iniciativa',
                    checked: false
                },
                {
                    value: 'autonomía',
                    checked: false
                },
                {
                    value: 'territorial',
                    checked: false
                },
                {
                    value: 'libertades',
                    checked: false
                },
                {
                    value: 'público',
                    checked: false
                },
                {
                    value: 'casos',
                    checked: false
                },
                {
                    value: 'establezca',
                    checked: false
                },
                {
                    value: 'reconoce',
                    checked: false
                },
                {
                    value: 'seguridad',
                    checked: false
                },
                {
                    value: 'años',
                    checked: false
                },
                {
                    value: 'efectos',
                    checked: false
                },
                {
                    value: 'tribunales',
                    checked: false
                },
                {
                    value: 'política',
                    checked: false
                },
                {
                    value: 'dentro',
                    checked: false
                },
                {
                    value: 'defensa',
                    checked: false
                },
                {
                    value: 'corresponde',
                    checked: false
                },
                {
                    value: 'edad',
                    checked: false
                },
                {
                    value: 'cualquier',
                    checked: false
                },
                {
                    value: 'competencias',
                    checked: false
                },
                {
                    value: 'cámara',
                    checked: false
                },
                {
                    value: 'senadores',
                    checked: false
                },
                {
                    value: 'proyecto',
                    checked: false
                },
                {
                    value: 'libertad',
                    checked: false
                },
                {
                    value: 'deberán',
                    checked: false
                },
                {
                    value: 'bases',
                    checked: false
                },
                {
                    value: 'ámbito',
                    checked: false
                },
                {
                    value: 'dispuesto',
                    checked: false
                },
                {
                    value: 'mandato',
                    checked: false
                },
                {
                    value: 'presupuestos',
                    checked: false
                },
                {
                    value: 'órgano',
                    checked: false
                },
                {
                    value: 'órganos',
                    checked: false
                },
                {
                    value: 'organización',
                    checked: false
                },
                {
                    value: 'condiciones',
                    checked: false
                },
                {
                    value: 'desarrollo',
                    checked: false
                },
                {
                    value: 'establecido',
                    checked: false
                },
                {
                    value: 'ningún',
                    checked: false
                },
                {
                    value: 'competencia',
                    checked: false
                },
                {
                    value: 'poder',
                    checked: false
                },
                {
                    value: 'español',
                    checked: false
                },
                {
                    value: 'protección',
                    checked: false
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
