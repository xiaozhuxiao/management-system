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
    </div>
    <el-table :data="users" style="width: 100%" v-loading="isLoading">
      <el-table-column prop="id" label="用户ID" width="150"> </el-table-column>
      <el-table-column prop="name" label="头像" width="100">
        <template slot-scope="scope">
          <img width="30px" :src="scope.row.portrait || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="用户名"> </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="createTime" label="注册时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createdTime | dateFormat }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="状态" width="80">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" inactive-value="ENABLE" active-color="#13ce66" inactive-color="#ff4949" @change="handleForbidUser(scope.row)"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleSelectRole(scope.row)">分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 设置分配角色的 Dialog 组件 -->

    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="50%">
      <!-- 下拉菜单组件位置 -->
      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import { getUserPages, forbidUser } from '@/services/user.js'
import { getAllRoles } from '@/services/role'
import dayjs from 'dayjs'
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
      // 用于控制分配角色对话框是否显示
      dialogVisible: false,
      // 下拉菜单数据
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: []
    }
  },
  created() {
    this.loadUsers()
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
      const { data } = await getUserPages(this.filterParams)
      this.users = data.data.records
      this.isLoading = false
    },
    async handleForbidUser(user) {
      const { data } = await forbidUser(user.id)
      console.log(data)
    },
    handleQuery() {
      this.filterParams.currentPage = 1
      this.loadUsers()
    },
    handleReset() {
      this.$refs['filter-form'].resetFields()
      this.loadUsers()
    },
    // 点击用户的分配角色按钮
    async handleSelectRole() {
      // 显示分配角色地画框
      this.dialogVisible = true,
      // 请求所有角色列表数据
      const { data } = await getAllRoles() {
        console.log(data)
      }
    }
  },
  filters: {
    dateFormat(date, str = 'YYYY-MM-DD HH:mm:ss') {
      return dayjs(date).format(str)
    }
  }
}
</script>

<style></style>
