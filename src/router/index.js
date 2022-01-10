import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Consult from '../views/Consult.vue'
import Faq from '../views/Faq.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consult',
    name: 'Consult',
    component: Consult
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
