import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
        // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
