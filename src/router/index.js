import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
  {
    path: '/Page4',
    name: 'Page4',
    component: () => import('../views/Page4.vue')
  },
  {
    path: '/Page5',
    name: 'Page5',
    component: () => import('../views/Page5.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
