<script lang="ts" setup>
import { ref } from 'vue'
import {
  Coin,
  DArrowLeft,
  DArrowRight,
  List,
  TrendCharts,
  WarnTriangleFilled,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = ref(router.currentRoute)

const isCollapse = ref(false)
const configMenu = [
  { name: '用户行为监控', icon: TrendCharts, path: '/' },
  { name: '异常监控', icon: WarnTriangleFilled, path: '/exception-monitor' },
  { name: '性能数据监控', icon: Coin, path: '/performance-monitor' },
  { name: '用户监控列表', icon: List, path: '/user-monitor-list' },
]
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">
      expand
    </el-radio-button>
    <el-radio-button :label="true">
      collapse
    </el-radio-button>
  </el-radio-group> -->

    <el-menu
      class="flex-grow"
      :default-active="route.path"
      :collapse="isCollapse"
    >
      <el-menu-item
        v-for="(item, index) in configMenu"
        :key="index"
        :index="item.path"
        @click="router.push(item.path)"
      >
        <el-icon><component :is="item.icon" /></el-icon>
        <template #title>
          {{ item.name }}
        </template>
      </el-menu-item>
    </el-menu>

    <div class="collapse-button" @click="isCollapse = !isCollapse">
      <el-icon>
        <DArrowRight v-if="isCollapse" />
        <DArrowLeft v-else />
      </el-icon>
    </div>
  </div>
</template>

<style scoped>
.collapse-button {
  width: 100%;
  padding: 10px 0;
  border-right: solid 1px var(--el-menu-border-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.collapse-button:hover {
  color: var(--el-menu-active-color);
  background-color: var(--el-menu-hover-bg-color);
}
</style>
