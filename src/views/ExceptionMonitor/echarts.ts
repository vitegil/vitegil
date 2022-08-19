import { getLineOption } from '@/utils/echarts'
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
