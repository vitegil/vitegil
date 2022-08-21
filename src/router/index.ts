import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

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
  {
    name: 'Demo',
    path: '/demo',
    component: () => import('@/views/Demo/index.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: [...fullScreenRoutes, ...monitorRoutes],
})
