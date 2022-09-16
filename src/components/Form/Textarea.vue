<script setup lang="ts">
    const { name, placeholder, rows } = defineProps<{
        placeholder: string;
        name: string;
        rows?: number
    }>();
</script>
<template>
    <div class="relative">
        <textarea :name="name" :placeholder="placeholder" :rows="rows" class="textarea"></textarea>
    </div>
</template>

<style>
.textarea {
  @apply w-full px-5 pt-3 rounded-2xl bg-box focus:outline-0 focus:border focus:border-blue
}
</style>