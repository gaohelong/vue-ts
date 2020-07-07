import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/component/',
    name: 'Component',
    component: () => import('../views/Component.vue'), // router lazyload.
    children: [
      {
        path: 'cptPE/:tid',
        name: 'cptPE',
        component: () => import('../views/PE.vue')
      },
      {
        path: 'cptVuex',
        name: 'cptVuex',
        component: () => import('../views/Vuex.vue')
      },
      {
        path: 'cptEventBus',
        name: 'cptEventBus',
        component: () => import('../views/EventBus.vue')
      },
      {
        path: 'cptAL',
        name: 'cptAL',
        component: () => import('../views/AttrListeners.vue')
      },
      {
        path: 'cptPI',
        name: 'cptPI',
        component: () => import('../views/ProviderInject.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/unitTest/',
    name: 'unitTest',
    component: () => import('../views/UnitTest.vue') // router lazyload.
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
