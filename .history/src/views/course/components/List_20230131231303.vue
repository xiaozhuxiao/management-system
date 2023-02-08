<template>
  <div class="course-list">
    <el-card>
      <div slot="header">
        <span>数据筛选</span>
      </div>
      <el-form :inline="true" ref="form" :model="filterParams" label-position="left">
        <el-form-item label="课程名称" prop="courseName">
          <el-input v-model="filterParams.courseName" placeholder="课程名称"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="filterParams.status">
            <el-option label="全部" value=""></el-option>
            <el-option label="上架" value="1"></el-option>
            <el-option label="下架" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="isLoading" @click="handleReset">重置</el-button>
          <el-button :disabled="isLoading" @click="handleFilter">查询</el-button>
        </el-form-item>
        <el-button type="primary" style="float: right">+ 添加课程</el-button>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>
    <el-card style="margin-top: 10px">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"> </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getQueryCourses } from '@/services/course'
export default {
  name: 'CourseList',
  data() {
    return {
      // 筛选功能参数(表单数据)
      filterParams: {
        currentPage: '1',
        pageSize: '10',
        courseName: '',
        status: ''
      },
      // 课程信息
      courses: [],
      // 数据总条数
      totalCount: 0,
      // 加载状态
      isLoading: true
    }
  },
  created() {
    // 加载课程
    this.loadCourses()
  },
  methods: {
    // 加载课程
    async loadCourses() {
      this.isLoading = true
      const { data } = await getQueryCourses(this.filterParams)
      if (data.code === '000000') {
        // 保存课程信息
        this.courses = data.data.records
        this.totalCount = data.data.total
        this.isLoading = false
      }
    },
    // 重置操作
    handleReset() {
      console.log('submit!')
    },
    // 筛选操作
    handleFilter() {
      console.log('submit!')
    }
  }
}
</script>

<style></style>
