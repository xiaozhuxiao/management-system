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
        <el-table-column prop="id" label="编号" width="180" />
        <el-table-column prop="name" label="角色名称" width="180" />
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="createdTime" label="添加时间" />
        <el-table-column label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <div>
              <el-button type="text">分配菜单</el-button>
              <el-button type="text">分配资源</el-button>
            </div>
            <div>
              <el-button @click="handleEdit(scope.row)">编辑</el-button>
              <el-button @click="handleDelete(scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRoles, deleteRole } from '@/services/role'

export default {
  name: 'RoleList',
  data() {
    return {
      form: {
        name: ''
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
    },
    handleEdit() {},
    handleDelete() {}
  }
}
</script>

<style lang="scss" scoped></style>
