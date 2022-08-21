import { reactive, toRefs } from 'vue'
// 实际取出-函数
// import { errorApi } from '@/dao/api'

// 模拟-数据
import errorApi from './mock.json'

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
  allGrade: 37,
  promiseGrade: 89.9,
  jsGrade: 25,
  resourceGrade: 98,
  promiseError: [820, 932, 901, 934, 1290, 1330, 1320, 820],
  jsError: [820, 932, 901, 934, 1290, 1330, 1320, 820],
  resourceError: [820, 932, 901, 934, 1290, 1330, 1320, 820],
})

// 初始化数据（axios取出数据不用响应式）
// datas = { allGrade, promiseError, jsError, resourcejsErrorError }
//   = toRefs(erroData)
;(async () => {
  datas.allGrade = errorApi.allGrade
  datas.promiseGrade = errorApi.promiseError.grade
  datas.resourceGrade = errorApi.resourceError.grade
  datas.jsGrade = errorApi.jsError.grade
  datas.promiseError = errorApi.promiseError.data
  datas.resourceError = errorApi.resourceError.data
  datas.jsError = errorApi.jsError.data
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
