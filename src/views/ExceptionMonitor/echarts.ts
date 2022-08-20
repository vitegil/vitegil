import { getLineOption, getCircleProgressOption } from '@/utils/echarts'
import colors from '@/style/color'

export const optionA = getLineOption({
  title: 'JS错误趋势（js-error）',
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  color: colors.green.echarts,
  datas: [820, 932, 901, 934, 1290, 1330, 1320],
})

export const optionB = getLineOption({
  title: '静态资源错误趋势（resource-error）',
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datas: [82, 92, 91, 34, 290, 130, 320],
  color: colors.yellow.echarts,
})

export const optionC = getLineOption({
  title: 'Promise错误趋势（promise-error）',
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  color: colors.pink.echarts,
  datas: [82, 92, 91, 34, 290, 130, 320],
})

export const optionD = getLineOption({
  title: '自定义异常趋势（click-event）',
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  color: colors.blue.echarts,
  datas: [82, 92, 91, 34, 290, 130, 320],
})

export const healthScoreOption = getCircleProgressOption({
  title: '37',
  subTitle: '健康状态',
  data: 37,
  color: colors.green.echarts,
  y: '40%',
})

export const circleOptions = [
  getCircleProgressOption({
    title: '89.9%',
    subTitle: 'JS错误',
    data: 89.9,
    color: colors.pink.echarts,
    width: 1,
  }),
  getCircleProgressOption({
    title: '89.9%',
    subTitle: '自定义异常',
    data: 89.9,
    color: colors.blue.echarts,
    width: 1,
  }),
  getCircleProgressOption({
    title: '89.9%',
    subTitle: '静态资源异常',
    data: 89.9,
    color: colors.purple.echarts,
    width: 1,
  }),
  getCircleProgressOption({
    title: '93.5%',
    subTitle: '接口异常',
    data: 93.5,
    color: colors.yellow.echarts,
    width: 1,
  }),
]
