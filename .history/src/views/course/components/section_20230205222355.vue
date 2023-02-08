<template>
  <div class="course-section">
    <el-card>
      <el-tree :data="sections" :props="defaultProps" @node-click="handleNodeClick" draggable> </el-tree>
    </el-card>
  </div>
</template>

<script>
import { getSectionAndLesson } from '@/services/course-section'
export default {
  name: 'CourseSection',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.loadSection()
  },
  data() {
    return {
      // 章节信息
      sections: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    async loadSection() {
      const { data } = await getSectionAndLesson(this.courseId)
      if (data.code === '000000') {
        this.sections = data.data
      }
    }
  }
}
</script>

<style></style>
