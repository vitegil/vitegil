import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import colors from '@/constant/color'
import { BarChart } from 'echarts/charts'
// import { color } from 'echarts'

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  BarChart,
])

// 抛出对象,具名抛出
export const optionA = {
  title: {
    text: 'JS错误趋势（js-error）',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: colors.green.echarts,
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {},
      smooth: true
    },
  ],
}

export const optionB = {
  title: {
    text: '静态资源错误趋势（resource-error）',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: colors.yellow.echarts,
  series: [
    {
      data: [82, 92, 91, 34, 290, 130, 320],
      type: 'line',
      areaStyle: {},
      smooth: true
    },
  ],
}

export const optionC = {
  title: {
    text: 'Promise错误趋势（promise-error）',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: colors.pink.echarts,
  series: [
    {
      data: [82, 92, 91, 34, 290, 130, 320],
      type: 'line',
      areaStyle: {},
      smooth: true
    },
  ],
}

export const optionD = {
  title: { text: '自定义异常趋势（click-event）' },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: colors.blue.echarts,
  series: [
    {
      data: [82, 92, 91, 34, 290, 130, 320],
      type: 'line',
      areaStyle: {},
      smooth: true
    },
  ],
}
