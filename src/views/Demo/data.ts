/**
 * @file 该文件负责从后端获取数据
 */
import { reactive } from 'vue'
import { getFullData, getLastData } from './server'

// 定义数据
const datas = reactive<{ pv: number[]; uv: number[] }>({
  pv: [],
  uv: [],
})

// 初始化数据-立即执行函数-并发
;(async () => {
  const [pv, uv] = await Promise.all([getFullData(), getFullData()])
  datas.pv = pv.data
  datas.uv = uv.data
})()

// 轮询数据
setInterval(async () => {
  const [pv, uv] = await Promise.all([getLastData(), getLastData()])
  datas.pv.push(pv.data)
  datas.uv.push(uv.data)
}, 1500)

export default datas
