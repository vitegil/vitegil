<script lang="ts" setup>
import { ref } from 'vue'
import { option_all } from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/style/color'

const performanceData = ref([
  {
    name: 'TTI平均时间',
    value: '187.5',
    color: colors.green,
  },
  {
    name: 'TTF平均时间',
    value: '187.5',
    color: colors.yellow,
  },
  {
    name: 'Dom解析时间',
    value: '2.68',
    color: colors.pink,
  },
  {
    name: 'FCP时间',
    value: '2.74',
    color: colors.green,
  },
  {
    name: 'FMP时间',
    value: '2.74',
    color: colors.yellow,
  },
  {
    name: 'LCP时间',
    value: '2.74',
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
        <div
          v-for="(item, index) in performanceData"
          :key="index"
          :class="`data-label w-m-250px ${item.color.bg}`"
        >
          <p>{{ item.name }}</p>
          <p class="font-semibold text-2xl">
            {{ item.value }}ms
          </p>
        </div>
      </div>
    </div>
    <ECharts :option="option_all" />
  </div>
</template>

<style></style>
