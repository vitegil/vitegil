<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Color } from '@/style/color'

const { color, name, value } = defineProps<{
  color: Color
  name: string
  value: string
}>()
</script>

<template>
  <div :class="`flex flex-col p-15px items-center basis-1/5 rounded-4xl w-m-250px ${color.bg}`">
    <p>{{ name }}</p>
    <p class="font-semibold text-2xl">
      {{ value }}
    </p>
  </div>
</template>
