import { ref } from 'vue'
import { performanceApi } from '@/dao/api'
import type { Performance } from '@/dao/type'

// 定义展示数据
export const performanceData = ref<Performance | null>(null)

// 数据初始化-立即执行函数
// ;(async() => {}) ()
;(async () => {
  const res = await performanceApi()
  res && (performanceData.value = res)
})()
