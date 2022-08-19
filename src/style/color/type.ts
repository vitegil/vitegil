import * as echarts from 'echarts/core'

export interface Color {
  /** 供 Echarts 使用的颜色 */
  echarts: echarts.graphic.LinearGradient
  /** 供 windi 使用的背景色（会自动判断明暗，添加前景色） */
  bg: string
  /** 供 windi 使用的字体颜色 */
  text: string
}