export interface BaseResponse<T> {
  status: boolean
  msg: string
  data: T
}
export interface Performance {
  /** 首次可交互时间 */
  timeToInteractive: number
  /** 发出页面请求到接收到应答数据第一个字节所花费的毫秒数 */
  timeTottfbTime: number
  /** 解析DOM时间 */
  parseDOMTime: number
  /** 首次有内容渲染 FCP */
  firstContentfulPaint: number
  /** 首次有意义渲染 FMP */
  firstMeaningfulPaint: number
  /** 最大可交互内容渲染时间 LCP */
  largestContentfulPaint: number

  /** 完整的页面加载时间 */
  loadTime: number
  /** DOMContentLoaded事件时间 */
  domContentLoadedTime: number
  /** DOM准备总时间 */
  domReadyTime: number
  /** 请求响应时间 */
  responseTime: number
  /** DNS解析时间 */
  parseDNSTime: number
  /**  TCP连接耗时 */
  connectTime: number
  //    umber domContentLoaded;//DOMContentLoaded时间
  //          number firstPaint;//页面首次渲染时间，即白屏时间
  //        String userId;//用uuid精准定位每个用户，指纹信息
  //      Timestamp time;//时间戳
}

export interface UserMonitor {
  date: string
  name: string
  address: string
}

export interface UVRes {
  tatalUV: number
  timeArr: number[]
}

export interface PVRes {
  tatalUV: number
  timeArr: number[]
}
