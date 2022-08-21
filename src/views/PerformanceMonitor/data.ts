import { computed, ref } from 'vue'
import { performanceApi } from '@/dao/api'
import type { Performance } from '@/dao/type'
import colors from '@/style/color'

// 定义展示数据
export const performanceData = ref<Performance | null>(null)
export const dataLabels = computed(() => [
  {
    name: 'TTI平均时间',
    value: performanceData.value?.timeToInteractive || 0,
    color: colors.green,
  },
  {
    name: 'TTF平均时间',
    value: performanceData.value?.ttfbTime || 0,
    color: colors.yellow,
  },
  {
    name: 'Dom解析时间',
    value: performanceData.value?.parseDOMTime || 0,
    color: colors.pink,
  },
  {
    name: 'FCP时间',
    value: performanceData.value?.firstContentfulPaint || 0,
    color: colors.green,
  },
  {
    name: 'FMP时间',
    value: performanceData.value?.firstMeaningfulPaint || 0,
    color: colors.yellow,
  },
  {
    name: 'LCP时间',
    value: performanceData.value?.largestContentfulPaint || 0,
    color: colors.pink,
  },
])

// 数据初始化-立即执行函数
// ;(async() => {}) ()
;(async () => {
  const res = await performanceApi()
  res && (performanceData.value = res)
})()
