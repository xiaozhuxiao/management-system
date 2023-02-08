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
// 阿里云视频上传凭证
export const aliyunVideoUploadAddressAdnAuth = (params) => {
  return request({
    method: 'GET',
    url: '/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json',
    params: {
      fileName
    }
  })
}
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
