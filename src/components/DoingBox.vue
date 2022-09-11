<script setup lang="ts">
    const props = defineProps<{
        title: string;
        image: string;
        description: string;
    }>();
</script>

<template>
    <div class="flex justify-center items-start gap-8 bg-box p-6 rounded-xl">
        <img width="40" height="40" :src="props.image" />
        <div class="flex-1 flex flex-col items-start gap-2">
            <h3 class="font-bold">{{ props.title }}</h3>
            <p class="text-sm">{{ props.description }}</p>
        </div>
    </div>
</template>