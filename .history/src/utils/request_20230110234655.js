import axios from 'axios'

// 引入 Vuex 的数据
import store from '@/store'

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
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    return Promise.reject(error)
  }
)

export default request
