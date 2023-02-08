<template>
  <div class="course-video">上传课时视频</div>
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
