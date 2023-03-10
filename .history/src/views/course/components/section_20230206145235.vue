<template>
  <div class="course-section">
    <el-card>
      <el-tree :data="sections" :props="defaultProps" @node-click="handleNodeClick" draggable :allow-drop="handleAllowDrop" @node-deop="handleNodeDrop">
        <div class="inner" slot-scope="{ node, data }">
          <!-- 内容设置 -->
          <span>{{ node.label }}</span>
          <!-- 后续按钮结构 -->
          <span v-if="data.sectionName" class="actions">
            <el-button>编辑</el-button>
            <el-button type="primary ">添加课时</el-button>
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
import { getSectionAndLesson, saveOrUpdateSection, saveOrUpdateLesson } from '@/services/course-section'
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
    // 节点拖拽完毕后的处理函数
    async handleNodeDrop(draggingNode, dropNode, type, event) {
      try {
        // 由于有很多章节与课时,需要给每个章节与课时都进行最新的排序顺序的请求
        await Promise.all(
          dropNode.parent.childNodes.map((item, index) => {
            // 判断当前是章节还是课时,再给对应接口发送请求即可
            if (draggingNode.data.sectionId) {
              // 课时接口处理
              return saveOrUpdateSection({
                id: item.data.id,
                orderNum: index
              })
            } else {
              // 章节接口处理
              return saveOrUpdateLesson({
                id: item.data.id,
                orderNum: index
              })
            }
          })
        )
        this.$message.success('数据更新成功')
      } catch (err) {
        this.$message.error('shuju更新失败', err)
      }
    },
    // 节点拖拽处理函数
    handleAllowDrop(draggingNode, dropNode, type) {
      // 规则1:只能统计移动,type 不能为 'inner'
      // 规则2:课时不能移动到其他章节中
      return type !== 'inner' && draggingNode.data.sectionId === dropNode.data.sectionId
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
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
}
::v-deep .el-tree-node__content {
  height: auto;
}
</style>
