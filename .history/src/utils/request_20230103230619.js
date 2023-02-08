import axios from 'axios'

// create 创建 axios 实例
const request = axios.create({
  // timeout:请求超时
  // baseURL:基地址
  // headers:请求头
})

request.interceptors.request.use(function (config) {
  return config
})

export default request
