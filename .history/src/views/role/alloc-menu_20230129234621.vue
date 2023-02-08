<template>
  <div class="alloc-menu">
    <!-- 这是角色 ID 为：{{ roleId }} -->
    <el-card>
      <el-tree ref="menu-tree" node-key="id" :data="menus" :props="defaultProps" @node-click="handleNodeClick" default-expand-all show-checkbox></el-tree>
      <div style="margin: 20px">
        <el-button>清空</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </el-card>
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
    // getMenuNodeList()
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
    onSave() {
      this.$refs['menu-tree'].getCheckedKeys()
    },
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
