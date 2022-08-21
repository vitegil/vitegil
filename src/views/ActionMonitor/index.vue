<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { echartModel } from './echarts'
import ECharts from '@/components/ECharts.vue'
import DataLabel from '@/components/DataLabel.vue'
import colors from '@/style/color'
// import { pvApi, uvApi } from '@/dao/api'

const pv = ref<number>(1200)
const uv = ref<number>(400)
const data = reactive<{
  pvData: number[]
  uvData: number[]
}>({
  pvData: [],
  uvData: [],
})

/**
 * Echarts 使用指南
 * 1. 定义一个 option 变量，该部分参考 echarts 官网
 * 2. 引入 ECharts 组件
 */

// uvData、pvData变化时，option实时变化
const option = ref(echartModel(data.uvData, data.pvData))
watch(data, () => {
  option.value = echartModel(data.uvData, data.pvData)
})

onMounted(async () => {
  // 模拟获取后端数据
  data.pvData = [
    12, 34, 90, 23, 56, 78, 87, 32, 54, 6, 3, 56, 23, 45, 67, 97, 34, 60, 92,
    14, 22, 34, 61, 76,
  ]
  data.uvData = [
    12, 22, 34, 23, 78, 87, 32, 90, 54, 3, 14, 56, 23, 45, 76, 67, 56, 97, 6,
    34, 60, 92, 34, 61,
  ]
  // 实际获取数据
  // pvData.value = await pvApi()
  // uvData.value = await uvApi()
})
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>流量数据</p>
      <el-divider />
      <div class="flex justify-evenly">
        <DataLabel name="浏览量(PV)" :value="`${pv}ms`" :color="colors.green" />
        <DataLabel name="访客数(UV)" :value="`${uv}ms`" :color="colors.green" />
      </div>
    </div>
    <ECharts :option="option" />
  </div>
</template>
