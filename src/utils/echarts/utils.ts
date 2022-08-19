import * as echarts from 'echarts/core'

/**
 * 获取 echarts 图表中，各数据 UI 颜色不同时的颜色组
 * 例如，在柱状图中，需要每个柱状图的颜色不同
 */
export const getColorGroup =
  (colors: echarts.graphic.LinearGradient[]) =>
  (params: { dataIndex: number }) => {
    while (params.dataIndex >= colors.length) {
      params.dataIndex -= colors.length
    }
    return colors[params.dataIndex]
  }
