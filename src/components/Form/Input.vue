<script setup lang="ts">
    const { name, type, placeholder, icon } = defineProps<{
        placeholder: string;
        name: string;
        type: 'email' | 'text';
        icon?: string;
    }>();
</script>
<template>
    <div class="relative">
        <input :name="name" :type="type" :placeholder="placeholder" class="input" />
        <div v-if="!!icon" class="absolute top-0 left-5 flex justify-center items-center h-full">
            <i :class="`font-icon ${icon} text-lg`" />
        </div>
    </div>
</template>

<style>
.input {
  @apply w-full h-[54px] px-5 rounded-2xl bg-box outline-0 focus:border focus:border-blue
}
</style>