<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
    title: string;
    percentage: number;
}>();

const realPercentage = ref(0);
onMounted(() => {
    setTimeout(() => {
        realPercentage.value = props.percentage;
    }, 200)
})
</script>

<template>
    <div class="bg-background-secondary rounded-xl h-[24px] relative w-full" dir="ltr">
        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" :style='`width: ${realPercentage}%`'>
            <div class="flex items-center justify-between px-2 w-full h-full text-white text-xs">
                <span class="align-middle">{{ props.title }}</span>
                <span class="align-middle">{{ realPercentage }}%</span>
            </div>
        </div>
    </div>
</template>

<style>
    .progress-bar {
        @apply z-10 bg-blue rounded-full relative overflow-hidden w-[0%] h-full transition-all duration-1000
    }
</style>