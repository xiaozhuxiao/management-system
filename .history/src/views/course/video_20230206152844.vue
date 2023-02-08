<template>
  <div class="course-video">
    <el-card>
      <div slot="header">课程相关信息</div>
    </el-card>
    <el-form>
      <el-form-item label="视频上传">
        <input type="file" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CourseVideo',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
