import request from '@/utils/request'

// 获取阿里云图片上传凭证和地址
export const aliyunImageUploadAddressAndAuth = () => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json'
  })
}
// 获取阿里云视频上传凭证和地址
export const aliyunVideoUploadAddressAndAuth = (params) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json',
    params
  })
}
// 阿里云转码请求
export const aliyunTransCode = (data) => {
  return request({
    method: 'POST',
    url: '/boss/course/upload/aliyunTransCode.json',
    data
  })
}
// 阿里转码进度请求
export const getAliyunTransCodePercent = (lessonId) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunTransCodePercent.json',
    params: {
      lessonId
    }
  })
}
