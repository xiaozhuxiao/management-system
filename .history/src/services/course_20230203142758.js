import request from '@/utils/request'

// 分页查询课程信息
export const getQueryCourses = (data) => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}

// 课程上下架
export const changeState = (params) => {
  return request({
    method: 'GET',
    url: '/boss/course/changeState',
    params
  })
}

// 保存或更新课程信息接口
export const saveOrUpdateCourse = (data) => {
  return request({
    method: 'POST',
    url: '/boss/course/saveOrUpdateCourse',
    data
  })
}

// 上传图片接口
export const uploadCourseImage = (data,onUploadProgress) => {
  // data 应当为 FormData 对象
  return request({
    method: 'POST',
    url: '/boss/course/upload',
    data,
    // onUploadProgress 用于检测上传进度
    onUploadProgress
    }
  })
}
