<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">添加菜单</el-button>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <!-- 底部菜单列表展示区域 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="菜单名称"> </el-table-column>
        <el-table-column prop="address" label="菜单级数"> </el-table-column>
        <el-table-column prop="address" label="前端图标"> </el-table-column>
        <el-table-column prop="address" label="排序"> </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllMenu } from '@/services/menu'

export default {
  name: 'MenuIndex',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style></style>
