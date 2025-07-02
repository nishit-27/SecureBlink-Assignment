<template>
  <div id="app" class="min-h-screen">
    <router-view />
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import Toast from './components/Toast.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.checkAuth()
})
</script>