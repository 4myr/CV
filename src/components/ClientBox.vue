<script setup lang="ts">
    const props = defineProps<{
        title?: string;
        image: string;
        link?: string
    }>();
</script>

<template>
    <a :href="link || '#'" :target="link ? '_blank' : ''" class="flex justify-center items-center gap-3 p-2 min-w-fit">
        <img v-if="!!props.title" width="28" height="28" :src="props.image" />
        <img v-else class="max-w-fit h-[32px]" :src="props.image" />
        <h3 v-if="!!props.title" class="font-medium text-sm">{{ props.title }}</h3>
    </a>
</template>