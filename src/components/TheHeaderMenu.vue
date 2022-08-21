<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storageKey } from '@/constants'

const router = useRouter()
const avatarSrc = new URL('../assets/imgs/avatar.png', import.meta.url).toString()
const logout = () => {
  localStorage.removeItem(storageKey.appId)
  router.push('/login')
}
</script>

<template>
  <div class="card h-100px flex justify-between items-center select-none">
    <div class="flex items-center">
      <img src="@/assets/imgs/logo.png" alt="" class="w-16rem mr-5rem">
      <span id="slogan" class="mt-0.8rem subpixel-antialiased truncate">
        Frontend Monitoring Service
      </span>
    </div>
    <el-dropdown>
      <el-avatar size="large" :src="avatarSrc" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Alex Brush';
  font-display: block;
  font-style: normal;
  font-weight: normal;
  src: local('Alex Brush'),
    url('../assets/fonts/AlexBrush-Regular.woff') format('woff');
}

#slogan {
  font-family: 'Alex Brush';
  font-weight: normal;
  font-style: normal;
  font-size: 2.5rem;
  color: #b28330;
}
</style>
