export interface BaseResponse<T> {
  status: boolean
  msg: string
  data: T
}
export interface Performance {
  id: null
  appId: 'www.baidu.com'
  url: null
  /** TCP连接耗时 */
  connectTime: number
  /** 发出页面请求到接收到应答数据第一个字节所花费的毫秒数 */
  ttfbTime: number
  /** 请求响应时间 */
  responseTime: number
  /** 解析DOM时间 */
  parseDOMTime: number
  /** DOMContentLoaded事件时间 */
  domContentLoadedTime: number
  domContentLoaded: number
  /** 完整的页面加载时间 */
  loadTime: number
  /** DNS解析时间 */
  parseDNSTime: number
  /** DOM准备总时间 */
  domReadyTime: number
  firstPaint: number
  /** 首次可交互时间 */
  timeToInteractive: number
  /** 首次有内容渲染 FCP */
  firstContentfulPaint: number
  /** 首次有意义渲染 FMP */
  firstMeaningfulPaint: number
  /** 最大可交互内容渲染时间 LCP */
  largestContentfulPaint: number
  userId: null
  time: null
}

export interface UVRes {
  tatalUV: number
  timeArr: number[]
}

export interface PVRes {
  tatalUV: number
  timeArr: number[]
}

interface ErrorItem {
  grade: number
  data: number[]
}
export interface ErrorRes {
  allGrade: number
  promiseError: ErrorItem
  jsError: ErrorItem
  resourceError: ErrorItem
}

export interface UserMonitor {
  id: number
  adminName: string
  appId: string
  appName: string
  appDesc: string
}

export type UserMonitorRes = UserMonitor[]
