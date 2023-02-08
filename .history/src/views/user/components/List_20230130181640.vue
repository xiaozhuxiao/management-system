<template>
  <div class="user-list">
    <el-caed>
      <div slot="header">
        <el-form :inline="true" ref="filter-form" :model="filterParams">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="filterParams.phone"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="rangeDate">
            <el-date-picker v-model="filterParams.rangeDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"> </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-caed>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
