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
  data() {
    return {
      editor:{
        null
      }
    }
  },
  methods: {
    instEditor() {
      const editor = new E(this.$refs.editor)
      // 创建富文本编辑器之前,进行事件设置
      editor.config.onchange = (value) => {
        this.$emit('input', value)
      }
      // 配置自定义图片上传功能
      editor.config.customUploadImg = async (resultFiles, insertImgFn) => {
        const fd = new FormData()
        fd.append('file', resultFiles[0])
        const { data } = await uploadCourseImage(fd)
        if (data.code === '000000') {
          // 通过 insertImgFn 传回给富文本编辑器进行显示
          insertImgFn(data.data.name)
        }
      }
      editor.create()
      editor.txt.html(this.value)
      this.editor = editor
    }
  },
  watch:{
    value(){

    }
  }
}
</script>

<style></style>
