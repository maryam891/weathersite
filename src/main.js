import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
navigator.serviceWorker.register('service-worker.js', {
  scope: '/Weathersite-project/'
});
new Vue({

  router,
  store,
  created() {
    store.commit('initializeStore');
  },
  render: h => h(App)
}).$mount('#app')
