<template>
  <div class="alloc-menu">
    <!-- 这是角色 ID 为：{{ roleId }} -->
    <el-card>
      <el-tree :data="menus" :props="defaultProps" @node-click="handleNodeClick" default-expand-all show-checkbox></el-tree>
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
    getMenuNodeList()
  },
  data() {
    return {
      menus: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
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
      }
    }
  }
}
</script>

<style></style>
