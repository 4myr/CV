<script setup>
    import SidebarComp from '../components/SidebarComp.vue';
    import MainComp from '../components/MainComp.vue';
    import { ref, onMounted, onBeforeUnmount } from "vue";

    const pageIsReady = ref(true);

    onMounted(() => {
        pageIsReady.value = true;
    })

    onBeforeUnmount(() => {
        pageIsReady.value = false;
    })
  
</script>

<template>
  <main :class="`pt-40 pb-20 w-full px-2 mx-auto ${pageIsReady && 'ready'}`">
    <!-- <div class="loader">
      <div class="load-text">
        <div class="loaded-text">H</div>
        <div class="loading-text">ello, World!</div>
      </div>
    </div> -->
    <div class="layout">
        <SidebarComp />
        <slot />
    </div>
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Staatliches');


  .loader {
    @apply bg-background-secondary w-full h-screen left-0 top-0 fixed z-[99999] flex justify-center items-center text-white min-h-screen;
    font-family: 'Staatliches', cursive;
    direction: ltr;
    box-sizing: border-box;
    animation: fadeOut 1s linear 0.7s forwards;
  }

  .load-text {
    @apply absolute text-[6vmax] w-fit flex;
    animation: colorChange .5s linear 3s forwards;
  }

  .loaded-text {
    /* @apply scale-150; */
    /* animation: scaleText .2s linear .2s forwards; */
  }

  .loading-text {
    @apply w-0 overflow-hidden whitespace-nowrap;
    animation: expand 0.3s linear 0.2s forwards;
  }

  @keyframes scaleText {
    from {
      @apply scale-150;
    }
    to {
      @apply scale-100;
    }
  }

  @keyframes expand {
    from {
      @apply w-0;
    }
    to {
      @apply w-[28vmax];
    }
  }

  @keyframes colorChange {
    from {
      @apply text-background-secondary;
    }
    to {
      @apply text-white;
    }
  }

  @keyframes fadeOut {
    from {
      @apply opacity-100;
    }
    to {
      @apply opacity-0 z-[-1];
    }
  }

  main > .layout {
    @apply hidden;
  }
  main.ready > .layout {
    @apply flex flex-col md:flex-row mx-2 gap-6;
  }

  .loading {

  }
  @media (min-width: 1200px) {
    main {
      @apply max-w-[1240px];
    }
  }
</style>
