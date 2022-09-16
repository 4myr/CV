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
    <div :style="``" :class="`grid-image-full ${fullScreenImage.show || fullScreenImage.isOnTransition ? 'w-screen h-screen' : 'w-0 h-0'}`" @click="hideFullScreenContainer()">
      <img :class="`duration-300 ${fullScreenImage.show ? 'scale-100 opacity-100' : ' scale-0 opacity-0'}`" :src="fullScreenImage.image" />
    </div>
    <div class="flex gap-4 flex-wrap">
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('https://art-template.ru/vcard1/assets/img/image_01.jpg')">
          <img src="https://art-template.ru/vcard1/assets/img/image_01.jpg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('https://art-template.ru/vcard1/assets/img/image_01.jpg')">
          <img src="https://art-template.ru/vcard1/assets/img/image_01.jpg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('https://art-template.ru/vcard1/assets/img/image_01.jpg')">
          <img src="https://art-template.ru/vcard1/assets/img/image_01.jpg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('https://art-template.ru/vcard1/assets/img/image_01.jpg')">
          <img src="https://art-template.ru/vcard1/assets/img/image_01.jpg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
      <figure class="flex flex-col gap-3 my-2">
        <div class="grid-image" @click="openFullScreenImage('https://art-template.ru/vcard1/assets/img/image_01.jpg')">
          <img src="https://art-template.ru/vcard1/assets/img/image_01.jpg">
        </div>
        <figcaption class="flex flex-col gap-1">
          <h4 class="font-semibold text-sm">لوپ طوری</h4>
          <span class="opacity-75 text-xs">توسعه فول استک</span>
        </figcaption>
      </figure>
</div>
  </MainComp>
</template>

<style>
  .grid-image-full {
    @apply fixed bg-background-secondary top-0 right-0 z-10 flex flex-col justify-center items-center
  }
  .grid-image-full img {
    @apply w-1/2 h-auto
  }
  .grid-image {
    @apply w-[260px] h-[176px] max-w-[260px] max-h-[176px] overflow-hidden rounded-2xl cursor-pointer
  }
  .grid-image img {
    @apply hover:scale-110 transition-transform duration-500 w-full h-full
  }
</style>