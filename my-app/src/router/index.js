import Vue from 'vue'
import VueRouter from 'vue-router'
import Splash from '../views/Splash.vue'
import About from '../views/About.vue'
import Location from '../views/Location.vue'
import Events from '../views/Events.vue'
import Accommodations from '../views/Accommodations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Splash
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/accommodations',
    name: 'Accommodations',
    component: Accommodations
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
