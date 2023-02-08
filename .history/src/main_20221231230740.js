import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App)
}).$mount('#app')
