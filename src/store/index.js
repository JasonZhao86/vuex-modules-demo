import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catagtory'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  // 建立快捷访问
  getters: {
    catagtory(state) {
      return state.catagtory.catagtory
    },
    currentCatagtory(state) {
      return state.catagtory.currentCatagtory
    },
    currentList(state) {
      return state.list.allData[state.catagtory.currentCatagtory] || []
    },
  },
  modules: {
    catagtory,
    list,
  },
})
