import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/pages/Auth'
import Profile from '@/pages/Profile'
import Ads from '@/pages/Ads'

const routes = [
  {
    path: '/',
    component: Ads
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/profile',
    component: Profile
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
