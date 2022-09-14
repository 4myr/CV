<script setup lang="ts">
import MainComp from "../components/MainComp.vue";
import SkillProgress from "../components/SkillProgress.vue";
</script>

<template>
  <MainComp title="رزومه">
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-12 pt-2">
        <div class="flex flex-col gap-8 justify-center items-start">
          <div class="flex items-center gap-4">
            <img src="https://art-template.ru/vcard1/assets/icons/dark/icon-education.svg" width="40" height="40" />
            <h2 class="text-xl font-semibold">تحصیلات</h2>
          </div>
          <div class="timeline relative">
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm text-white opacity-75">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm text-white opacity-75">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
          </div>
        </div>
        <div class="flex flex-col gap-8 justify-center items-start">
          <div class="flex items-center gap-4">
            <img src="https://art-template.ru/vcard1/assets/icons/dark/icon-experience.svg" width="40" height="40" />
            <h2 class="text-xl font-semibold">سوابق شغلی</h2>
          </div>
          <div class="timeline relative">
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm text-white opacity-75">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن 1399 - الان</span>
                <p class="text-sm text-white opacity-75">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-12 pt-2">
        <div class="flex flex-col gap-5 justify-start items-start">
          <h2 class="text-xl font-semibold">مهارت‌های Front-End</h2>
          <div class="w-full flex flex-col justify-center items-start gap-4 bg-box p-6 rounded-xl">
            <SkillProgress title="Javascript" :percentage="80" />
            <SkillProgress title="ReactJS" :percentage="60" />
            <SkillProgress title="VueJS" :percentage="30" />
          </div>
          
        </div>
        <div class="flex flex-col gap-5 justify-center items-start">
          <h2 class="text-xl font-semibold">مهارت‌های Back-End</h2>
          <div class="w-full flex flex-col justify-center items-start gap-4 bg-box p-6 rounded-xl">
            <SkillProgress title="PHP" :percentage="90" />
            <SkillProgress title="Laravel" :percentage="85" />
            <SkillProgress title="NestJS" :percentage="60" />
          </div>
        </div>
      </div>
    </div>
  </MainComp>
</template>

<style>
  .timeline > article {
    @apply border-r border-opacity-20 border-white pr-6 mr-2 pb-6
  }
  .timeline > article:last-child {
    @apply border-0
  }
  .timeline > article:before {
    box-shadow: 0 0 0 0.1875rem rgb(13 134 255 / 25%);
    @apply content-[''] bg-blue absolute rounded-full right-[3.5px] w-[10px] h-[10px]
  }
</style>