import { reactive, toRefs } from 'vue'
// 实际取出-函数
import { errorApi } from '@/dao/api'
// import { errorApi } from './mock'

// 定义展示数据
// number[]等价Array<number>代表不限长度的数字数组。不等[number,,,]限定长度
const datas = reactive<{
  allGrade: number
  promiseGrade: number
  jsGrade: number
  resourceGrade: number
  promiseError: number[]
  jsError: number[]
  resourceError: number[]
}>({
  // 定义初始值
  allGrade: 0,
  promiseGrade: 0,
  jsGrade: 0,
  resourceGrade: 0,
  promiseError: [],
  jsError: [],
  resourceError: [],
})

// 初始化数据（axios取出数据不用响应式）
// datas = { allGrade, promiseError, jsError, resourcejsErrorError }
//   = toRefs(erroData)
;(async () => {
  const errorRes = await errorApi()
  if (!errorRes)
    return
  datas.allGrade = errorRes.allGrade
  datas.promiseGrade = errorRes.promiseError.grade
  datas.resourceGrade = errorRes.resourceError.grade
  datas.jsGrade = errorRes.jsError.grade
  datas.promiseError = errorRes.promiseError.data
  datas.resourceError = errorRes.resourceError.data
  datas.jsError = errorRes.jsError.data
})()

export const {
  allGrade,
  promiseGrade,
  jsGrade,
  resourceGrade,
  promiseError,
  jsError,
  resourceError,
} = toRefs(datas)
