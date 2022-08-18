<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { init, ComposeOption } from 'echarts/core'

// TODO: 完善 TS 类型定义
type OptionType = any

const { option } = defineProps<{
  option: OptionType
}>()

const render = (targetElement: HTMLElement | null, option: OptionType) => {
  targetElement && init(targetElement).setOption(option as ComposeOption<any>)
}

const canvaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  render(canvaRef.value, option)
})
</script>

<template>
  <div ref="canvaRef" class="w-full h-full"></div>
</template>
