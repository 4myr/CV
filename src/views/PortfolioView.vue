<script setup lang="ts">
import { ref } from "vue";
import MainComp from "../components/MainComp.vue";

type FullScreenImageProps = {
  show: boolean;
  image: string;
  isOnTransition: boolean;
}

const fullScreenImage = ref<FullScreenImageProps>({
  show: false,
  image: '',
  isOnTransition: false
})

const openFullScreenImage = (src: string) => {
  fullScreenImage.value.image = '';
  fullScreenImage.value.image = src;
  fullScreenImage.value.show = true;
}
const hideFullScreenContainer = () => {
  fullScreenImage.value.isOnTransition = true;
  fullScreenImage.value.show = false
  setTimeout(() => fullScreenImage.value.isOnTransition = false, 300)
}
</script>

<template>
  <MainComp title="نمونه‌کارها">
    <div class="flex gap-12 md:gap-4 flex-wrap justify-center lg:justify-start">
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/looptori.png')">
          <img src="/images/logos/looptori-logo.png">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک (NextJS/NestJS)</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/nftno.png')">
          <img src="/images/logos/nftno-logo-alt.png">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">انفتینو</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/bitgap.png')">
          <img src="/images/logos/bitgap-logo.webp">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">بیت گپ</h4>
          <span class="opacity-75 text-xs">توسعه فول استک (ریدیزاین)</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/vhotel.png')">
          <img src="/images/portfolio/vhotel-landing.png">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">رزرواسیون مرکزی وی هتل</h4>
          <span class="opacity-75 text-xs">توسعه فول استک (Laravel)</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/emenservice-app.png')">
          <img src="/images/portfolio/emenservice-app.png">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">ایمن سرویس</h4>
          <span class="opacity-75 text-xs">توسعه بک اند (Laravel)</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/bookingpersia-app.png')">
          <img src="/images/portfolio/bookingpersia-landing.jpeg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">بوکینگ پرشیا</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/afranetserver.jpeg')">
          <img src="/images/logos/afranetserver-logo.png">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">افرانت سرور</h4>
          <span class="opacity-75 text-xs">توسعه فرانت اند</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/yemusic.jpeg')">
          <img src="/images/portfolio/yemusic.jpeg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">یه موزیک</h4>
          <span class="opacity-75 text-xs">توسعه فرانت اند HTML/CSS, WordPress</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/epoly.jpeg')">
          <img src="/images/portfolio/epoly.jpeg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">ربات تلگرام سریال epoly</h4>
          <span class="opacity-75 text-xs">توسعه بک اند PHP/Python</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('/images/portfolio/server-bot.jpeg')">
          <img src="/images/portfolio/server-bot.jpeg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">ربات تلگرام مدیریت (اتوماسیون) سرور</h4>
          <span class="opacity-75 text-xs">توسعه بک اند PHP/Python</span>
        </figcaption>
      </figure>
    <div :style="``" :class="`grid-image-full ${fullScreenImage.show || fullScreenImage.isOnTransition ? 'w-screen h-screen' : 'w-0 h-0'}`" @click="hideFullScreenContainer()">
      <img :class="`duration-300 ${fullScreenImage.show ? 'scale-100 opacity-100' : ' scale-0 opacity-0'}`" :src="fullScreenImage.image" />
    </div>
</div>
  </MainComp>
</template>

<style>
  .grid-image-full {
    @apply fixed bg-background-secondary top-0 right-0 z-[999] flex flex-col justify-center items-center
  }
  .grid-image-full img {
    @apply w-3/4 lg:w-1/2 h-auto max-w-md max-h-[80%] object-scale-down
  }
  .grid-image {
    @apply w-[260px] h-[240px] max-w-[260px] max-h-[240px] overflow-hidden rounded-2xl cursor-pointer
  }
  .grid-image img {
    @apply hover:scale-110 transition-transform duration-500 w-full h-full
  }
</style>