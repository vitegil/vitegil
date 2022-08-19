import { getHistogramOption } from '@/utils/echarts'
import colors from '@/style/color'

export const option_all = getHistogramOption({
  title: '加载计时/ms',
  labels: [
    'TCP连接耗时',
    'DNS解析',
    '请求响应',
    'DOM准备总时间',
    'DOM内容加载时间',
    '页面加载时间',
  ],
  datas: [120, 200, 150, 80, 70, 110],
  colors: [
    colors.green.echarts,
    colors.pink.echarts,
    colors.yellow.echarts,
    colors.purple.echarts,
    colors.green.echarts,
    colors.blue.echarts,
  ],
  isHorizontal: true,
})
