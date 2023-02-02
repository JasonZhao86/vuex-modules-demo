import axios from 'axios'

export default {
  namespaced: true,
  state: {
    catagtory: [],
    currentCatagtory: '',
  },
  mutations: {
    updateCatagtory(state, payload) {
      state.catagtory = payload
    },
    updateCurrentCatagtory(state, payload) {
      state.currentCatagtory = payload
    },
  },
  actions: {
    async getCatagtory(context) {
      const {
        data: {
          data: { channels },
        },
      } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
      context.commit('updateCatagtory', channels)
      context.commit('updateCurrentCatagtory', channels[0].id)
    },
  },
  getters: {},
}
