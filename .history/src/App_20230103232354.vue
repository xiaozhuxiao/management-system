<template>
  <div id="app">
    <!-- 根路由出口 -->
    <router-view />
  </div>
</template>

<script>
// 测试请求地址是否成功,以后哪个组件要用就直接调用下面代码即可
// import request from '@/utils/request'

// request({
//   method: 'GET',
//   // url: '/front/ad/getAdList'
//   url: '/boss/v2/api-docs?group=edu-boss-boot'
// }).then((res) => {
//   console.log(res)
// })

export default {
  name: 'App'
}
</script>

<style lang="scss"></style>
