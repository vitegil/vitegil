import { computed, ref } from 'vue'
import { tableData } from './data'
import type { UserMonitor } from '@/dao/type'

export const pageSize = ref(5)
export const currentPage = ref(1)

export const handleCurrentChange = (current: number) => {
  currentPage.value = current
}

export const handleSizeChange = (size: number) => {
  pageSize.value = size
}

// 展示数据 computed = reactive + watch
export const cureentData = computed<UserMonitor[]>(() => {
  const starIndex = (currentPage.value - 1) * pageSize.value
  const endIndex = currentPage.value * pageSize.value
  return tableData.slice(starIndex, endIndex)
})
