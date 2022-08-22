import { ref, watch } from 'vue'
import {
  allGrade,
  jsError,
  jsGrade,
  promiseError,
  promiseGrade,
  resourceError,
  resourceGrade,
} from './data'
import { getCircleProgressOption, getLineOption } from '@/utils/echarts'
import colors from '@/style/color'

// 展示健康总数据，响应式ref+value+监听变化实时更新
const circleStaticConfig = {
  subTitle: '健康状态',
  color: colors.green.echarts,
  y: '40%',
}
export const healthScoreOption = ref(
  getCircleProgressOption({
    title: allGrade.value.toString(),
    data: allGrade.value,
    ...circleStaticConfig,
  }),
)
watch(allGrade, () => {
  healthScoreOption.value = getCircleProgressOption({
    title: allGrade.value.toString(),
    data: allGrade.value,
    ...circleStaticConfig,
  })
})

// 展示其他健康数据
const staticConfigA = {
  subTitle: 'JS错误',
  color: colors.pink.echarts,
}
const staticConfigB = {
  subTitle: 'Promise错误',
  color: colors.yellow.echarts,
}
const staticConfigC = {
  subTitle: '静态资源异常',
  color: colors.purple.echarts,
}
export const circleOptions = [
  ref(
    getCircleProgressOption({
      title: jsGrade.value.toString(),
      data: jsGrade.value,
      ...staticConfigA,
    }),
  ),
  ref(
    getCircleProgressOption({
      title: promiseGrade.value.toString(),
      data: promiseGrade.value,
      ...staticConfigB,
    }),
  ),
  ref(
    getCircleProgressOption({
      title: resourceGrade.value.toString(),
      data: resourceGrade.value,
      ...staticConfigC,
    }),
  ),
]
watch([jsGrade, promiseGrade, resourceGrade], () => {
  circleOptions[0].value = getCircleProgressOption({
    title: jsGrade.value.toString(),
    data: jsGrade.value,
    ...staticConfigA,
  })
  circleOptions[1].value = getCircleProgressOption({
    title: promiseGrade.value.toString(),
    data: promiseGrade.value,
    ...staticConfigB,
  })
  circleOptions[2].value = getCircleProgressOption({
    title: resourceGrade.value.toString(),
    data: resourceGrade.value,
    ...staticConfigC,
  })
})

// 异常趋势图
const labelShown = Array(24)
  .fill(0)
  .map((value, index) => {
    return `${index}:00`
  })

const optionConfigA = {
  title: 'JS错误趋势（js-error）',
  labels: labelShown,
  color: colors.green.echarts,
}
const optionConfigB = {
  title: 'Promise错误趋势（promise-error）',
  labels: labelShown,
  color: colors.yellow.echarts,
}
const optionConfigC = {
  title: '静态资源异常趋势（resource-error）',
  labels: labelShown,
  color: colors.pink.echarts,
}

export const options = [
  ref(
    getLineOption({
      ...optionConfigA,
      datas: jsError.value,
    }),
  ),
  ref(
    getLineOption({
      ...optionConfigB,
      datas: promiseError.value,
    }),
  ),
  ref(
    getLineOption({
      ...optionConfigC,
      datas: resourceError.value,
    }),
  ),
]

watch([jsError, promiseError, resourceError], () => {
  options[0].value = getLineOption({
    ...optionConfigA,
    datas: jsError.value,
  })
  options[1].value = getLineOption({
    ...optionConfigB,
    datas: promiseError.value,
  })
  options[2].value = getLineOption({
    ...optionConfigC,
    datas: resourceError.value,
  })
})
