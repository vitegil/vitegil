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
import { ref, watch } from 'vue'
import { timeArr } from './data'
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
// Array<number> 等价 number[]，数字类型的数组。不等[number]指长度为1的数字且为number
const echartModel = (
  uvData: Array<number>,
  pvData: number[],
): EChartsOption => {
  return {
    title: {
      text: '流量数据趋势图',
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
      data: ['UV', 'PV'],
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
        // 小时
        data: Array(24)
          .fill(0)
          .map((value, index) => `${index}:00`),
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
        data: pvData,
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
        data: uvData,
      },
    ],
  }
}

export const option = ref(echartModel(timeArr.uv, timeArr.pv))
watch(timeArr, () => {
  option.value = echartModel(timeArr.uv, timeArr.pv)
})
