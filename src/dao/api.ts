import type { Performance } from './type'
import http from '@/dao/http.config'

// 登录
export const loginApi = async (params: {
  account: string
  password: string
}): Promise<boolean> => {
  try {
    const res = await http.request<{
      data: string
      msg: string
      status: boolean
    }>({
      method: 'post',
      url: 'admin/login',
      // `data` 是作为请求体被发送的数据
      data: {
        data: params,
      },
    })
    return res.data.status
  }
  catch (error) {
    console.log(error)
    return false
  }
}

// 用户行为检测-UV/PU
export const pvApi = async () => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'pv/getPV',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}

export const uvApi = async () => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'pv/getUV',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}

// 异常三种异常
export const errorApi = async () => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'error/gerError',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}

// 性能
export const performanceApi = async (): Promise<Performance | false> => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'performance/getPerformance',
      // params: { appId: 'www.baidu.cn' },
    })
    return res.data
  }
  catch (error) {
    console.log(error)
    return false
  }
}

// 用户监控
export const addAppApi = async (appName: string, appId: string) => {
  try {
    const res = await http.request({
      method: 'post',
      url: 'app/addApp',
      data: { name: appName, url: appId },
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}

export const getAppApi = async () => {
  try {
    const res = await http.request({
      method: 'app/getApp',
      url: 'getApp',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}
