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
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
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
        phonr: '',
        startCreateTime: '',
        endCreateTime: '',
        rangeDate: []
      },
      isLoading: true
    }
  },
  methods: {}
}
</script>

<style></style>
