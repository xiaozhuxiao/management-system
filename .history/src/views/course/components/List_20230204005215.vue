<template>
  <div class="course-list">
    <el-card>
      <div slot="header">
        <span>数据筛选</span>
      </div>
      <!-- 课程展示区域 -->
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
        <template>
          <el-button
            type="primary"
            style="float: right"
            @click="
              $router.push({
                name: 'corrse-create'
              })
            "
            >+ 添加课程</el-button
          >
        </template>
      </el-form>
      <el-table :data="courses" v-loading="isLoading" style="width: 100%; margin-bottom: 20px">
        <el-table-column prop="id" label="ID" width="100"> </el-table-column>
        <el-table-column prop="courseName" label="课程名称" width="230"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column prop="sortNum" label="排序顺序"> </el-table-column>
        <el-table-column prop="status" label="上架状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" :active-value="1" :inactive-value="0" :disabled="scope.row.isStatusLoading" @change="onStateChange(scope.row)"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="操作" width="200" align="center">
          <template>
            <el-button @click="$router.push({
              name:'course-edit',
              params:{
                courseId
              }
            })"">编辑</el-button>
            <el-button>内容管理</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :current-page="filterParams.currentPage" :disabled="isLoading" :total="totalCount"> </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getQueryCourses, changeState } from '@/services/course'
export default {
  name: 'CourseList',
  data() {
    return {
      // 筛选功能参数(表单数据)
      filterParams: {
        currentPage: 1,
        pageSize: 10,
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
    // 上下架切换处理
    async onStateChange(course) {
      // 点击开荒,开启禁用状态
      course.isStatusLoading = true
      const { data } = await changeState({
        courseId: course.id,
        status: course.status
      })
      if (data.code === '000000') {
        this.$message.success(`${course.status === 1 ? '上架' : '下架'}成功`)
        // 取消禁用状态
        course.isStatusLoading = false
      }
    },
    // 加载课程
    async loadCourses() {
      this.isLoading = true
      const { data } = await getQueryCourses(this.filterParams)
      if (data.code === '000000') {
        data.data.records.forEach((item) => {
          // 用于表示更改的状态
          item.isStatusLoading = false
        })
        // 保存课程信息
        this.courses = data.data.records
        this.totalCount = data.data.total
        this.isLoading = false
      }
    },
    // 分页页码点击操作
    handleCurrentChange(page) {
      this.filterParams.currentPage = page
      this.loadCourses()
    },
    // 重置操作
    handleReset() {
      this.$refs.form.resetFielads()
      this.filterParams.currentPage = 1
      this.loadCourses()
    },
    // 筛选操作
    handleFilter() {
      this.filterParams.currentPage = 1
      this.loadCourses()
    }
  }
}
</script>

<style></style>
