/**
 * @file 创建axios实例/网络请求的工具,拦截器、公共地址等基础配置
 */
import axios from 'axios'
import { storageKey } from '@/constants'
import { close, start } from '@/utils/nprogress'

const http = axios.create({
  // 需要改
  baseURL: '/api',
  timeout: 1000,
})

// 拦截器，login收到appId统一添加params
http.interceptors.request.use(
  (config) => {
    // 开始加载-进度条开始
    start()

    const appId = localStorage.getItem(storageKey.appId)
    if (!appId) {
      console.log('无appId')
      return config
    }

    config.params = {
      appId,
      ...config.params,
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// 监听是否有appId随时发出，实时更新
http.interceptors.response.use(
  (response) => {
    // 结束加载-进度条结束
    close()
    // appId 暂时固定
    // if (response?.data.includes('appId')) {
    //   localStorage.setItem('appId', response.data.appId)
    //   console.log('存入LocalStorage:', localStorage)
    // }
    return response
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default http
