<template>
  <div class="role-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>角色管理</h3>
        <el-form ref="form" :model="form">
          <el-form-item label="输入搜索">
            <el-input v-model="form.name" placeholder="角色名称" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="onReset">重置</el-button>
            <el-button type="primary" @click="onSubmit" v-loading="isLoading">查询搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-button>添加角色</el-button>

      <el-table v-loading="isLoading" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="编号" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'RoleList',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
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
      ],
      isLoading: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onReset() {
      console.log('onReset!')
    }
  }
}
</script>

<style lang="scss" scoped></style>
