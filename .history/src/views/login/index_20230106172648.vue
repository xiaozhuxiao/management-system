<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" label-position="top">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginInedx',
  data() {
    return {
      // 存储表单数据的对象
      form: {
        phone: '',
        password: ''
      },
      // 用于设置表单校验规则
      rules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }, {}],
        password: []
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('点击提交')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  // 设置内部元素垂直水平居中
  justify-content: center;
  align-items: center;

  .el-form {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;

    .el-button {
      width: 100%;
    }
  }
}
</style>
