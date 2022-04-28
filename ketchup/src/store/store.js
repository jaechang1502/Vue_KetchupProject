import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: 0
  },
  getters: {
  },
  mutations: {
    charactermenu(state) {
      state.menu = 1
    }
  },
  actions: {
  },
  modules: {
  }
})
