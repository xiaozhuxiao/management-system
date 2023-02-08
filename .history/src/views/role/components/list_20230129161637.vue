<template>
  <div class="role-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>筛选搜索</h3>
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
      <!-- 显示对话框 -->
      <el-button @click="dialogVisible = true">添加角色</el-button>
      <el-divider style="width: 300px"></el-divider>

      <el-table :data="roles" style="width: 100%" v-loading="isLoading" border>
        <el-table-column prop="id" label="编号" align="center" width="180" />
        <el-table-column prop="name" label="角色名称" align="center" width="180" />
        <el-table-column prop="description" align="center" label="描述" />
        <el-table-column prop="createdTime" align="center" label="添加时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createdTime | dateFormat }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <div>
              <el-button type="text">分配菜单</el-button>
              <el-button type="text">分配资源</el-button>
            </div>
            <div>
              <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- 添加角色的对话框结构 -->
      <el-dialog title="添加角色" :visible.sync="dialogVisible" width="30%">
        <!-- 将添加与编辑功能单独封装到组件中 -->
        <create-or-edit @success="handleSuccess" @cancel="handleCancel"></create-or-edit>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getRoles, deleteRole } from '@/services/role'

import dayjs from 'dayjs'
// import create from '@/views/menu/create.vue'
// import CreateOrEdit from '@/views/menu/components/CreateOrEdit.vue'
import CreateOrEdit from './CreatOrEdit'

export default {
  components: { CreateOrEdit },
  name: 'RoleList',
  data() {
    return {
      form: {
        name: ''
      },
      roles: [],

      isLoading: false,
      // 控制对话框显示
      dialogVisible: false,
      // 控制对话框的功能状态
      isEdit: false
    }
  },
  created() {
    this.loadRoles()
  },
  methods: {
    // 监听子组件的取消状态
    handleCancel() {
      this.dialogVisible = false
    },
    // 监听子组件的添加状态,成功时触发
    handleSuccess() {
      this.dialogVisible = false
      // 刷新列表
      this.loadRoles()
    },
    onSubmit() {
      console.log('submit!')
    },
    onReset() {
      console.log('onReset!')
    },
    handleEdit() {},
    // 删除角色
    handleDelete(role) {
      this.$confirm(`确认删除角色:${role.name}？`, '删除提示')
        .then(async () => {
          await deleteRole(role.id)
          this.$message.success('删除删除')
          this.loadRoles()
        })
        .catch((err) => {
          if (err && err.response) {
            this.$message.error('删除失败，请重试')
          } else {
            this.$message.info('取消删除')
          }
        })
    },
    // 请求角色列表数据
    async loadRoles() {
      this.isLoading = true
      const { data } = await getRoles(this.form)
      this.roles = data.data.records
      this.isLoading = false
    }
  },
  filters: {
    dateFormat(date, str = 'YYYY-MM-DD HH:mm:ss') {
      return dayjs(date).format(str)
    }
  }
}
</script>

<style lang="scss" scoped></style>
