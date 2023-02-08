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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="用户ID" width="100"> </el-table-column>
        <el-table-column prop="name" label="头像"
          ><el-row class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="30" :src="circleUrl"></el-avatar></div>
                <div class="block" v-for="size in sizeList" :key="size">
                  <el-avatar :size="size" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-col> </el-row
        ></el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="name" label="手机号" width="100"> </el-table-column>
        <el-table-column prop="name" label="注册时间" width="180"> </el-table-column>
        <el-table-column prop="name" label="状态">
          <el-button type="success" circle></el-button>
        </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
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
      isLoading: true,
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    // 加载用户
    async loadUsers() {
      this.isLoading = true
      const { rangeDate } = this.filterParams
      if (rangeDate && rangeDate.length) {
        this.filterParams.startCreateTime = rangeDate[0]
        this.filterParams.endCreateTime = rangeDate[1]
      } else {
        this.filterParams.startCreateTime = ''
        this.filterParams.endCreateTime = ''
      }
    }
  }
}
</script>

<style></style>
