<script lang="ts" setup>
import { onMounted, ref, toRef, watch } from 'vue'
import type { ComposeOption } from 'echarts/core'
import { init } from 'echarts/core'

// TODO: 完善 TS 类型定义
type OptionType = any

const props = defineProps<{
  option: OptionType
}>()

const option = toRef(props, 'option')
const canvaRef = ref<HTMLElement | null>(null)

const render = (targetElement: HTMLElement | null, option: OptionType) => {
  targetElement && init(targetElement).setOption(option as ComposeOption<any>)
}

onMounted(() => {
  render(canvaRef.value, option.value)
})

watch(option, () => {
  render(canvaRef.value, option.value)
})
</script>

<template>
  <div ref="canvaRef" class="w-full h-full" />
</template>
