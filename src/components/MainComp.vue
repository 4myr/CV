<script setup lang="ts">
    const props = defineProps<{
        title: string;
    }>();
</script>
<template>
    <div class="w-full h-full">
      <div class="bg-background-secondary shadow-xl relative p-8 rounded-3xl transition-shadow duration-300 ease-in-out">
        <h1 class="relative text-2xl font-medium before:content-[''] before:w-[42px] before:h-[5px] before:rounded-full before:bg-blue before:absolute before:-bottom-[18px]">{{ props.title }}</h1>
        <div class="mt-10">
            <slot />
        </div>
        </div></div>
</template>