<template>
  <div class="corrse-create">
    <el-card>
      <div slot="header">
        <el-steps :active="1" simple>
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CorrseCreate'
}
</script>

<style></style>
