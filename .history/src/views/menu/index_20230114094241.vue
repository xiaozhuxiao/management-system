<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">添加菜单</el-button>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <!-- 底部菜单列表展示区域 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" type="index"> </el-table-column>
        <el-table-column prop="name" label="菜单名称"> </el-table-column>
        <el-table-column prop="level" label="菜单级数"> </el-table-column>
        <el-table-column prop="icon" label="前端图标"> </el-table-column>
        <el-table-column prop="orderNum" label="排序"> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllMenus, deleteMenu } from '@/services/menu'

export default {
  name: 'MenuIndex',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.loadAllMenus()
  },
  methods: {
    handleEdit() {},
    handleDelete(rowData) {
      console.log(rowData)
      // 删除的确认提示
      this.$confirm('确认删除吗?', '删除提示提示')
        .then(async () => {
          // 发送删除请求
          const { data } = await deleteMenu(rowData.id)
          console.log(data)
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    // 获取所有菜单信息
    async loadAllMenus() {
      const { data } = await getAllMenus()
      if (data.code === '000000') {
        this.tableData = data.data
      }
    }
  }
}
</script>

<style></style>
