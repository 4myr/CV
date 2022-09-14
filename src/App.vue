<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
     <transition name="scale" mode="out-in">
          <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>

<style>
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }
  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>