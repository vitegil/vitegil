import * as echarts from 'echarts/core'
import { colors as linearGradients, genWindiClass } from '../../windi/linearGradient'

interface Color {
  echarts: echarts.graphic.LinearGradient
  windi: string
}

/**
 * 生成可供 echarts 和 windi 使用的颜色
 * @param startColor 开始颜色
 * @param endColor 结束颜色
 * @returns 
 */
const genLinearGradientColor = (
  startColor: string,
  endColor: string,
): Color => {
  const _startColor = startColor.replace(/\s*/g, '')
  const _endColor = endColor.replace(/\s*/g, '')
  return {
    echarts: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: _startColor,
      },
      {
        offset: 1,
        color: _endColor,
      },
    ]),
    windi: `bg-gradient-to-l ${genWindiClass(_startColor, _endColor)}`,
  }
}

const colors = {
  ...Object.keys(linearGradients).reduce<Record<string, Color>>((acc, key) => {
    acc[key] = genLinearGradientColor(
      linearGradients[key as keyof typeof linearGradients][0],
      linearGradients[key as keyof typeof linearGradients][1],
    )
    return acc
  }, {}),
}

export default colors
