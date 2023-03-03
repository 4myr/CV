<script setup lang="ts">
import MainComp from "../components/MainComp.vue";
import DoingBox from "../components/DoingBox.vue";
import ClientBox from "../components/ClientBox.vue";
</script>

<template>
  <MainComp title="درباره‌ی من">
    <div class="flex flex-col gap-8">
      <div class="text-sm leading-6">
        <p>برنامه نویس Full Stack هستم.</p>
        <p>بیش از 8 سال هست که به عنوان <strong>Backend Developer</strong> با تکنولوژی‌های PHP, Laravel, Javascript و NodeJS و بیش از 3 سال به عنوان <strong>Frontend Developer</strong> با تکنولوژی‌های Typescript, React, Redux و NextJS فعالیت دارم. </p>
        <p>همچنین تا حدودی با <strong>DevOps</strong> آشنایی دارم. </p>
        <p>همواره با عشق ❤️ به دنبال یادگیری و ارتقای مهارت های خودم هستم.</p>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-lg">کارهایی که من انجام می‌دهم</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <DoingBox title="توسعه Backend" image="icons/icon-dev.svg" description="تجربه توسعه سمت سرور با PHP, Laravel, Javascript, NodeJS, Express, NestJS" />
          <DoingBox title="توسعه Frontend" image="icons/icon-dev.svg" description="تجربه توسعه سمت کاربر با Typescript, React, NextJS, Redux, Tailwind, Material UI, VueJS" />
        </div>
      </div>


      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-lg">مشتریان من</h2>
        <div class="flex justify-start items-center gap-2 w-full overflow-scroll pb-2 md:overflow-hidden md:flex-wrap">
          <ClientBox link="https://bitbarg.com" title="بیت برگ" image="/images/logos/bitbarg-logo.webp" />
          <ClientBox link="https://looptori.com" title="لوپ طوری" image="/images/logos/looptori-logo.png" />
          <ClientBox link="https://nftno.io" title="انفتینو" image="/images/logos/nftno-logo.png" />
          <ClientBox href="https://emenservice.com/" title="ایمن سرویس" image="/images/logos/emenservice-logo.png" />
          <ClientBox link="https://samizco.ir" title="میز خدمت سامیز" image="/images/logos/samiz-logo.png" />
          <ClientBox title="ایران مرکز" image="/images/logos/iranmarkaz-logo.jpeg" />
          <ClientBox title="تراویا" image="/images/logos/travia-logo.png" />
          <ClientBox title="بوکینگ پرشیا" image="/images/logos/bookingpersia-logo.jpeg" />
          <ClientBox link="https://vhotel.ir" title="وی‌هتل" image="/images/logos/vhotel-logo.png" />
          <ClientBox title="افرانت سرور" image="/images/logos/afranetserver-logo.png" />

        </div>
      </div>
    </div>
  </MainComp>
</template>
