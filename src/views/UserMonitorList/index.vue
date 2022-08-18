<script lang="ts" setup>
// 定义响应式的、可更改的 ref 变量
// 对象赋值给 ref，对象通过 reactive() 转为具有深层次响应式的对象
import { computed, onMounted, reactive, ref } from 'vue'
import { currentPage, handleCurrentChange, pageSizde } from './page'

interface UserMonitor {
  date: string
  name: string
  address: string
}

const tableData = reactive<UserMonitor[]>([])
const fakeData: UserMonitor[] = []
for (let i = 0; i < 100; i++) {
  fakeData.push({
    date: '2016-05-03',
    name: `Tom${i}`,
    address: 'No. 189, Grove St, Los Angelesaaaaaaaaaaaaaaaaaaaaaaaa',
  })
}

onMounted(() => {
  tableData.push(...fakeData)
})

// 新增dialog
const dialogFormVisible = ref(false)
const formLabelWidth = '80px'
const form = reactive({
  name: '',
  url: '',
})

function addItem() {
  dialogFormVisible.value = false
  console.log('axios获取数据')
}

// computed = reactive + watch
const cureentData = computed<UserMonitor[]>(() => {
  const starIndex = (currentPage.value - 1) * pageSizde
  const endIndex = currentPage.value * pageSizde
  return tableData.slice(starIndex, endIndex)
})
</script>

<template>
  <!-- <div style="width: 100%"> -->
  <div class="w-full">
    <div>
      <el-button
        type="primary"
        size="default"
        plain
        @click="dialogFormVisible = true"
      >
        新建项目
      </el-button>
      <!-- <el-button type="primary" size="default" :icon="Search">搜索</el-button> -->
    </div>
    <el-table class="w-full" :data="cureentData" stripe size="large">
      <el-table-column type="index" />
      <!-- <el-table-column prop="date" label="日期" /> -->
      <el-table-column prop="name" label="网站名" />
      <el-table-column prop="address" label="页面地址" />
    </el-table>
    <div class="medium">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSizde"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>

  <!-- 新增dialog -->
  <el-dialog v-model="dialogFormVisible" title="新增项目" width="40%">
    <el-form :model="form">
      <el-form-item
        label="项目名"
        size="large"
        required
        :label-width="formLabelWidth"
      >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="网页地址"
        size="large"
        required
        :label-width="formLabelWidth"
      >
        <el-input v-model="form.url" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="default" @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" size="default" @click="addItem">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style>
.medium {
  margin: 15px 30%;
}
</style>
