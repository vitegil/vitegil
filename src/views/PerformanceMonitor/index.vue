<script lang="ts" setup>
import { optionAll } from './echarts'
import { dataLabels } from './data'
import ECharts from '@/components/ECharts.vue'
import DataLabel from '@/components/DataLabel.vue'
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>页面性能监控</p>
      <el-divider />
      <div class="grid grid-cols-3 gap-3 justify-items-center">
        <DataLabel
          v-for="(item, index) in dataLabels"
          :key="index"
          :name="item.name"
          :value="`${item.value}ms`"
          :color="item.color"
        />
      </div>
    </div>
    <ECharts :option="optionAll" />
  </div>
</template>

<style></style>
