<template>
  <div class="text-editor" ref="editor"></div>
</template>

<script>
import E from 'wangeditor'
import { uploadCourseImage } from '@/services/course'
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
      // 配置自定义图片上传功能
      editor.config.customUploadImg = (resultFiles, insertImgFn) => {
        const fd = new FormData()
        fd.$append('file', resultFiles[0])
      }
      editor.create()
      editor.txt.html(this.value)
    }
  }
}
</script>

<style></style>
