import axios from 'axios'

// 引入 Vuex 的数据
import store from '@/store'

// 通过局部引入方式引入 Element 的 Message 组件功能
import { Message } from 'element-ui'

// 引入 router
import router from '@/router'

// 引入 qs 用于进行请求参数处理
import qs from 'qs'

// create 创建 axios 实例
const request = axios.create({
  // timeout:请求超时
  // timeout: 2000
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

// 封装跳转登录页配置
function redirectLogin() {
  // 跳转到登录页
  router.push({
    name: 'login',
    query: {
      // currentRoute 就是存储了路由信息的对象
      redirect: router.currentRoute.fullPath
    }
  })
}

// 存储时候正在更新 token 的状态
const isRefreshing = false

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
      // 判断失败的状态码情况(主要处理 401 的情况)
      const { status } = error.response
      let errorMessage = ''
      if (status === 400) {
        errorMessage = '请求参数错误'
      } else if (status === 401) {
        // 1.无 token 信息
        if (!store.state.user) {
          // 跳转到登录页
          redirectLogin()
          return Promise.reject(error)
        }

        // 检测时候存在了正在刷新 token 的请求
        if (isRefreshing) {
          return
        }
        isRefreshing = true

        // 2.Token 无效 (过期) 处理
        // 发送请求,获取新的 access_token
        return request({
          method: 'POST',
          url: '/front/user/refresh_token',
          data: qs
            .stringify({
              refreshtoken: store.state.user.refresh_token
            })
            .then((res) => {
              // 刷新 token 失败
              if (res.data.state !== 1) {
                // 清除无效的用户信息
                store.commit('setUser', null)
                // 跳转到登录页
                redirectLogin()
                return Promise.reject(error)
              }
              // 刷新 token 成功
              // - 存储新的 token
              store.commit('setUser', res.data.content)
              // - 重新发送失败的请求
              // - error.config 本次失败的请求的配置对象
              return request(error.config)
            })
            .catch((err) => {
              console.log(err)
            })
        })
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
      Message.error(errorMessage)
    } else if (error.request) {
      // 请求发送成功,但是未收到响应
      Message.error('请求超时,请重试')
    } else {
      // 意料之外的错误
      Message.error(error.message)
    }
    // 将本次请求的错误对象继续向后抛出,让接受响应的处理函数进行操作
    return Promise.reject(error)
  }
)

export default request
