
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
            <div :class="`bg-blue p-4 px-5 min-w-[60px] h-[60px] rounded-[60px] rounded-tl-[50px] flex justify-center items-center`">
                <div class="gap-12">
                    <ul :class="`float-right flex justify-center items-center gap-8 px-10 overflow-hidden ${menuIsActive ? 'w-[350px]' : 'w-0 px-0'} duration-700 transition-all`">
                        <li><router-link to="/">درباره‌من</router-link></li>
                        <li><router-link to="/resume">رزومه</router-link></li>
                        <li><router-link to="/portfolio">نمونه‌کارها</router-link></li>
                        <li><router-link to="/contact">تماس</router-link></li>
                    </ul>
                    <button @click="toggleMenu" :class="`float-left menu ${menuIsActive ? 'is-active' : ''} pt-[3px] pr-[2px]`">
                        <div class="line w-[24px]" />
                        <div class="line w-[20px]" />
                        <div class="line w-[24px]" />
                    </button>
                </div>
            </div>
        </div>
        <h1 class="relative text-2xl font-bold before:content-[''] before:w-[42px] before:h-[5px] before:rounded-full before:bg-blue before:absolute before:-bottom-[18px]">{{ props.title }}</h1>
        <div class="mt-10">
            <slot />
        </div>
        </div></div>
</template>

<style>
    .line {
        @apply bg-white rounded-full h-[3px] transition-all duration-500
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
    li a {
        @apply opacity-70
    }
    .router-link-active {
        @apply opacity-100
    }
</style>