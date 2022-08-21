import { reactive } from 'vue'
import { getAppApi } from '@/dao/api'
import type { UserMonitor } from '@/dao/type'

export const tableData = reactive<UserMonitor[]>([])
;(async () => {
  const res = await getAppApi()
  if (res) {
    tableData.length = 0
    tableData.push(...res)
  }
})()
