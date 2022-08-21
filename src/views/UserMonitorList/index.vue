<script lang="ts" setup>
import {
  cureentData,
  handleCurrentChange,
  handleSizeChange,
  pageSize,
} from './tabel'
import { tableData } from './data'
import AddDialog from './add-dialog.vue'
</script>

<template>
  <!-- <div style="width: 100%"> -->
  <div class="main-page">
    <!-- <div>
      <el-button
        type="primary"
        size="default"
        plain
        @click="dialogFormVisible = true"
        >新建项目</el-button
      > -->
    <!-- <el-button type="primary" size="default" :icon="Search">搜索</el-button> -->
    <!-- </div> -->

    <div class="flex justify-between">
      <p>用户监控列表</p>
      <AddDialog />
      <!-- <el-button type="primary" size="default" :icon="Search">搜索</el-button> -->
    </div>

    <el-divider />

    <el-table class="w-full" :data="cureentData" stripe size="large">
      <el-table-column type="index" />
      <el-table-column prop="appId" label="应用 ID（URL）" />
      <el-table-column prop="appName" label="应用名" />
      <el-table-column prop="appDesc" label="应用描述" />
    </el-table>
    <div class="flex justify-center">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next"
        :total="tableData.length"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
