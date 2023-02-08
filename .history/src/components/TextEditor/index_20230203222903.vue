<template>
  <div class="text-editor" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'TextEditor',
  mounted() {
    this.instEditor()
  },
  methods: {
    instEditor() {
      const editor = new E(this.$refs.editor)
      this.course
    }
  }
}
</script>

<style></style>
