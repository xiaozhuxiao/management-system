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
      // 创建富文本编辑器之前,进行事件设置
      editor.config.onchange = (value) => {
        this.$emit('input', value)
      }
      editor.create()
      editor.txt.html(this.value)
    }
  }
}
</script>

<style></style>
