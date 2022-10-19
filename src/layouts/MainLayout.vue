<script setup>
    import SidebarComp from '../components/SidebarComp.vue';
    import MainComp from '../components/MainComp.vue';
</script>

<template>
  <main class="pt-40 pb-20 w-full px-2 mx-auto">
    <div class="flex flex-col md:flex-row mx-2 gap-6">
        <SidebarComp />
        <slot />
    </div>
  </main>
</template>

<style>
@media (min-width: 1200px) {
  main {
    @apply max-w-[1240px];
  }
}
</style>
