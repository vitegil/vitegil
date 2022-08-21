<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { tableData } from './data'
import { addAppApi } from '@/dao/api'

// 定义响应式的、可更改的 ref 变量
// 对象赋值给 ref，对象通过 reactive() 转为具有深层次响应式的对象
const dialogFormVisible = ref(false)
const isLoading = ref(false)
const form = reactive({
  name: '',
  url: '',
})

const ruleFormRef = ref<FormInstance | null>(null)

watch(dialogFormVisible, (val) => {
  if (val) {
    form.name = ''
    form.url = ''
  }
})

const addItem = async () => {
  if (!ruleFormRef.value)
    return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      isLoading.value = true
      const newRes = await addAppApi(form.name, form.url)
      isLoading.value = false
      if (newRes) {
        tableData.length = 0
        tableData.push(...newRes)
        dialogFormVisible.value = false
        ElNotification({
          type: 'success',
          title: '新建成功',
        })
      }
    }
  })
}

const rules: FormRules = {
  name: [{ required: true, message: '请填写 APP Name', trigger: 'blur' }],
  url: [{ required: true, message: '请填写 URL', trigger: 'blur' }],
}
</script>

<template>
  <el-button
    type="primary"
    size="default"
    plain
    @click="dialogFormVisible = true"
  >
    新建项目
  </el-button>
  <!-- 新增dialog -->
  <el-dialog v-model="dialogFormVisible" title="新增项目" width="40%">
    <el-form
      v-loading="isLoading"
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item prop="name" label="项目名">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="url" label="网页地址">
        <el-input v-model="form.url" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <div class="w-full text-right">
          <el-button size="default" @click="dialogFormVisible = false">
            取消
          </el-button>
          <el-button type="primary" size="default" @click="addItem">
            提交
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
