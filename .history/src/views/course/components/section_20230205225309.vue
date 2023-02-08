<template>
  <div class="course-section">
    <el-card>
      <el-button type="primary" style="float: right">+ 添加阶段</el-button>
      <el-tree :data="sections" :props="defaultProps" @node-click="handleNodeClick" draggable>
        <div class="inner" slot-scope="{ node, data }">
          <!-- 内容设置 -->
          <span>{{ node.label }}</span>
          <!-- 后续按钮结构 -->
          <span v-if="data.sectionName" class="actions">
            <el-button>编辑</el-button>
            <el-button>添加课时</el-button>
            <el-button>状态</el-button>
          </span>
          <span v-else class="actions">
            <el-button>编辑</el-button>
            <el-button>上传视频</el-button>
            <el-button>状态</el-button>
          </span>
        </div>
      </el-tree>
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

<style lang="scss" scoped>
.inner {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
::v-deep .el-tree-node__content {
  height: auto;
}
</style>
