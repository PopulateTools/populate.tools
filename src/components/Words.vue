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
                <div class="browser-common-word-columns">
                    <div class="border-indicator" v-for="rect in word.indicator"></div>
                </div>
                <div class="browser-common-word-columns">
                    <input :id="word.value" class="browser-commond-word-input" type="checkbox" v-model="word.checked" v-on:change="getfilteredData($event, word.value)">
                    <label :for="word.value" class="browser-common-word-label">
                        {{ word.value }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Browser from './Browser'
import data from './../data/constitution/data'

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
                    value: 'Ley',
                    checked: false,
                    indicator: 20
                },
                {
                    value: 'Gobierno',
                    checked: false,
                    indicator: 19
                },
                {
                    value: 'Derecho',
                    checked: false,
                    indicator: 17
                },
                {
                    value: 'Generales',
                    checked: false,
                    indicator: 16
                },
                {
                    value: 'Constitución',
                    checked: false,
                    indicator: 15
                },
                {
                    value: 'Comunidades',
                    checked: false,
                    indicator: 14
                },
                {
                    value: 'Autónomas',
                    checked: false,
                    indicator: 13
                },
                {
                    value: 'Congreso',
                    checked: false,
                    indicator: 12
                },
                {
                    value: 'Miembros',
                    checked: false,
                    indicator: 11
                },
                {
                    value: 'Derechos',
                    checked: false,
                    indicator: 10
                },
                {
                    value: 'Públicos',
                    checked: false,
                    indicator: 9
                },
                {
                    value: 'Cortes',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Mayoría',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Ejercicio',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Mediante',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Rey',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Cámaras',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Acuerdo',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'General',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Poderes',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Leyes',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Tribunal',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Orgánica',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Diputados',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Funciones',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Presidente',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Constitucional',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Comunidad',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Regulará',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Términos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Judicial',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Apartado',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Título',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Régimen',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Estatutos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Autónoma',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'España',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Forma',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Plazo',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Administración',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Interés',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Estatuto',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Perjuicio',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Consejo',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Social',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Españoles',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Absoluta',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Normas',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Territorio',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Legislación',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Anterior',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Senado',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Principios',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Ciudadanos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Tratados',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Procedimiento',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Mismo',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Propuesta',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Iniciativa',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Autonomía',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Territorial',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Libertades',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Público',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Casos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Establezca',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Reconoce',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Seguridad',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Años',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Efectos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Tribunales',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Política',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Dentro',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Defensa',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Corresponde',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Edad',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Cualquier',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Competencias',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Cámara',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Senadores',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Proyecto',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Libertad',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Deberán',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Bases',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Ámbito',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Dispuesto',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Mandato',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Presupuestos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Órgano',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Órganos',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Organización',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Condiciones',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Desarrollo',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Establecido',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Ningún',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Competencia',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Poder',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Español',
                    checked: false,
                    indicator: 7
                },
                {
                    value: 'Protección',
                    checked: false,
                    indicator: 7
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
