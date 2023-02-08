<template>
  <div class="corrse-create">
    <el-card>
      <div slot="header">
        <el-steps :active="activeStep" simple>
          <el-step v-for="item in stops" :key="item.id"></el-step>
        </el-steps>
      </div>
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
        { id: 1, title: '基本信息',icon='el-icon-edit' },
        { id: 2, title: '课程封面',icon='el-icon-upload' },
        { id: 3, title: '销售信息',icon='el-picture' },
        { id: 4, title: '秒杀信息',icon='el-picture' },
        { id: 5, title: '课程详情',icon='picture' }
      ]
    }
  }
}
</script>

<style></style>
