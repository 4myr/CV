<script setup lang="ts">
    const props = defineProps<{
        variant: 'dark' | 'light'
    }>();

    let classNames = ['text-sm rounded-full px-3 py-1 w-fit mx-auto'];
    if (props.variant === 'dark') {
        classNames.push('bg-background-primary text-white');
    }
</script>

<template>
    <div :class="classNames.join(' ')">
        <slot />
    </div>
</template>