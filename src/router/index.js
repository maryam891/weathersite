import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recentsearch from '../views/recent-search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recent-search',
    name: 'recent-search',
    component: Recentsearch
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: 'Weathersite-project'
})

export default router
