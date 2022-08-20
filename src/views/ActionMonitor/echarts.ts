import * as echarts from 'echarts/core'
import type {
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'
import type { LineSeriesOption } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import colors from '@/style/color'

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>

const defaultOption: EChartsOption = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['PV', 'UV'],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'PV',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: colors.green.echarts,
      },
      emphasis: {
        focus: 'series',
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: 'UV',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: colors.blue.echarts,
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    // {
    //   name: 'Line 3',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0,
    //   },
    //   showSymbol: false,
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(55, 162, 255)',
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(116, 21, 219)',
    //       },
    //     ]),
    //   },
    //   emphasis: {
    //     focus: 'series',
    //   },
    //   data: [320, 132, 201, 334, 190, 130, 220],
    // },
    // {
    //   name: 'Line 4',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0,
    //   },
    //   showSymbol: false,
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(255, 0, 135)',
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(135, 0, 157)',
    //       },
    //     ]),
    //   },
    //   emphasis: {
    //     focus: 'series',
    //   },
    //   data: [220, 402, 231, 134, 190, 230, 120],
    // },
    // {
    //   name: 'Line 5',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0,
    //   },
    //   showSymbol: false,
    //   label: {
    //     show: true,
    //     position: 'top',
    //   },
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(255, 191, 0)',
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(224, 62, 76)',
    //       },
    //     ]),
    //   },
    //   emphasis: {
    //     focus: 'series',
    //   },
    //   data: [220, 302, 181, 234, 210, 290, 150],
    // },
  ],
}

// 抛出函数
export default (option?: Partial<EChartsOption>) => {
  return {
    ...defaultOption,
    ...option,
  }
}
