import axios from 'axios'

// create 创建 axios 实例
const request = axios.create({
  // timeout:请求超时
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

request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀,来进行请求baseURL 的设置
  config.baseURL = getBaseURL(config.url)
  console.log(config)
  return config
})

export default request
