<script lang="ts" setup>
import { ref } from 'vue'
import {
  optionA,
  optionB,
  optionC,
  optionD,
  healthScoreOption,
  circleOptions,
} from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/style/color'

const TT_time = ref('187.5ms')
const dom_time = ref('2.68s')
const page_time = ref('2.74s')
const options = [optionA, optionB, optionC, optionD]
</script>

<template>
  <div class="main-page">
    <div class="mb-50px">
      <p>异常监控</p>
      <el-divider />
      <div class="flex items-center">
        <div class="w-300px h-300px">
          <ECharts :option="healthScoreOption" />
        </div>
        <el-divider direction="vertical" class="h-200px" />
        <div class="flex-grow flex justify-evenly">
          <!-- <div :class="`data-label ${colors.green.bg}`">
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
        </div> -->
          <div
            class="w-full h-200px"
            v-for="(circleOption, index) in circleOptions"
            :key="index"
          >
            <ECharts :option="circleOption" />
          </div>
        </div>
      </div>
    </div>
    <!-- 
      repeat(auto-fill,minmax( WIDTH ,1fr)) 中的 WIDTH 表示标准宽度，含义为：
      1）当该行剩余空间 >=WIDTH 时，该行添加一项
      2）当该行剩余空间 <WIDTH，不能添加新项，则已有项平均分配剩余宽度
    -->
    <div class="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))]">
      <div
        class="w-full h-400px"
        v-for="(option, index) in options"
        :key="index"
      >
        <ECharts :option="option" />
      </div>
    </div>
  </div>
</template>

<style></style>
