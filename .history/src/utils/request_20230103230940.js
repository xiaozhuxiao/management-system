import axios from 'axios'

// create 创建 axios 实例
const request = axios.create({
  // timeout:请求超时
  // baseURL:基地址
  // headers:请求头
})

request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀,来进行请求baseURL 的设置
  config.baseURL = getBaseURL(config.url)
  console.log(config)
  return config
})

export default request
