<template>
  <div class="menu-create">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加菜单</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-select v-model="form.parentId" placeholder="请选择上级菜单">
            <!-- 无上级菜单 -->
            <el-option label="无上级菜单" :value="-1"></el-option>
            <!-- 选择一级菜单 -->
            <el-option v-for="item in parentMenuList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="前端图标">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-radio-group v-model="form.shown">
            <!-- label 的数据会在选择后设置给 v-model 的 shown -->
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="form.orderNum" :min="0" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getEditMenuInfo } from '@/services/menu'

export default {
  name: 'MenuCreate',
  data() {
    return {
      form: {
        parentId: -1,
        name: '',
        href: '',
        icon: '',
        orderNum: 5,
        description: '',
        shown: true
      },
      // 存储上级菜单数据
      parentMenuList: []
    }
  },
  created() {
    // 加载上级菜单信息
    this.loadMenuInfo()
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    async loadMenuInfo() {
      // 请求菜单数据(上级菜单数据)
      const { data } = await getEditMenuInfo()
      if (data.code === '000000') {
        // 将上级菜单数据保存,进行数据绑定
        this.parentMenuList = data.data.parentMenuList
      }
    }
  }
}
</script>

<style></style>
