
<script setup lang="ts">
    import { onBeforeUnmount, onMounted, ref, computed } from "vue";
    import {isMobile} from '../common/helpers/helper'

    const props = defineProps<{
        title: string;
    }>();

    const menuIsActive = ref(false);
    const menuIsReady = ref(false);

    const inMobile = window.innerWidth < 768;
    const toggleMenu = () => {
        menuIsActive.value = !menuIsActive.value
    }

    const menuItems = [
        { title: 'درباره‌من', path: '/' },
        { title: 'رزومه', path: '/resume' },
        { title: 'نمونه‌کارها', path: '/portfolio' },
        { title: 'تماس', path: '/contact' }
    ];

    onBeforeUnmount(() => {
        menuIsActive.value = false
    })
    onMounted(() => {
        setTimeout(() => {
            menuIsReady.value = true   
        }, 700)
    })
</script>
<template>
    <div class="w-full h-full">
      <div class="bg-background-secondary shadow-xl md:relative p-8 rounded-3xl transition-shadow duration-300 ease-in-out">
        <div v-if="menuIsReady" class="fixed md:absolute m-[16px] md:m-0 right-0 md:right-auto md:left-0 top-0 z-50">
            <div :class="`parent-menu bg-blue ${menuIsActive ? 'is-active' : ''} p-4 px-5 w-[40px] md:w-auto md:min-w-[60px] h-[40px] md:h-[60px] rounded-[60px] md:rounded-tl-[50px] flex justify-center items-center`">
                <div :class="`flex ${menuIsActive && 'gap-12'}`">
                    <div :class="`flex justify-center items-center ${inMobile && 'mobile-menu-list'} $ ${menuIsActive ? 'is-active' : ''}`">
                        <ul :class="`menu-list float-right flex justify-center items-center gap-8 px-10 overflow-hidden ${menuIsActive ? 'w-[350px]' : 'md:w-0 px-0'} duration-700 transition-all`">
                            <li v-for="item in menuItems" :key="item.title">
                                <router-link :to="item.path">{{ item.title }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <button @click="toggleMenu" :class="`float-left menu pt-[5px] ${menuIsActive ? 'is-active pt-0' : ''}  md:pt-[3px] pr-[2px]`">
                        <div class="line w-[18px] md:w-[24px]" />
                        <div class="line w-[14px] md:w-[20px]" />
                        <div class="line w-[18px] md:w-[24px]" />
                    </button>
                </div>
            </div>
        </div>
        <h1 class="relative text-2xl font-bold before:content-[''] before:w-[42px] before:h-[5px] before:rounded-full before:bg-blue before:absolute before:-bottom-[18px]">{{ props.title }}</h1>
        <div class="mt-10">
            <transition name="scale" mode="out-in">
                <slot />
            </transition>
        </div>
        </div></div>
</template>

<style>
    .mobile-menu-list {
        @apply w-screen h-screen fixed top-0 right-0 bg-background-secondary flex justify-center items-center translate-x-full transition-all
    }
    .mobile-menu-list.is-active {
        @apply !translate-x-0
    }
    .mobile-menu-list > .menu-list {
        @apply flex-col
    }
    .desktop-menu-list {
        @apply bg-red-400
    }
    .line {
        @apply bg-white rounded-full h-[2px] md:h-[3px] transition-all duration-500
    }
    .menu {
        @apply cursor-pointer flex flex-col gap-1 items-start md:items-end
    }
    .menu.is-active > .line {
        @apply bg-blue md:bg-white
    }

    .parent-menu.is-active {
        @apply bg-transparent border border-blue md:border-0 md:bg-blue
    }

    .menu.is-active .line:nth-child(1) {
        @apply rotate-45 translate-y-[6px]
    }
    .menu.is-active .line:nth-child(2) {
        @apply rotate-45 opacity-0
    }
    .menu.is-active .line:nth-child(3) {
        @apply -rotate-45 -translate-y-[6px] md:-translate-y-[8px]
    }
    .menu-list li a {
        @apply opacity-70
    }
    .menu-list .router-link-active {
        @apply opacity-100
    }
</style>