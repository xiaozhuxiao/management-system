<template>
  <div class="alloc-menu">
    <!-- 这是角色 ID 为：{{ roleId }} -->
    <el-card>
      <el-tree :data="menus" :props="defaultProps" @node-click="handleNodeClick" default-expand-all show-checkbox></el-tree>
    </el-card>
    <div style="margin: 20px"></div>
  </div>
</template>

<script>
import { getMenuNodeList } from '@/services/menu'
export default {
  name: 'AllocMenu',
  props: {
    roleId: {
      type: [Number, String],
      required: true
    }
  },
  created() {
    this.loadMenus()
    getMenuNodeList()
  },
  data() {
    return {
      menus: [],
      defaultProps: {
        children: 'subMenuList',
        label: 'name'
      }
    }
  },
  methods: {
    async loadMenus() {
      const { data } = await getMenuNodeList()
      if (data.code === '000000') {
        this.menus = data.data
      }
    }
  }
}
</script>

<style></style>
