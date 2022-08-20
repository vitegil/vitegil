import * as echarts from 'echarts/core'

export interface BaseOption {
  /** 图表表题 */
  title: string,
  /** 图表副表题 */
  subTitle: string,
  /** 坐标刻度文本 */
  labels: string[],
  /** 图表数据(组) */
  datas: number[],
  /** 图表数据 */
  data: number,
  /** 图表主要颜色 */
  color: echarts.graphic.LinearGradient
  /** 图表各柱颜色 */
  colors: echarts.graphic.LinearGradient[],
}