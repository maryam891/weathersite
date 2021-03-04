import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recentsearch from '../views/recent-search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Weathersite-project/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Weathersite-project/recent-search',
    name: 'recent-search',
    component: Recentsearch
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
