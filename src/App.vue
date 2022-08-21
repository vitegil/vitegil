<script lang="ts" setup>
import { useRoute } from 'vue-router'
import TheNavMenu from './components/TheNavMenu.vue'
import TheHeaderMenu from './components/TheHeaderMenu.vue'
import { fullScreenRoutes } from '@/router'

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
  <div v-if="route.name" class="w-screen h-screen">
    <router-view
      v-if="
        fullScreenRoutes
          .map(route => route.name)
          .filter(routeName => routeName)
          .includes(route.name || '')
      "
    />

    <div v-else class="w-full h-full flex flex-col p-20px">
      <TheHeaderMenu class="mb-20px" />
      <div class="card h-1px flex-grow flex pl-0">
        <TheNavMenu />
        <div class="w-full h-full overflow-auto pl-20px">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
