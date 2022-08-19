<script lang="ts" setup>
import { ref } from 'vue'
import { optionA, optionB, optionC, optionD } from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/constant/color'

const TT_time = ref('187.5ms')
const dom_time = ref('2.68s')
const page_time = ref('2.74s')
</script>

<template>
  <div>
    <div class="mb-50px mt-20px ml-20px">
      <p>异常监控</p>
      <el-divider />
      <div class="flex justify-evenly">
        <div
          :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl ${colors.green.windi}`"
        >
          <p>TTFB平均时间</p>
          <p class="font-semibold text-2xl">{{ TT_time }}</p>
        </div>
        <div
          :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.yellow.windi}`"
        >
          <p>Dom解析时间</p>
          <p class="font-semibold text-2xl">{{ dom_time }}</p>
        </div>
        <div
          :class="`flex flex-col p-15px items-center basis-1/5 w-80px h-80px rounded-4xl bg-gradient-to-l ${colors.pink.windi} text-white`"
        >
          <p>页面平均加载时间</p>
          <p class="font-semibold text-2xl">{{ page_time }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row ml-20px">
      <div class="w-600px h-400px">
        <ECharts :option="optionA" />
      </div>
      <div class="w-600px h-400px">
        <ECharts :option="optionB" />
      </div>
    </div>
    <div class="flex flex-row ml-20px">
      <div class="w-600px h-400px">
        <ECharts :option="optionC" />
      </div>
      <div class="w-600px h-400px">
        <ECharts :option="optionD" />
      </div>
    </div>
  </div>
</template>

<style></style>
