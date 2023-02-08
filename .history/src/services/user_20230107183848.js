import request from '@/utils/request'
import qs from 'qs'

// 用户登录接口
export const login = (data) => {
  return request({
    method: 'POST',
    // headers: { 'content-type': 'application/-x-www-form-urlencoded' },
    url: '/front/user/login',
    // urlencoded 格式:  名=值&名=值...
    data: qs.stringify(data)
  })
}
