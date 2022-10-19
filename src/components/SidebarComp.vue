<script setup>
    import {onMounted, onUnmounted, ref, watch} from 'vue'
    import Badge from './Badge.vue'
    import Button from './Form/Button.vue'

    const windowTop = ref(0);
    const onScroll = (e) => {
        windowTop.value = window.top.scrollY
    }
    onMounted(() => {
        window.addEventListener('scroll', onScroll)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
    const imageStyles = ref('');
    const sidebarStyles = ref('');
    
    watch([windowTop], () => {
        imageStyles.value = windowTop.value > 32 ? 'margin-top: -8px;' : ''
        sidebarStyles.value = windowTop.value > 64 ? 'top: 24px;' : ''
    })
</script>

<template>
  <aside class="min-w-[300px] md:w-[300px] h-full">
    <div :style="sidebarStyles" class="md:fixed bg-background-secondary shadow-xl p-8 rounded-3xl transition-shadow duration-300 ease-in-out">
        <img class="transition-all duration-700 w-[180px] h-[180px] mb-8 mx-auto rounded-3xl -mt-32" :style="imageStyles" src="/me.jpg" />
        <div class="flex flex-col gap-7 justify-center items-start">
            <div class="w-full text-center flex flex-col justify-center items-center gap-4">
                <h3 class="text-2xl"><span class="font-bold">امیرحسین</span> حسن زاده</h3>
                <Badge variant="dark">توسعه دهنده</Badge>
                <div class="flex items-center justify-center gap-3">
                    <a href="https://instagram.com/amyr.dev" target="_blank"><i class="font-icon icon-instagram" /></a>
                    <a href="https://t.me/SudoYUM" target="_blank"><i class="font-icon icon-send" /></a>
                    <a href="https://twitter.com/4myr_ir" target="_blank"><i class="font-icon icon-twitter" /></a>
                    <a href="https://github.com/4myr" target="_blank"><i class="font-icon icon-github" /></a>
                    <a href="https://www.linkedin.com/in/amyrir" target="_blank"><i class="font-icon icon-linkedin2" /></a>
                </div>
            </div>
            <ul class="flex flex-col gap-2 justify-center items-start !text-primary">
                <li class="flex justify-start items-center gap-2">
                    <i class="font-icon icon-calendar" />
                    <span class="text-sm">۲۱ فروردین ۱۳۷۹</span>
                </li>
                <li class="flex justify-start items-center gap-2">
                    <i class="font-icon icon-location" />
                    <span class="text-sm">تهران، ۱۷ شهریور</span>
                </li>
                <li class="flex justify-start items-center gap-2">
                    <i class="font-icon icon-envelope" />
                    <a href="mailto:info@amyr.ir" class="text-sm">info@amyr.ir</a>
                </li>
                <li class="flex justify-start items-center gap-2">
                    <i class="font-icon icon-phone" />
                    <span class="text-sm" dir="ltr">۰۹۱۲۰۲۰۶۸۸۱</span>
                </li>
            </ul>
            <Button icon="icon-download">دانلود CV</Button>
        </div>
    </div>
  </aside>
</template>