<template>
  <div class="corrse-create">
    <el-card>
      <div slot="header">
        <el-steps :active="activeStep" simple>
          <el-step title="基本信息" icon="el-icon-edit"></el-step>
          <el-step title="课程封面" icon="el-icon-upload"></el-step>
          <el-step title="销售信息" icon="el-icon-picture"></el-step>
          <el-step title="秒杀信息" icon="el-icon-picture"></el-step>
          <el-step title="课程详情" icon="el-icon-picture"></el-step>
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
        {
          id: 1
        }
      ]
    }
  }
}
</script>

<style></style>
