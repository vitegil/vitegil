<template>
  <div class="card h-100px flex justify-between items-center select-none">
    <div class="flex items-center">
      <img src="@/assets/imgs/logo.png" alt="" class="w-16rem mr-3rem">
      <span id="slogan" class="mt-0.8rem subpixel-antialiased truncate">
        Frontend Monitoring Service
      </span>
    </div>
    <!-- <el-avatar
      size="large"
      class="ml-700px"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    /> -->
    <el-avatar
      size="large"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Alex Brush';
  font-style: normal;
  font-weight: normal;
  src: local('Alex Brush'), url('../assets/fonts/AlexBrush-Regular.woff') format('woff');
}

#slogan {
  font-family: 'Alex Brush', serif;
  font-weight: normal;
  font-style: normal;
  font-size: 2.5rem;
  color: #b28330;
}
</style>
