<script lang="ts" setup>
import TheNavMenu from './components/TheNavMenu.vue'
import TheHeaderMenu from './components/TheHeaderMenu.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<!-- <script>
import TheNavMenu from './components/TheNavMenu.vue'
import TheHeaderMenu from './components/TheHeaderMenu.vue'

export default {
  name: 'App',
  components: {
    TheNavMenu,
    TheHeaderMenu,
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script> -->

<template>
  <div class="w-screen h-screen" v-if="route.name == 'Login'">
    <router-view />
  </div>

  <div class="w-screen h-screen flex flex-col p-20px" v-else>
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
