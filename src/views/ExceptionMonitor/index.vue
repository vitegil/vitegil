<script lang="ts" setup>
import { ref } from 'vue'
import { optionA, optionB, optionC, optionD } from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/style/color'

const TT_time = ref('187.5ms')
const dom_time = ref('2.68s')
const page_time = ref('2.74s')
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>异常监控</p>
      <el-divider />
      <div class="flex justify-evenly">
        <div :class="`data-label ${colors.green.bg}`">
          <p>TTFB平均时间</p>
          <p class="font-semibold text-2xl">{{ TT_time }}</p>
        </div>
        <div :class="`data-label ${colors.yellow.bg}`">
          <p>Dom解析时间</p>
          <p class="font-semibold text-2xl">{{ dom_time }}</p>
        </div>
        <div :class="`data-label ${colors.pink.bg} text-white`">
          <p>页面平均加载时间</p>
          <p class="font-semibold text-2xl">{{ page_time }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-600px h-400px">
        <ECharts :option="optionA" />
      </div>
      <div class="w-600px h-400px">
        <ECharts :option="optionB" />
      </div>
    </div>
    <div class="flex flex-row">
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
