import { ref, watch } from 'vue'
import { performanceData } from './data'
import { getHistogramOption } from '@/utils/echarts'
import colors from '@/style/color'

const genOption = () =>
  getHistogramOption({
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
      performanceData.value?.loadTime || 0,
      performanceData.value?.domContentLoadedTime || 0,
      performanceData.value?.domReadyTime || 0,
      performanceData.value?.responseTime || 0,
      performanceData.value?.parseDNSTime || 0,
      performanceData.value?.connectTime || 0,
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

export const optionAll = ref(genOption())
watch(performanceData, () => {
  optionAll.value = genOption()
})
