<template>
  <div class="course-create">
    <create-or-edit></create-or-edit>
  </div>
</template>

<script>
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'CourseCreate',
  props: {
    courseId: {
      type: [Number, String],
      required: true
    }
  },
  components: {
    CreateOrEdit
  }
}
</script>

<style></style>
