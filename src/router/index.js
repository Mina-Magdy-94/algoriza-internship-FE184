import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '..//components/Layout/TheLayout.vue'
import HomeView from '../views/HomeView/HomeView.vue'
import SignInView from '../views/SignInView/SignInView.vue'
import SearchResults from '../views/SearchResultsView/SearchresultsView.vue'

const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/signin',
        name: 'signin',
        component: SignInView
      },
      {
        path: '/searchResults',
        name: 'searchResults',
        component: SearchResults
      }
    ]
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
