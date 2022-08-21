import type { BaseResponse, ErrorRes, PVRes, Performance, UVRes } from './type'
import http from '@/dao/http.config'

// 登录
export const loginApi = async (params: {
  account: string
  password: string
}): Promise<boolean> => {
  try {
    const res = await http.request<BaseResponse<string>>({
      method: 'post',
      url: 'admin/login',
      // `data` 是作为请求体被发送的数据
      data: {
        data: params,
      },
    })
    return res.data.status
  } catch (error) {
    console.log(error)
    return false
  }
}

// 用户行为检测-UV/PU
export const pvApi = async (): Promise<PVRes | false> => {
  try {
    const res = await http.request<BaseResponse<PVRes>>({
      method: 'get',
      url: 'pv/getPV',
    })
    return res?.data?.data
  } catch (error) {
    console.log(error)
    return false
  }
}

export const uvApi = async (): Promise<UVRes | false> => {
  try {
    const res = await http.request<BaseResponse<UVRes>>({
      method: 'get',
      url: 'device/getUV',
    })
    return res?.data?.data
  } catch (error) {
    console.log(error)
    return false
  }
}

// 异常三种异常
export const errorApi = async (): Promise<ErrorRes | false> => {
  try {
    const res = await http.request<BaseResponse<ErrorRes>>({
      method: 'get',
      url: '/error/gerError',
    })
    return res?.data?.data
  } catch (error) {
    console.log(error)
    return false
  }
}

// 性能
export const performanceApi = async (): Promise<Performance | false> => {
  try {
    const res = await http.request<BaseResponse<Performance>>({
      method: 'get',
      url: 'performance/getPerformance',
    })
    return res.data.data
  } catch (error) {
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
  } catch (error) {
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
  } catch (error) {
    console.log(error)
  }
}
