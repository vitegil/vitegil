<script>
import TheNavMenu from './components/TheNavMenu.vue'
import TheHeaderMenu from './components/TheHeaderMenu.vue'

export default {
  name: 'App',
  components: {
    TheNavMenu,
    TheHeaderMenu,
  },
}
</script>

<template>
  <!-- <div>
    <el-card class="relative m-20px p-15px">
      <TheHeaderMenu />
    </el-card>
    <el-card class="h-min-75vh m-20px p-15px">
      <div class="flex">
        <TheNavMenu class="w-200px mr-50px" />
        <router-view />
      </div>
    </el-card>
  </div> -->
  <div class="w-screen h-screen flex flex-col p-20px">
    <TheHeaderMenu class="mb-20px" />
    <div class="card h-1px flex-grow flex pl-0">
      <TheNavMenu />
      <div class="w-full h-full overflow-auto pl-20px">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style></style>
