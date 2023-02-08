import request from '@/utils/request'

// 通过课程 ID 获取课程信息接口
export const getSectionAndLesson = (courseId) => {
  return request({
    method: 'GET',
    url: '/boss/course/section/getSectionAndLesson',
    params: { courseId }
  })
}
