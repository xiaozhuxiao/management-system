<template>
  <div class="create-or-edit">
    <el-form>
      <el-form-item label="角色名称">
        <el-input v-model="role.name"></el-input>
      </el-form-item>
      <el-form-item label="角色编码">
        <el-input v-model="role.code"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input type="textarea" v-model="role.description"></el-input>
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
      role: {
        name: '',
        code: '',
        description: ''
      }
    }
  },

  methods: {
    async onSubmit() {
      const { data } = await createOrUpdate(this.role)
      console.log(data)
    }
  }
}
</script>

<style></style>
