<template>
  <el-container>
    <el-aside width="200px">
      <!-- 侧边栏组件 -->
      <app-aside />
    </el-aside>
    <el-container>
      <el-header>
        <!-- 头部组件 -->
        <app-header />
      </el-header>
      <el-main>
        <!-- 设置子路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入侧边栏组件
import AppAside from './components/AppAside'

import AppHeader from './components/AppHeader'

export default {
  name: 'Layout',
  components: {
    AppAside,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  min-width: 980px;
}
.el-aside {
  background-color: #d3dce6;
}
.el-header {
  background-color: #ffffff;
}
.el-main {
  background-color: #f1f1f1;
}
</style>
