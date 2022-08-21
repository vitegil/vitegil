<script lang="ts" setup>
import { ref } from 'vue'
import { option_all } from './echarts'
import { performanceData } from './data'
import ECharts from '@/components/ECharts.vue'
import DataLabel from '@/components/DataLabel.vue'
import colors from '@/style/color'

const performance = ref([
  {
    name: 'TTI平均时间',
    value: performanceData.value?.timeToInteractive || 12,
    color: colors.green,
  },
  {
    name: 'TTF平均时间',
    value: performanceData.value?.timeTottfbTime || 234,
    color: colors.yellow,
  },
  {
    name: 'Dom解析时间',
    value: performanceData.value?.parseDOMTime || 123,
    color: colors.pink,
  },
  {
    name: 'FCP时间',
    value: performanceData.value?.firstContentfulPaint || 35,
    color: colors.green,
  },
  {
    name: 'FMP时间',
    value: performanceData.value?.firstMeaningfulPaint || 57,
    color: colors.yellow,
  },
  {
    name: 'LCP时间',
    value: performanceData.value?.largestContentfulPaint || 320,
    color: colors.pink,
  },
])
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>页面性能监控</p>
      <el-divider />
      <div class="grid grid-cols-3 gap-3 justify-items-center">
        <DataLabel
          v-for="(item, index) in performance"
          :key="index"
          :name="item.name"
          :value="`${item.value}ms`"
          :color="item.color"
        />
      </div>
    </div>
    <ECharts :option="option_all" />
  </div>
</template>

<style></style>
