import Vue from 'vue'
import Vuex from 'vuex'
import localStoragePlugin from '../plugins/localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    localStoragePlugin
  ],
  getters: {
    searches(state) {
      return state.items
    }
  },
  state: {
    items: []
  },
  mutations: {
    initializeStore() {
      const data = localStorage.getItem('items');

      if (data) {
        this.replaceState(Object.assign(this.state, JSON.parse(data)));
      }
    },
    addSearch(state, payload) {
      state.items.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
