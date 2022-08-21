import { performanceData } from './data'
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
  datas: [
    performanceData.value?.loadTime || 1200,
    performanceData.value?.domContentLoadedTime || 345,
    performanceData.value?.domReadyTime || 567,
    performanceData.value?.responseTime || 230,
    performanceData.value?.parseDNSTime || 670,
    performanceData.value?.connectTime || 890,
  ],
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
