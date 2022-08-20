<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import LoginModel from '@/views/Login/Components/Login.vue'
// import RegisterModle from '@/views/Login/Components/Login.vue'

// const loading = ref(false)
const formInline = reactive({
  account: 'admine',
  password: '123456',
})
const route = useRoute()
const router = useRouter()
function login() {
  //1.判空  2.状态等待loading 3.axios发送后端 4.成功则跳转到首页
  if (!formInline.account || !formInline.password) {
    return
  }
  // loading = true
  // let res = await login(this.login.account,(this.login.password));
  // loading = false;
  // if (res.data) {
  // this.login = res.data;
  console.log(route)
  console.log(router)
  router.push({ name: 'ActionMonitor' })
  // }
}
</script>

<template>
  <div class="flex h-full w-full">
    <!-- 左侧图 -->
    <div class="flex-grow bg-gray-700 text-white relative">
      <div class="w-full flex justify-center items-center pt-30px absolute">
        <img
          src="@/assets/imgs/logo.png"
          class="w-100px mr-20px filter brightness-251"
        />
        <span class="text-20px font-bold">
          Vitegil - Frontend Monitoring Service
        </span>
      </div>
      <div class="h-full flex flex-col justify-center items-center">
        <img src="@/assets/svgs/login-box-bg.svg" class="w-350px" />
        <div class="text-3xl">欢迎登录前端监控系统</div>
      </div>
    </div>
    <!-- 右侧登录 -->
    <div class="w-[50%] h-full flex flex-col justify-center items-center">
      <div class="w-400px">
        <div class="text-center text-2xl font-bold mb-20px">登录</div>
        <el-form status-icon label-position="top">
          <el-form-item label="账号">
            <el-input
              size="large"
              type="account"
              v-model="formInline.account"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              size="large"
              type="password"
              v-model="formInline.password"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              class="w-full"
              size="large"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" size="large">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
