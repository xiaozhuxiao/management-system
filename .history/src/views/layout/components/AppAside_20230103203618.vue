<template>
  <div class="app-aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <template>
          <i class="el-icon-setting"></i>
          <span slot="title">广告管理</span>
        </template>
        <el-menu-item index="4-1">广告列表</el-menu-item>
        <el-menu-item index="4-2">广告位列表</el-menu-item>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang="scss" scoped>
.app-aside {
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: 0 none;
  }
}
</style>
