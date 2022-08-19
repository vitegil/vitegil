import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import colors from '@/style/color'
import { BarChart } from 'echarts/charts'

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  BarChart,
])

// 抛出对象,具名抛出
export const option_all = {
  title: {
    text: '加载计时/ms',
  },
  yAxis: {
    type: 'category',
    data: [
      'TCP连接耗时',
      'DNS解析',
      '请求响应',
      'DOM准备总时间',
      'DOM内容加载时间',
      '页面加载时间',
    ],
  },
  xAxis: {
    type: 'value',
  },
  series: [
    {
      label: {
        show: true,
        position: 'top',
        // valueAnimation: true
      },
      data: [120, 200, 150, 80, 70, 110],
      itemStyle: {
        color: (params: any) => {
          return (
            [
              colors.green.echarts,
              colors.pink.echarts,
              colors.yellow.echarts,
              colors.purple.echarts,
              colors.green.echarts,
              colors.blue.echarts,
            ][params.dataIndex] || colors.blue.echarts
          )
        },
      },
      type: 'bar',
    },
  ],
}
