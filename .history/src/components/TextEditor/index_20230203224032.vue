<template>
  <div class="text-editor" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'TextEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.instEditor()
  },
  methods: {
    instEditor() {
      const editor = new E(this.$refs.editor)
      editor.create()
      editor.txt.html(this.value)
    }
  }
}
</script>

<style></style>
