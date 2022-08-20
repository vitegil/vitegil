import * as echarts from 'echarts/core'
import {
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import { BaseOption } from './type'

echarts.use([TooltipComponent, PieChart])

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>

type IOption = Pick<BaseOption, 'title' | 'subTitle' | 'data' | 'color'> & {
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
}: IOption): EChartsOption => {
  return {
    title: {
      text: title,
      textStyle: {
        fontSize: 30,
      },
      subtext: subTitle,
      // @ts-ignore
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
      // @ts-ignore
      hoverAnimation: false, // 去除鼠标hover动画
      label: {
        show: false,
      },
      data: [
        {
          value: data,
          itemStyle: {
            color: color,
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
