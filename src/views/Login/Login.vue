<script setup lang="ts">
import { ref } from 'vue'
// import LoginModel from '@/views/Login/Components/Login.vue'
// import RegisterModle from '@/views/Login/Components/Login.vue'

const loading = ref(false)
let loginInfo = {
  account: '',
  password: '',
}
//  async login() {
//       //1.判空  2.状态等待loading 3.axios发送后端 4.成功则跳转到首页
//       if (!this.login.account || !this.login.password) {
//         return;
//       }
//       this.loading = true;
//       // let res = await login(this.login.account,md5(this.login.password));
//       let res = await login(this.login.account,(this.login.password));
//       this.loading = false;
//       // console.log(res.data);
//       if (res.data) {
//         this.login = res.data;
//         this.$router.push({ name: 'SearchIndex' });
//         } else {
//           alert('账号或密码不对！');
//         }
//         }}
</script>

<template>
  <div class="flex h-[100%] w-full">
    <!-- 左侧图 -->
    <div class="w-800px bg-gray-500">
      <div class="flex items-center text-white p-30px mb-40px">
        <img
          src="@/assets/imgs/logo.png"
          alt=""
          class="w-100px h-50px mr-20px"
        />
        <span class="text-20px font-bold"
          >Vitegil - Frontend Monitoring Service</span
        >
      </div>
      <div class="flex flex-col justify-center items-center">
        <img
          src="@/assets/svgs/login-box-bg.svg"
          key="1"
          alt=""
          class="w-350px"
        />
        <div class="text-3xl text-white" key="2">欢迎登录前端监控系统</div>
      </div>
    </div>
    <!-- 右侧登录 -->
    <div class="w-[calc(100%-800px) flex flex-col justify-between items-center">
      <h3>登录</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="账号" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="account"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button @click="login" size="default">登录</el-button>
          <el-button type="primary" size="default" @click="register"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style></style>
