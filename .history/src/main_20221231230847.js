import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element
import ElementUI from 'element-ui'

// 引入 Element 的主题文件
import 'element-ui/lib/theme-chalk/index.css'

// 将 Element 注册为 Vue 插件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App)
}).$mount('#app')
