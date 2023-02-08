<template>
  <div class="corrse-create">
    <el-card>
      <!-- 头部 -->
      <div slot="header">
        <el-steps :active="activeStep" simple>
          <el-step v-for="item in stops" :key="item.id" :title="item.title" :icon="item.icon"></el-step>
        </el-steps>
      </div>
      <!-- 步骤对应的表单结构 -->
      <el-form>
        <div v-show="activeStep === 0">基本信息</div>
        <div v-show="activeStep === 1">课程封面</div>
        <div v-show="activeStep === 2">销售信息</div>
        <div v-show="activeStep === 3">秒杀信息</div>
        <div v-show="activeStep === 4">课程详情</div>
        <!-- 下一步按钮 -->
        <el-form-item>
          <el-button v-if="activeStep !== stops.length - 1" @click="activeStep++">下一步</el-button>
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
      ]
    }
  }
}
</script>

<style></style>
