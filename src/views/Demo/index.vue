<script lang="ts" setup>
import {
  COLOR as optionColor, TITLE as optionTitle,
  pvOption, uvOption,
} from './echarts'
import ECharts from '@/components/ECharts.vue'
</script>

<template>
  <div class="p-20">
    <div :class="`p-1 rounded duration-300ms hover:(shadow-2xl) ${optionColor.bg}`">
      <div class="bg-white p-5 rounded">
        <h1 :class="` text-3xl font-900 ${optionColor.text}`">
          {{ optionTitle }}
        </h1>
        <div class="flex">
          <div class="w-[50%] h-400px">
            <ECharts :option="pvOption" />
          </div>
          <div class="w-[50%] h-400px">
            <ECharts :option="uvOption" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
