/**
 * @file 该文件负责将数据转换为 echarts 可用的配置
 */
import { ref, watch } from 'vue'
import datas from './data'
import { getLineOption } from '@/utils/echarts'
import colors from '@/style/color'

export const TITLE = '定时更新 Demo 图表'
export const COLOR = colors.green
const LAST_LONG = 7
const pvStaticOption = {
  title: `${TITLE} - PV`,
  color: colors.green,
}
const uvStaticOption = {
  title: `${TITLE} - UV`,
  color: colors.pink,
}

type StaticOption = typeof pvStaticOption | typeof uvStaticOption

const getOption = (datas: number[], { title, color }: StaticOption) => {
  const beginIndex = datas.length - LAST_LONG
  return getLineOption({
    title,
    color: color.echarts,
    datas: datas.slice(datas.length - LAST_LONG),
    labels: Array(LAST_LONG)
      .fill(0)
      .map((_, i) => `第${i + beginIndex + 1}分钟`),
  })
}

export const pvOption = ref(getOption(datas.pv, pvStaticOption))
export const uvOption = ref(getOption(datas.uv, uvStaticOption))
watch(datas, () => {
  pvOption.value = getOption(datas.pv, pvStaticOption)
  uvOption.value = getOption(datas.uv, uvStaticOption)
})
