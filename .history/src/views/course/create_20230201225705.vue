<template>
  <div class="corrse-create">
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <el-steps :active="activeStep" simple>
          <el-step v-for="(item, i) in stops" :key="item.id" :title="item.title" :icon="item.icon" @click.native="activeStep = i"></el-step>
        </el-steps>
      </div>
      <!-- 步骤对应的表单结构 -->
      <el-form>
        <div v-show="activeStep === 0">
          基本信息
          <el-form-item label="课程名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="课程简介">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="课程概述">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="讲师姓名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="讲师简介">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="课程排序">
            <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </div>
        <div v-show="activeStep === 1">
          课程封面
          <el-form-item>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>
        <div v-show="activeStep === 2">销售信息</div>
        <div v-show="activeStep === 3">秒杀信息</div>
        <div v-show="activeStep === 4">
          课程详情
          <el-form-item><el-button type="primary">保存</el-button></el-form-item>
        </div>
        <!-- 下一步按钮 -->
        <el-form-item v-if="activeStep !== stops.length - 1">
          <el-button @click="activeStep++">下一步</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CorrseCreate',
  data() {
    return {
      // 步骤的进度
      activeStep: 0,
      // 步骤条的相关信息
      stops: [
        { id: 1, title: '基本信息', icon: 'el-icon-edit' },
        { id: 2, title: '课程封面', icon: 'el-icon-upload' },
        { id: 3, title: '销售信息', icon: 'el-icon-picture' },
        { id: 4, title: '秒杀信息', icon: 'el-icon-picture' },
        { id: 5, title: '课程详情', icon: 'el-icon-picture' }
      ],
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
.el-step {
  cursor: pointer;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
