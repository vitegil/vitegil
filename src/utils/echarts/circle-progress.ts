import * as echarts from 'echarts/core'
import type {
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import {
  TooltipComponent,
} from 'echarts/components'
import type { PieSeriesOption } from 'echarts/charts'
import { PieChart } from 'echarts/charts'
import type { BaseOption } from './type'

echarts.use([TooltipComponent, PieChart])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>

export type CircleProgressOptionProps = Pick<BaseOption, 'title' | 'subTitle' | 'data' | 'color'> & {
  /** 圆环宽度 */
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  /** 标题垂直位置 */
  y?: string
}

export const getCircleProgressOption = ({
  title,
  subTitle,
  data,
  color,
  width = 2,
  y = '35%',
}: CircleProgressOptionProps): EChartsOption => {
  return {
    title: {
      text: title,
      textStyle: {
        fontSize: 30,
      },
      subtext: subTitle,
      // @ts-expect-error
      x: 'center',
      y,
    },
    tooltip: {
      show: false,
    },
    series: {
      type: 'pie',
      radius: [`${10 - width}0%`, '100%'], // 环的宽度
      center: ['50%', '50%'],
      // @ts-expect-error
      hoverAnimation: false, // 去除鼠标hover动画
      label: {
        show: false,
      },
      data: [
        {
          value: data,
          itemStyle: {
            color,
          },
        },
        {
          value: 100 - data,
          itemStyle: {
            color: '#eeeeee',
          },
        },
      ],
    },
  }
}
