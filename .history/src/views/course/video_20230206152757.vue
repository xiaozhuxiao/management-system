<template>
  <div class="course-video">
    <el-card>
      <div slot="header">课程相关信息</div>
    </el-card>
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
