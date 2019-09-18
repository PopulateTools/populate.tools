import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Words from './views/Words'
import Terms from './views/Terms'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms
    },
    {
        path: '/words',
        name: 'words',
        component: Words
    }
    ]
})
