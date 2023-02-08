import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
    // 用于在登录成功后保存用户信息 (初始值尝试读取本地存储)
    // user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  mutations: {
    jia(state) {
      state.count++
    }
    // jia(state, payload) {
    //   state.count = payload
    // }
    // 存储用户数据
    // setUser(state, payload) {
    //   // 将 payload 转换为对象后再进行存储
    //   state.user = JSON.parse(payload)
    //   // 将 payload 数据添加到本地存储中
    //   window.localStorage.setItem('user', payload)
    // }
  },
  actions: {
    // jiaHandle(context, payload) {
    //   setTimeout(() => {
    //     // context 与 store 功能完全相同
    //     context.commit('jia', payload.count)
    //   }, payload.delay)
    // }
  },
  modules: {}
})
