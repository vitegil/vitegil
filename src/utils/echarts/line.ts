import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { BaseOption } from './type'

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  BarChart,
])

export type LineOptionProps = Pick<
  BaseOption,
  'title' | 'color' | 'labels' | 'datas'
>

/**
 * 获取曲线图的配置项
 */
export const getLineOption = ({
  title,
  color,
  labels,
  datas,
}: LineOptionProps) => ({
  title: {
    text: title,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: labels,
  },
  yAxis: {
    type: 'value',
  },
  color,
  series: [
    {
      data: datas,
      type: 'line',
      areaStyle: {}, // 是否填充面积
      smooth: true,
    },
  ],
})
