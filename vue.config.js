const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false /* 关闭语法检查 */
})

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  }
}
