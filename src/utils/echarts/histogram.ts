import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { getColorGroup } from './utils'
import { BaseOption } from './type'

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  BarChart,
])

type IOption = Pick<BaseOption, 'title' | 'colors' | 'labels' | 'datas'> & {
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
}: IOption) => {
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
          position: 'top',
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
