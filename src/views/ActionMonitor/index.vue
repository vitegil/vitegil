<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { echartModel } from './echarts'
import ECharts from '@/components/ECharts.vue'
import { pvApi, uvApi } from '@/dao/api'

const pv = ref(1200)
const uv = ref(400)
const pvData = ref([])
const uvData = ref([])
/**
 * Echarts 使用指南
 * 1. 定义一个 option 变量，该部分参考 echarts 官网
 * 2. 引入 ECharts 组件
 */

// uvData、pvData变化时，option实时变化
const option = computed(() => {
  console.log(uvData.value, pvData.value)

  return echartModel(uvData.value, pvData.value)
})

onMounted(async () => {
  // 模拟获取后端数据
  pvData.value.push(...[
    12, 34, 90, 23, 56, 78, 87, 32, 54, 6, 3, 56, 23, 45, 67, 97, 34, 60, 92,
    14, 22, 34, 61, 76,
  ])
  uvData.value.push(...[
    12, 22, 34, 23, 78, 87, 32, 90, 54, 3, 14, 56, 23, 45, 76, 67, 56, 97, 6,
    34, 60, 92, 34, 61,
  ])
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
        <div
          class="flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l from-green-500/50 to-blue-500/50"
        >
          <p>浏览量(PV)</p>
          <p class="font-semibold text-2xl">
            {{ pv }}
          </p>
        </div>
        <div
          class="flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l from-green-500/50 to-blue-500/50"
        >
          <p>访客数(UV)</p>
          <p class="font-semibold text-2xl">
            {{ uv }}
          </p>
        </div>
      </div>
    </div>
    <ECharts :option="option" />
  </div>
</template>
