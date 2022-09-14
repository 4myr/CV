<script setup lang="ts">
import MainComp from "../components/MainComp.vue";
import DoingBox from "../components/DoingBox.vue";
import ClientBox from "../components/ClientBox.vue";
</script>

<template>
  <MainComp title="درباره‌ی من">
    <div class="flex flex-col gap-8">
      <p class="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      
      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-lg">کارهایی که من انجام می‌دهم</h2>
        <div class="grid grid-cols-2 gap-4">
          <DoingBox title="توسعه سمت سرور" image="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
          <DoingBox title="توسعه سمت سرور" image="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
          <DoingBox title="توسعه سمت سرور" image="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
          <DoingBox title="توسعه سمت سرور" image="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" />
        </div>
      </div>


      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-lg">مشتریان من</h2>
        <div class="flex justify-start items-center gap-4 w-full overflow-scroll pb-2 md:overflow-hidden md:flex-wrap">
          <ClientBox image="https://bitbarg.com/_next/static/media/header-logo.18e678a4.svg" />
          <ClientBox title="بیت برگ" image="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" />
        </div>
      </div>
    </div>
  </MainComp>
</template>
