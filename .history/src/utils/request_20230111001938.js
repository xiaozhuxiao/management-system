import axios from 'axios'

// 引入 Vuex 的数据
import store from '@/store'

// 通过局部引入方式引入 Element 的 Message 组件功能
import { massage } from 'element-ui'

// create 创建 axios 实例
const request = axios.create({
  // timeout:请求超时
  timeout: 2000
  // baseURL:基地址
  // headers:请求头
})

function getBaseURL(url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    return 'http://edufront.lagounews.com'
  }
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀,来进行请求baseURL 的设置
  config.baseURL = getBaseURL(config.url)

  // 统一设置 Token 信息
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }

  return config
})

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 状态码 2xx 会执行这里
    console.log('响应成功:', response)
    return response
  },
  function (error) {
    if (error.response) {
      // 请求发送成功,响应接收完毕,但状态码为失败的情况
      // 1.判断失败的状态码情况(主要处理 401 的情况)
      const { status } = error.response
      let errorMessage = ''
      if (status === 400) {
        errorMessage = '请求参数错误'
      } else if (status === 401) {
        // 2.Token 无效 (过期) 处理
        errorMessage = 'Token 无效'
      } else if (status === 403) {
        // 2.Token 无效 (过期) 处理
        errorMessage = '没有权限,请联系管理员'
      } else if (status === 404) {
        // 2.Token 无效 (过期) 处理
        errorMessage = '请求资源不存在'
      } else if (status >= 500) {
        // 2.Token 无效 (过期) 处理
        errorMessage = '服务端错误,请联系系管理员'
      }
      massage.error(errorMessage)
    } else if (error.request) {
      // 请求发送成功,但是未收到响应
      massage.error('请求超时,请重试')
    } else {
      // 意料之外的错误
      massage.error(error.message)
    }
    // 将本次请求的错误对象继续向后抛出,让接受响应的处理函数进行操作
    return Promise.reject(error)
  }
)

export default request
