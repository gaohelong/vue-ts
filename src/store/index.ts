import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vue-ts'
  },
  getters: { // 实时监听state值的变化(最新状态)
    getTitle (state) {
      return state.title
    }
  },
  mutations: {
    setTitle (state, title) {
      state.title = title
    }
  },
  actions: {
    changeTitle (context, title) {
      context.commit('setTitle', title)
    }
  },
  modules: {
  }
})
