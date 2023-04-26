import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Terms from './views/Terms.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/terms/:term',
            name: 'terms',
            component: Terms
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
