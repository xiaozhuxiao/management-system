<template>
  <div class="role-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>角色管理</h3>
        <el-form ref="form" :model="form">
          <el-form-item label="输入搜索">
            <el-input v-model="form.name" placeholder="角色名称" width="80px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="onReset">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-button>添加角色</el-button>
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
      }
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
