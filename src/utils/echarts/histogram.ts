import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { getColorGroup } from './utils'
import type { BaseOption } from './type'

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  BarChart,
])

export type HistogramOptionProps = Pick<
  BaseOption,
  'title' | 'colors' | 'labels' | 'datas'
> & {
  /** 是否横向显示柱状图（默认纵向） */
  isHorizontal?: boolean
}

/**
 * 获取柱状图的配置项
 */
export const getHistogramOption = ({
  title,
  labels,
  datas,
  colors,
  isHorizontal = false,
}: HistogramOptionProps) => {
  const dataAxis = {
    type: 'value',
  }
  const labelAxis = {
    type: 'category',
    data: labels,
  }
  const axiss = isHorizontal
    ? {
        xAxis: dataAxis,
        yAxis: labelAxis,
      }
    : {
        xAxis: labelAxis,
        yAxis: dataAxis,
      }
  return {
    title: {
      text: title,
    },
    ...axiss,
    series: [
      {
        label: {
          show: true,
          position: 'right',
          // valueAnimation: true
        },
        data: datas,
        itemStyle: {
          color: getColorGroup(colors),
        },
        type: 'bar',
      },
    ],
  }
}
