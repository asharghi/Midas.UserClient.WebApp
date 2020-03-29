import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
