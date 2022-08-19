<script lang="ts" setup>
import { ref } from 'vue'
import {option_all } from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/constant/color'

const TTI_time = ref('187.5ms')
const TTF_time = ref('187.5ms')
const dom_time = ref('2.68s')
const FCP_time = ref('2.74s')
const FMP_time = ref('2.74s')
const LCP_time = ref('2.74s')

</script>

<template>
  <div class="mb-50px mt-20px ml-20px">
    <p>页面性能监控</p>
    <el-divider />
    <div class="flex justify-evenly mb-20px">
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl ${colors.green.windi}`"
      >
        <p>TTI平均时间</p>
        <p class="font-semibold text-2xl">{{ TTI_time }}</p>
      </div>
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.yellow.windi}`"
      >
        <p>TTFB平均时间</p>
        <p class="font-semibold text-2xl">{{ TTF_time }}</p>
      </div>
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.pink.windi} text-white`"
      >
        <p>Dom解析时间</p>
        <p class="font-semibold text-2xl">{{ dom_time }}</p>
      </div>
    </div>
    <div class="flex justify-evenly">
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl ${colors.green.windi}`"
      >
        <p>FCP时间</p>
        <p class="font-semibold text-2xl">{{ FCP_time }}</p>
      </div>
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.yellow.windi}`"
      >
        <p>FMP时间</p>
        <p class="font-semibold text-2xl">{{ FMP_time }}</p>
      </div>
      <div
        :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.pink.windi} text-white`"
      >
        <p>LCP时间</p>
        <p class="font-semibold text-2xl">{{ LCP_time }}</p>
      </div>
    </div>
  </div>
  <ECharts :option="option_all" class="ml-20px"/>
</template>

<style></style>
