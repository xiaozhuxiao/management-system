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

      <el-table :data="roles" style="width: 100%" v-loading="isLoading">
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="name" label="角色名称" width="180"> </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <el-table-column prop="createdTime" label="添加时间"> </el-table-column>
        <el-table-column label="操作" align="center" width="150px"> </el-table-column>
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
      roles: [],

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
