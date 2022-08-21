import { reactive, ref } from 'vue'
import { pvApi, uvApi } from '@/dao/api'

export const tatalUV = ref(0)
export const tatalPV = ref(0)
export const timeArr = reactive<{
  pv: number[]
  uv: number[]
}>({
  pv: [],
  uv: [],
})

;(async () => {
  const [pvRes, uvRes] = await Promise.all([pvApi(), uvApi()])
  if (pvRes) {
    tatalPV.value = pvRes.tatalUV
    timeArr.pv = pvRes.timeArr
  }
  if (uvRes) {
    tatalUV.value = uvRes.tatalUV
    timeArr.uv = uvRes.timeArr
  }
})()
