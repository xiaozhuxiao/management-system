<template>
  <div class="create-or-edit">
    <el-form>
      <el-form-item label="角色名称" prop="pass">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="角色编码" prop="checkPass">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="age">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateOrEdit'
}
</script>

<style></style>
