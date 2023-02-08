<template>
  <div class="course-section">
    <el-card>
      <el-button type="primary" style="padding-right: 10px">+ 添加阶段</el-button>
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
        children: 'lessonDTOS',
        label(data) {
          // data 是章节或课时的时候,label 的属性名不同,需要检测后使用
          return data.sectionName || data.theme
        }
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
