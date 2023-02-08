<template>
  <div class="text-editor" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'TextEditor',
  mounted() {
    this.instEditor()
  }
}
</script>

<style></style>
