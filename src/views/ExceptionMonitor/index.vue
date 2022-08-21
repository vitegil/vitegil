<script lang="ts" setup>
import { ref } from 'vue'
import {
  circleOptions,
  healthScoreOption,
  optionA,
  optionB,
  optionC,
  // optionD,
} from './echarts'
import ECharts from '@/components/ECharts.vue'
import colors from '@/style/color'

const TT_time = ref('187.5ms')
const dom_time = ref('2.68s')
const page_time = ref('2.74s')
const options = [optionA, optionC, optionB]
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
          <div
            v-for="(circleOption, index) in circleOptions"
            :key="index"
            class="w-full h-200px"
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
    <div class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="w-full h-400px"
      >
        <ECharts :option="option" />
      </div>
    </div>
  </div>
</template>

<style></style>
