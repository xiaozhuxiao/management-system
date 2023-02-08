<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="cleaefix">
        <!-- 使用 form 组件 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 使用 table 组件 -->
      <el-table :data="resources" style="width: 100%">
        <el-table-column type="index" label="编号" width="100"> </el-table-column>
        <el-table-column prop="name" label="资源名称"> </el-table-column>
        <el-table-column prop="url" label="资源路径"> </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <!-- 设置过滤器需要使用作用域插槽获取数据 -->
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createdTime | dataFormat }}</span>
          </template>
        </el-table-column>
        <el-table-column align="" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.row)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件结构 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="formInline.current" :page-sizes="[10]" :page-size="10" background layout="total, size0s, prev, pager, next, jumper" :total="100"> </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getResourcePages } from '@/services/resource'
// 引入 dayjs 插件
import dayjs from 'dayjs'

export default {
  name: 'ResourceList',
  data() {
    return {
      formInline: {
        // 当前显示的页号
        current: 1,
        // 每页显示的数据条数
        size: 10
      },
      // 用于存储资源列表数据
      resources: [],

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  created() {
    this.loadResources()
  },
  methods: {
    // 每页显示条数变化时触发
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.form.size = val
      // 由于修改了每页显示的条数，应当将页数还原默认值 1
      this.form.current = 1
      this.loadResources()
    },
    // 页号改变触发
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.form.current = val
      this.loadResources()
    },
    async loadResources() {
      const { data } = await getResourcePages({
        current: this.form.current,
        size: this.form.size
      })
      if (data.code === '000000') {
        this.resources = data.data.records
      }
    },
    onSubmit() {
      console.log('submit!')
    },
    handleEdit() {
      console.log('编辑成功')
    },
    handleDelete() {
      console.log('删除成功')
    }
  },
  filters: {
    dataFormat(date, str = 'YYYY-MM-DD HH:mm:ss') {
      // date = new Date(date)
      return dayjs(date).format(str)
      // return `${date.getFullYear()}-${date.getMOnth()+1}-${date.getDate()}`
    }
  }
}
</script>

<style></style>
