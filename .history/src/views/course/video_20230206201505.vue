<template>
  <div class="course-video">
    <el-card>
      <div slot="header">
        <el-input v-model="input" placeholder="请输入内容" label="" style="padding: 10px 0"></el-input>
        <el-input v-model="input" placeholder="请输入内容" label="" style="padding: 10px 0"></el-input>
      </div>
    </el-card>
    <el-form>
      <el-form-item label="视频上传">
        <input type="file" ref="video-file" />
      </el-form-item>
      <el-form-item label="封面上传">
        <input type="file" ref="image-file" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleUpload">开始上传</el-button>
        <el-button
          @click="
            $router.push({
              name: 'course-section',
              params: {
                courseId
              }
            })
          "
          >返回</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CourseVideo',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.initUploader()
  },
  methods: {
    handleUpload() {
      const videoFile = this.$refs['video-file'].files[0]
      const imageFile = this.$refs['image-file'].files[0]
      const uploader = this.uploader
      // 将要上传的文件添加到上传列表中
      uploader.addfile(imageFile)
      uploader.addfile(videoFile)
    },
    initUploader() {
      this.uploader = new AliyunUpload.Vod({
        // userID，必填，您可以使用阿里云账号访问账号中心（https://account.console.aliyun.com/），即可查看账号ID
        userId: '1618139964448584',
        // 上传到视频点播的地域，默认值为'cn-shanghai'，
        // eu-central-1，ap-southeast-1
        region: '',
        // 分片大小默认1 MB，不能小于100 KB（100*1024）
        partSize: 1048576,
        // 并行上传分片个数，默认5
        parallel: 5,
        // 网络原因失败时，重新上传次数，默认为3
        retryCount: 3,
        // 网络原因失败时，重新上传间隔时间，默认为2秒
        retryDuration: 2,
        // 开始上传
        onUploadstarted: function (uploadInfo) {},
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {},
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {},
        // 文件上传进度，单位：字节
        onUploadProgress: function (uploadInfo, totalSize, loadedPercent) {},
        // 上传凭证或STS token超时
        onUploadTokenExpired: function (uploadInfo) {},
        // 全部文件上传结束
        onUploadEnd: function (uploadInfo) {}
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
