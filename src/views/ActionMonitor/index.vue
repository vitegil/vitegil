<script lang="ts" setup>
import { tatalPV, tatalUV } from './data'
import { option } from './echarts'
import ECharts from '@/components/ECharts.vue'
import DataLabel from '@/components/DataLabel.vue'
import colors from '@/style/color'
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>流量数据</p>
      <el-divider />
      <div class="flex justify-evenly">
        <DataLabel
          name="浏览量(PV)"
          :value="`${tatalPV}`"
          :color="colors.green"
        />
        <DataLabel
          name="访客数(UV)"
          :value="`${tatalUV}`"
          :color="colors.green"
        />
      </div>
    </div>
    <ECharts :option="option" />
  </div>
</template>
