import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入 store
import store from '@/store'

// 引入路由中需要使用的组件功能
// import Login from '@/views/login/index'
// import Layout from '@/views/layout/index'
// import Home from '@/views/home/index'
// import Role from '@/views/role/index'
// import Menu from '@/views/menu/index'
// import Resource from '@/views/resource/index'
// import User from '@/views/user/index'
// import Advert from '@/views/advert/index'
// import AdvertSpace from '@/views/advert-space/index'
// import ErrorPage from '@/views/error-page/index'
// import Course from '@/views/course/index'

Vue.use(VueRouter)

// 路由规则（添加需要认证的 requiresAuth 信息）
const routes = [
  {
    path: '/login',
    name: 'login',
    // 路由懒加载模式 () => import('./xxx/xxx/xxx.vue')
    component: () => import(/* webpackChunkName:'login' */ '@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName:'layout' */ '@/views/layout/index'),
    // 直接给某个路由设置，这时内部的子路由都需要认证（包含当前路由）
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName:'home' */ '@/views/home/index')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName:'role' */ '@/views/role/index')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName:'advert' */ '@/views/advert/index')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName:'menu' */ '@/views/menu/index')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName:'resource' */ '@/views/resource/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/index')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName:'advert-space' */ '@/views/advert-space/index')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName:'course' */ '@/views/course/index')
      },
      // 添加菜单路由组件
      {
        path: '/menu/create',
        name: 'menu-create',
        component: () => import(/* webpackChunkName:'menu-create' */ '@/views/menu/create')
      },
      // 编辑菜单路由组件
      {
        path: '/menu/:id/edit',
        name: 'menu-edit',
        component: () => import(/* webpackChunkName:'menu-edit' */ '@/views/menu/edit')
      },
      // 分配菜单路由组件
      {
        path: '/role/roleId/alloc-menu',
        name: 'alloc-menu',
        component: () => import(/* webpackChunkName:'alloc-menu' */ '@/views/role/alloc-menu')
        props:true
      }
    ]
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName:'error-page' */ '@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // 验证 to 路由是否需要进行身份认证
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // 验证 Vuex 的 store 中的登录用户信息是否存储
    if (!store.state.user) {
      // 未登录，跳转到登录页
      return next({
        name: 'login',
        query: {
          // 将本次路由的 fullPath 传递给 login 页面
          redirect: to.fullPath
        }
      })
    }
    // 已登录，允许通过
    next()
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
