<script setup lang="ts">
    const props = defineProps<{
        title?: string;
        image: string;
    }>();
</script>

<template>
    <div class="flex justify-center items-center gap-3 p-2 min-w-fit">
        <img v-if="!!props.title" width="32" height="32" :src="props.image" />
        <img v-else class="w-fit h-[32px]" :src="props.image" />
        <h3 v-if="!!props.title" class="font-medium">{{ props.title }}</h3>
    </div>
</template>