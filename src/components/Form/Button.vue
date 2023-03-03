<script setup lang="ts">
    const { icon, onClick, className } = defineProps<{
        icon: string;
        className?: string;
        onClick?: () => void;
    }>();

</script>
<template>
    <button @click="onClick" :class="`shadow-xl bg-blue text-white w-full rounded-2xl py-4 px-4 text-center flex justify-center items-center gap-2 ${className}`">
        <i :class="`font-icon ${icon}`" />
        <span>
            <slot />
        </span>
    </button>
</template>