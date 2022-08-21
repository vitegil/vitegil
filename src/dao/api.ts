import http from '@/dao/http.config'

// 登录
export const loginApi = async (account: string, pwd: string) => {
  try {
    const res = await http.request({
      method: 'post',
      url: 'admin/login ',
      // `data` 是作为请求体被发送的数据
      data: {
        account,
        pwd,
      },
    })
    return res.status
  }
  catch (error) {
    console.log(error)
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
export const performanceApi = async () => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'performance/getPerformance',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}

// 用户监控
export const addAppApi = async (appName: string, appUrl: string) => {
  try {
    const res = await http.request({
      method: 'get',
      url: 'addApp',
      data: { name: appName, url: appUrl },
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
      method: 'get',
      url: 'getApp',
    })
    return res.data
  }
  catch (error) {
    console.log(error)
  }
}
