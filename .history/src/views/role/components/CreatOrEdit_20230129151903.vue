<template>
  <div class="create-or-edit">
    <el-form>
      <el-form-item label="角色名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="角色编码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button @click="onSubmit" type="primary">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createOrUpdate } from '@/services/role'
export default {
  name: 'CreateOrEdit',
  data() {
    return {
      role:{
        name: '测试',
        code: '222',
	      description: '描述信息'
}
      }
    },

  methods: {
    async onSubmit() {
      const { data } = await createOrUpdate()
      console.log(data)
    }
  }
</script>

<style></style>
