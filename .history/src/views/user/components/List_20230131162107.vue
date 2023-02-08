<template>
  <el-card>
    <div slot="header">
      <el-form :inline="true" ref="filter-form" :model="filterParams">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="filterParams.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="注册时间" prop="rangeDate">
          <el-date-picker v-model="filterParams.rangeDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"> </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="isLoading" @click="handleReset">重置</el-button>
          <el-button :disabled="isLoading" @click="handleQuery" type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="users" style="width: 100%" v-loading="isLoading">
        <el-table-column prop="id" label="用户ID" width="150"> </el-table-column>
        <el-table-column prop="name" label="头像" width="100">
          <el-row class="demo-avatar demo-basic">
            <template slot-scope="scope">
              <img width="30px" src="scope.roe.portrait || 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'" alt="" />
            </template>
          </el-row>
        </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column prop="createTime" label="注册时间"> </el-table-column>
        <el-table-column prop="name" label="状态" width="80">
          <template>
            <el-switch v-model="scope.row.status" inactive-value="ENABLE" active-color="#13ce66" inactive-color="#ff4949" @change="handleForbidUser(scope.row)"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <el-button @click="handleSelectRole">分配角色</el-button>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import { getUserPages, forbidUser } from '@/services/user.js'
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      filterParams: {
        currentPage: 1,
        pageSize: 100,
        phone: '',
        startCreateTime: '',
        endCreateTime: '',
        rangeDate: []
      },
      isLoading: true
    }
  },
  created() {
    this.loadUsers()
  },
  methods: {
    // 加载用户
    async loadUsxxxxxxers() {
      this.isLoading = true
      const { rangeDate } = this.filterParams
      if (rangeDate && rangeDate.length) {
        this.filterParams.startCreateTime = rangeDate[0]
        this.filterParams.endCreateTime = rangeDate[1]
      } else {
        this.filterParams.startCreateTime = ''
        this.filterParams.endCreateTime = ''
      }
      const { data } = await getUserPages(this.filterParams)
      this.users = data.data.records
      this.isLoading = false
    },
    async handleForbidUser(user) {},
    handleQuery() {},
    handleReset() {},
    // 点击用户的分配角色按钮
    handleSelectRole() {}
  }
}
</script>

<style></style>
