import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import enterView from 'enter-view'

Vue.use(VueScrollTo)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
