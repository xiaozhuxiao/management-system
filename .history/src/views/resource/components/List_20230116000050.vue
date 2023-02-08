<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="cleaefix">
        <!-- 使用 form 组件 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <!-- 使用 table 组件 -->
        <el-table :data="resources" style="width: 100%">
          <el-table-column type="index" label="编号" width="100"> </el-table-column>
          <el-table-column prop="name" label="资源名称"> </el-table-column>
          <el-table-column prop="url" label="资源路径"> </el-table-column>
          <el-table-column prop="description" label="描述"> </el-table-column>
          <!-- 设置过滤器需要使用作用域插槽获取数据 -->
          <el-table-column label="创建时间">
            <template slot-scope="scope">
              <span>{{ scope.row.createdTime | dataFormat }}</span>
            </template>
          </el-table-column>
          <el-table-column align="" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" @click="handleDelete(scope.row)" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getResourcePages } from '@/services/resource'

export default {
  name: 'ResourceList',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      // 用于存储资源列表数据
      resources: []
    }
  },
  created() {
    this.loadResources()
  },
  methods: {
    async loadResources() {
      const { data } = await getResourcePages({})
      if (data.code === '000000') {
        this.resources = data.data.records
      }
    },
    onSubmit() {
      console.log('submit!')
    },
    handleEdit() {
      console.log('编辑成功')
    },
    handleDelete() {
      console.log('删除成功')
    }
  },
  filters:{
    // 时间过滤器
    dataFormat(data) {
      return new Date(value).toLocaleString({
        console.log(data);
      })
    }
  }
}
</script>

<style></style>
