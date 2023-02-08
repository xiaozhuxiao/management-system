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
        <!-- 基本信息 -->
        <div v-show="activeStep === 0">
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
            <el-input-number label="描述文字" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </div>
        <!-- 课程封面 -->
        <div v-show="activeStep === 1">
          <el-form-item label="课程封面">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="解锁封面">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>
        <!-- 销售信息 -->
        <div v-show="activeStep === 2">
          <el-form-item label="售卖价格">
            <el-input placeholder="请输入内容">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="商品原价">
            <el-input placeholder="请输入内容">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="销量">
            <el-input placeholder="请输入内容">
              <template slot="append">单</template>
            </el-input>
          </el-form-item>
          <el-form-item label="活动标签">
            <el-input placeholder="请输入内容"> </el-input>
          </el-form-item>
        </div>
        <!-- 秒杀信息 -->
        <div v-show="activeStep === 3">
          <el-form-item label="限时秒杀开关" label-width="120px">
            <el-switch v-model="isSeckill" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
          <template v-if="isSeckill"> <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"> </el-date-picker> </template>
        </div>
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
      // 本地预览图片地址
      imageUrl: '',
      // 秒杀状态
      isSeckill: false
    }
  },
  methods: {
    // 上传图片成功回调
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传前的回调
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg/'
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
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
::v-deep .avatar-uploader .el-upload:hover {
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
