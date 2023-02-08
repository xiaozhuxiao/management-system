import request from '@/utils/request'

// 获取阿里云视频上传凭证
export const aliyunVideoUploadAddressAdnAuth = (fileName) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json',
    params: {
      fileName
    }
  })
}
