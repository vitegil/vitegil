import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { env, storageKey } from '@/constants'

const monitorRoutes: RouteRecordRaw[] = [
  {
    name: 'ActionMonitor',
    path: '/action-monitor',
    component: () => import('@/views/ActionMonitor/index.vue'),
  },
  {
    name: 'ExceptionMonitor',
    path: '/exception-monitor',
    component: () => import('@/views/ExceptionMonitor/index.vue'),
  },
  {
    name: 'PerformanceMonitor',
    path: '/performance-monitor',
    component: () => import('@/views/PerformanceMonitor/index.vue'),
  },
  {
    name: 'UserMonitorList',
    path: '/user-monitor-list',
    component: () => import('@/views/UserMonitorList/index.vue'),
  },
]

export const fullScreenRoutes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/',
    component: () => import('@/views/Login/index.vue'),
  },
]

if (env.isDev) {
  fullScreenRoutes.push({
    name: 'Demo',
    path: '/demo',
    component: () => import('@/views/Demo/index.vue'),
    children: monitorRoutes,
  })
}

const router = createRouter({
  history: createWebHistory(),
  routes: [...fullScreenRoutes, ...monitorRoutes],
})

router.beforeEach((to, from, next) => {
  // 暂时使用 appId 表示登录状态
  const isLogined = localStorage.getItem(storageKey.appId)
  // 如果已登陆，放行
  if (isLogined) {
    next()
    return
  }
  // 如果未登录，但目标路由是 public 页面，放行
  if (fullScreenRoutes.find(item => item.path === to.path)) {
    next()
    return
  }
  // 如果未登录，且目标路由不是 public 页面，跳转到登录页
  next({ name: 'Login' })
})

export default router
