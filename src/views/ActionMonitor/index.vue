<script lang="ts" setup>
import { ref } from 'vue'
import getOption from './echarts'
import ECharts from '@/components/ECharts.vue'

/**
 * Echarts 使用指南
 * 1. 定义一个 option 变量，该部分参考 echarts 官网
 * 2. 引入 ECharts 组件
 */
const optionB = getOption({
  title: {
    text: '流量数据趋势图',
  },
})

// 模拟获取展示的数据
const pv = ref(1200)
const uv = ref(400)
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
    <ECharts :option="optionB" />
  </div>
</template>
