import * as echarts from 'echarts/core'

const genLinearGradientColor = (startColor: string, endColor: string) =>
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: startColor,
    },
    {
      offset: 1,
      color: endColor,
    },
  ])
export default {
  green: genLinearGradientColor('rgb(128, 255, 165)', 'rgb(1, 191, 236)'),
  blue: genLinearGradientColor('rgb(0, 221, 255)', 'rgb(77, 119, 255)'),
  purple: genLinearGradientColor('rgb(55, 162, 255)', 'rgb(116, 21, 219)'),
  pink: genLinearGradientColor('rgb(255, 0, 135)', 'rgb(135, 0, 157)'),
  yellow: genLinearGradientColor('rgb(255, 191, 0)', 'rgb(224, 62, 76)'),
}
