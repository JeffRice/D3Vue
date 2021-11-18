import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '../views/Example'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Example',
    component: Example
  },
  {
    path: '/Example2',
    name: '/Example2',
    component: () => import('../views/Example2')
  },
  {
    path: '/Example3',
    name: 'Example3',
    component: () => import('../views/Example3')
  },
  {
    path: '/Example4',
    name: 'Example4',
    component: () => import('../views/Example4')
  },
  {
    path: '/finished',
    name: 'finished',
    component: () => import('../views/finished')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
