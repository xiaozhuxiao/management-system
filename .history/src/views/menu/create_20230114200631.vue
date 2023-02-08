<template>
  <div class="menu-create"></div>
</template>

<script>
import { getEditMenuInfo, createOrUpdateMenu } from '@/services/menu'

export default {
  name: 'MenuCreate',
  data() {
    return {
      form: {
        parentId: -1,
        name: '',
        href: '',
        icon: '',
        orderNum: 0,
        description: '',
        shown: false
      },
      // 存储上级菜单数据
      parentMenuList: []
    }
  },
  created() {
    // 加载上级菜单信息
    this.loadMenuInfo()
  },
  methods: {
    async onSubmit() {
      // 提交功能
      // 1.表单验证
      // 2.发送请求
      const { data } = await createOrUpdateMenu(this.from)
      if (data.code === '000000') {
        this.$message.success('提交成功')
        this.$router.push({
          name: 'menu'
        })
      }
    },
    async loadMenuInfo() {
      // 请求菜单数据(上级菜单数据)
      const { data } = await getEditMenuInfo()
      if (data.code === '000000') {
        // 将上级菜单数据保存,进行数据绑定
        this.parentMenuList = data.data.parentMenuList
      }
    }
  }
}
</script>

<style></style>
