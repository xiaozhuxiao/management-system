<template>
  <div class="alloc-menu">这是角色 ID 为：{{}}</div>
</template>

<script>
export default {
  name: 'AllocMenu',
  props: {
    roleId: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style></style>
