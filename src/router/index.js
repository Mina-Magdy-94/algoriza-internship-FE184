import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '..//components/Layout/TheLayout.vue'
import HomeView from '../views/HomeView/HomeView.vue'
import SignInView from '../views/SignInView/SignInView.vue'
import SearchResults from '../views/SearchResultsView/SearchresultsView.vue'
import HotelDetailsView from '../views/HotelDetailsView/HotelDetailsView.vue'
import CheckOutView from '../views/CheckOutView/CheckOutView.vue'

const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '',
        name: 'home',
        meta:{
          title:"Home"
        },
        component: HomeView
      },
      {
        path: '/signin',
        name: 'signin',
        meta:{
          title:"Sign In"
        },
        component: SignInView
      },
      {
        path: '/searchResults',
        name: 'searchResults',
        meta:{
          title:"Search Results"
        },
        component: SearchResults
      },
      {
        path:'/hotelDetails/:id/:rating',
        name:'hotelDetails',
        meta:{
        title:"Hotel Details"
        },
        component:HotelDetailsView
      },
      {
        path:'/checkout',
        name:'checkout',
        meta:{
          title:""
        },
        component:CheckOutView
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

router.beforeEach((to,from,next)=>{
  document.title =`My Dream Place | ${to.meta.title}`|| 'My Dream Place'
  next()
})

export default router
