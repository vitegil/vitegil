import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const monitorRoutes: RouteRecordRaw[] = [
  {
    name: 'ActionMonitor',
    path: '/',
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
export default createRouter({
  history: createWebHistory(),
  routes: [...monitorRoutes],
})
