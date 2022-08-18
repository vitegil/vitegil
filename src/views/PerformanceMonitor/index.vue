<script lang="ts" setup>
import { ref } from 'vue'
import getOption from '../ActionMonitor/echarts'
import { optionA, optionB } from './echarts.ts'
import ECharts from '@/components/ECharts.vue'

const TT_time = ref('187.5ms')
const dom_time = ref('2.68s')
const page_time = ref('2.74s')
const optionC = getOption()
</script>

<template>
  <div>
    <div class="mb-50px mt-20px ml-20px">
      <p>页面性能</p>
      <el-divider />
      <div class="flex justify-evenly">
        <div
          class="flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l from-yellow-500 from-green-500/50 to-blue-500/50"
        >
          <p>TTFB平均时间</p>
          <p class="font-semibold text-2xl">
            {{ TT_time }}
          </p>
        </div>
        <div
          class="flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l from-yellow-500 from-green-500/50 to-blue-500/50"
        >
          <p>Dom解析时间</p>
          <p class="font-semibold text-2xl">
            {{ dom_time }}
          </p>
        </div>
        <div
          class="flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l from-yellow-500 from-green-500/50 to-blue-500/50"
        >
          <p>页面平均加载时间</p>
          <p class="font-semibold text-2xl">
            {{ page_time }}
          </p>
        </div>
      </div>
    </div>
    <!-- <ECharts :option="optionA" />
    <ECharts :option="optionB" /> -->
    <ECharts :option="optionC" />
  </div>
</template>

<style></style>
