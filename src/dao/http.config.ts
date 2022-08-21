/**
 * @file 创建axios实例/网络请求的工具,拦截器、公共地址等基础配置
 */

import axios from 'axios'

const http = axios.create({
  // 需要改
  baseURL: 'http://localhost:10002/api',
  timeout: 1000,
})

export default http

// import axios from 'axios'
// const instance = axios.create({})
// 拦截器
// instance.interceptors.request.use(config => {
//   return config
// })
// instance.interceptors.response.use(response => {
//   return response
// })
// export default instance
