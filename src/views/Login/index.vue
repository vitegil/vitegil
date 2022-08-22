<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '@/dao/api'
import { storageKey } from '@/constants'

const isLoading = ref(false)
const isWrong = ref(false)
const formInline = reactive({
  account: 'vitegil',
  password: 'vitegil',
})
const router = useRouter()

async function login() {
  isWrong.value = false
  // 1.判空  2.状态等待loading 3.axios发送后端 4.成功则跳转到首页
  if (!formInline.account || !formInline.password) {
    isWrong.value = true
    return
  }
  isLoading.value = true
  const isSuccessLogin = await loginApi(formInline)
  isLoading.value = false
  if (isSuccessLogin) {
    localStorage.setItem(storageKey.appId, 'www.baidu.com')
    router.push({ name: 'ActionMonitor' })
  } else {
    isWrong.value = true
  }
}
</script>

<template>
  {{ isSuccessLogin }}
  {{ isWrong }}
  <div class="flex h-full w-full">
    <!-- 左侧图 -->
    <div class="flex-grow bg-gray-700 text-white relative">
      <div class="w-full flex justify-center items-center pt-30px absolute">
        <img
          src="@/assets/imgs/logo.png"
          class="w-100px mr-20px filter brightness-251"
        >
        <span class="text-20px font-bold">
          Vitegil - Frontend Monitoring Service
        </span>
      </div>
      <div class="h-full flex flex-col justify-center items-center">
        <img src="@/assets/svgs/login-box-bg.svg" class="w-350px">
        <div class="text-3xl">
          欢迎登录前端监控系统
        </div>
      </div>
    </div>
    <!-- 右侧登录 -->
    <div class="w-[50%] h-full flex flex-col justify-center items-center">
      <div class="w-400px relative">
        <div class="text-center text-2xl font-bold mb-20px">
          登录
        </div>
        <el-form v-loading="isLoading" status-icon label-position="top">
          <el-form-item label="账号">
            <el-input
              v-model="formInline.account"
              size="large"
              type="account"
              @input="isWrong = false"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="formInline.password"
              size="large"
              type="password"
              @input="isWrong = false"
            />
          </el-form-item>

          <el-form-item class="mt-50px">
            <el-button
              class="w-full"
              size="large"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
          <!-- <el-form-item>
            <el-button class="w-full" size="large">
              注册
            </el-button>
          </el-form-item> -->
        </el-form>
        <el-alert
          v-show="isWrong"
          title="请填写正确的账号和密码"
          type="error"
          description="Wrong account or password"
          show-icon
          class="absolute w-full"
        />
      </div>
    </div>
  </div>
</template>
