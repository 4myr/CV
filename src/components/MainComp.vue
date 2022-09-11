
<script setup lang="ts">
    import { ref } from "vue";

    const props = defineProps<{
        title: string;
    }>();

    const menuIsActive = ref(false);

    const toggleMenu = () => {
        menuIsActive.value = !menuIsActive.value
    }
</script>
<template>
    <div class="w-full h-full">
      <div class="bg-background-secondary shadow-xl relative p-8 rounded-3xl transition-shadow duration-300 ease-in-out">
        <div class="absolute left-0 top-0">
            <div class="transition-all transition-width bg-blue p-4 px-5 min-w-[60px] h-[60px] rounded-[50px] rounded-tl-[35px] flex justify-center items-center">
                <div class="flex items-center gap-12">
                    <ul v-if="menuIsActive" class="flex-1 flex justify-center items-center gap-8 px-10">
                        <li>درباره من</li>
                        <li>رزومه</li>
                        <li>نمونه‌کارها</li>
                        <li>بلاگ</li>
                        <li>تماس</li>
                    </ul>
                    <button @click="toggleMenu" :class="`menu ${menuIsActive ? 'is-active' : ''}`">
                        <div class="line w-[24px]" />
                        <div class="line w-[20px]" />
                        <div class="line w-[24px]" />
                    </button>
                </div>
            </div>
        </div>
        <h1 class="relative text-2xl font-medium before:content-[''] before:w-[42px] before:h-[5px] before:rounded-full before:bg-blue before:absolute before:-bottom-[18px]">{{ props.title }}</h1>
        <div class="mt-10">
            <slot />
        </div>
        </div></div>
</template>

<style>
    .line {
        @apply bg-white rounded-full h-[3px]
    }
    .menu {
        @apply cursor-pointer flex flex-col gap-1 items-end
    }

    .menu.is-active .line:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
    }
    .menu.is-active .line:nth-child(2) {
        opacity: 0;
        transform: rotate(45deg);
    }
    .menu.is-active .line:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    .transition-width {
        -webkit-transition: width 1s ease-in-out, padding-left 1s ease-in-out, 
            padding-right 1s ease-in-out;
        -moz-transition: width 1s ease-in-out, padding-left 1s ease-in-out, 
            padding-right 1s ease-in-out;
        -o-transition: width 1s ease-in-out, padding-left 1s ease-in-out, 
            padding-right 1s ease-in-out;
        transition: width 1s ease-in-out, padding-left 1s ease-in-out, 
            padding-right 1s ease-in-out;
    }
</style>