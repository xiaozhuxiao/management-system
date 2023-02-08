<template>
  <div class="course-image">
    <el-form-item label="课程封面">
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :http-request="handleUpload">
        <!-- img 为预览图片的显示位置 -->
        <img v-if="course.courseListImg" :src="course.courseListImg" class="avatar" />
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
</template>

<script>
export default {
  name: 'CourseImage'
}
</script>

<style lang="scss" scoped></style>
