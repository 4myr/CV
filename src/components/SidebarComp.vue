<script setup>
    import Badge from './Badge.vue'
</script>

<template>
  <aside class="min-w-[300px] w-[300px] h-full">
    <div class="bg-background-secondary shadow-xl relative p-8 rounded-3xl transition-shadow duration-300 ease-in-out">
        <img class="w-[180px] h-[180px] -mt-32 mb-8 mx-auto rounded-3xl" src="/me.jpg" />
        <div class="flex flex-col gap-7 justify-center items-start">
            <div class="w-full text-center flex flex-col justify-center items-center gap-4">
                <h3 class="text-2xl"><span class="font-bold">امیرحسین</span> حسن زاده</h3>
                <Badge variant="dark">توسعه دهنده</Badge>
                <div>Social Icons</div>
            </div>
            <ul class="flex flex-col gap-2 justify-center items-start">
                <li class="flex justify-start items-center gap-2">
                    <span>i</span>
                    <span>21 فروردین 1379</span>
                </li>
                <li class="flex justify-start items-center gap-2">
                    <span>i</span>
                    <span>21 فروردین 1379</span>
                </li>
                <li class="flex justify-start items-center gap-2">
                    <span>i</span>
                    <span>21 فروردین 1379</span>
                </li>
            </ul>
            <a class="shadow-xl bg-blue text-white w-full rounded-2xl py-4 text-center flex justify-center items-center gap-2">
                <i>i</i>
                <span>دانلود CV</span>
            </a>
        </div>
    </div>
  </aside>
</template>