<template>
  <div class="menu-create">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加菜单</span>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="菜单名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="菜单路径">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="上级菜单">
            <el-select v-model="form.parentId" placeholder="请选择上级菜单">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="前端图标">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否显示">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="排序">
            <el-input-number v-model="form.date1" :min="0" :max="10" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MenuCreate',
  data() {
    return {
      form: {
        parentId: 1,
        name: '',
        href: '',
        icon: '',
        orderNum: 5,
        description: '',
        shown: true
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style></style>
