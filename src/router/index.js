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
    

  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: 'Weathersite-project'
})

export default router
