import axios from 'axios'
export default {
  namespaced: true,
  state: {
    // 保存所有频道的所有新闻数据，好处是缓存，格式为{频道id: [...该频道下的所有新闻数据]}
    allData: {},
  },
  mutations: {
    updateList(state, { currentCatagtory, list }) {
      // 这样做事大错特错第，vue无法感知到对象发生了变化，因此就不会响应式的通知组件重新渲染
      // state.allData[currentCatagtory] = list
      state.allData = { ...state.allData, [currentCatagtory]: list }
    },
  },
  actions: {
    async getNewList(context, cataId) {
      const {
        data: {
          data: { results },
        },
      } = await axios({
        url: 'http://toutiao.itheima.net/v1_0/articles',
        params: {
          channel_id: cataId,
          timestamp: Date.now(),
          with_top: 1,
        },
      })
      context.commit('updateList', {
        currentCatagtory: cataId,
        list: results,
      })
    },
  },
  getters: {},
}
