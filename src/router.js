import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Articulo from './views/Article'
import Browser from './views/Browser'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: Home
    },
    {
        path: '/articulo',
        name: 'articulo',
        component: Articulo
    },
    {
        path: '/browser',
        name: 'browser',
        component: Browser
    }
    ]
})
