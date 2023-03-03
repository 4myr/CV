<script setup lang="ts">
import MainComp from "../components/MainComp.vue";
import SkillProgress from "../components/SkillProgress.vue";
</script>

<template>
  <MainComp title="رزومه">
    <div class="flex flex-col gap-4">
      <div class="grid md:grid-cols-1 gap-12 pt-2">
        <div class="flex flex-col gap-8 justify-center items-start">
          <div class="flex items-center gap-4">
            <img src="/icons/icon-experience.svg" width="40" height="40" />
            <h2 class="text-xl font-semibold">سوابق شغلی</h2>
          </div>
          <div class="timeline relative">
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">بیت برگ</h5>
                <span class="text-xs text-white opacity-50">آذر ۱۴۰۱ - الان</span>
                <div class="text-xs leading-5">
                  <p>توسعه دهنده Frontend پلتفرم تحت وب <a href="https://bitbarg.com" target="_blank">Bitbarg.com</a></p>
                  <p>توسعه دهنده Full Stack پلتفرم‌های <a href="https://bitbarg.com/bitgap" target="_blank">بیت گپ</a>، <a href="https://bitbarg.com/news" target="_blank">خبر فوری</a> و...</p>
                  <p class="pt-2"><strong>مهارت‌ها: </strong>Clean Architecture · Material UI · Redux · NextJS · Laravel · React · RabbitMQ · TailwindCSS</p>
                </div>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">بیت برگ</h5>
                <span class="text-xs text-white opacity-50">بهمن ۱۴۰۰ - مهر ۱۴۰۱</span>
                <div class="text-xs leading-5">
                  <p>توسعه کامل پلتفرم NFT فارسی nftno.io بر بستر اتریوم و web3 از MVP تا Production</p>
                  <p class="pt-2"><strong>مهارت‌ها: </strong>NextJS · Laravel · Redux · NestJS · Microservices · Typescript · Docker · CI/CD · RabbitMQ · Redis · Web3</p>
                </div>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">راهکارهای هوشمند سامیز</h5>
                <span class="text-xs text-white opacity-50">مرداد ۱۳۹۹ - بهمن ۱۴۰۰</span>
                <div class="text-xs leading-5">
                  <p>توسعه Backend پلتفرم میز خدمت الکترونیک (BPMS)</p>
                  <p>توسعه و Deployment پلتفرم پیمانکاران شرکت پست ایران (<a href="https://post.ir" target="_blank">post.ir</a>)</p>
                  <p>مدیر سیستم (SysAdmin) و DevOps</p>
                  <p>پیاده سازی چرخه CI/CD با استفاده از Jenkins و Gitlab CI</p>
                  <p>فعالیت در محیط متدلوژی Agile (Scrum) و بررسی و تحلیل نیازمندی ها</p>
                  <p class="pt-2"><strong>مهارت‌ها: </strong>Pure-PHP · Unit Testing · CI/CD · Laravel · PHP · Docker · Redis</p>
                </div>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">ایران مرکز (تراویا)</h5>
                <span class="text-xs text-white opacity-50">دی ۱۳۹۸ - فروردین ۱۳۹۹ </span>
                <div class="text-xs leading-5">
                  <p>توسعه سیستم رزرواسیون (هواپیما، قطار، هتل، بیمه)</p>
                  <p class="pt-2"><strong>مهارت‌ها: </strong>Laravel · PHP · jQuery · Bootstrap · Gitlab</p>
                </div>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">آزاد</h5>
                <span class="text-xs text-white opacity-50">دی ۱۳۹۲ - آبان ۱۳۹۸ </span>
                <div class="text-xs leading-5">
                  <p>فعالیت در حوزه‌ی برنامه نویسی بصورت آزاد و Freelance</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="flex flex-col gap-8 justify-start items-start">
          <div class="flex items-center gap-4">
            <img src="/icons/icon-education.svg" width="40" height="40" />
            <h2 class="text-xl font-semibold">تحصیلات</h2>
          </div>
          <div class="timeline relative">
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">دانشگاه فنی و حرفه‌ای شمسی پور</h5>
                <span class="text-xs text-white opacity-50">بهمن ۱۳۹۹ - الان</span>
                <p class="text-sm">مقطع کارشناسی در رشته مهندسی تکنولوژی نرم افزار</p>
              </div>
            </article>
            <article>
              <div class="flex flex-col gap-2">
                <h5 class="text-white opacity-90 text-base font-semibold">دانشگاه آزاد اسلامی - یادگار امام</h5>
                <span class="text-xs text-white opacity-50">بهمن ۱۳۹۶ - بهمن ۱۳۹۸</span>
                <div class="text-xs leading-5">
                  <p class="text-white opacity-75">مقطع کاردانی در رشته کامپیوتر - نرم افزار</p>
                  <p class="text-white opacity-75"><strong>فعالیت مرتبط: </strong>توسعه سمت سرور اپلیکیشن رسمی دانشگاه و مدیریت پروژه</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 pt-2">
        <div class="flex flex-col gap-5 justify-start items-start">
          <h2 class="text-xl font-semibold">مهارت‌های Back-End</h2>
          <div class="w-full flex flex-col justify-center items-start gap-4 bg-box p-6 rounded-xl">
            <SkillProgress title="Typescript" :percentage="70" />
            <SkillProgress title="PHP" :percentage="90" />
            <SkillProgress title="Laravel" :percentage="85" />
            <SkillProgress title="NodeJS" :percentage="60" />
            <SkillProgress title="Express" :percentage="40" />
            <SkillProgress title="NestJS" :percentage="60" />
            <SkillProgress title="Python" :percentage="50" />
            <SkillProgress title="Unit Testing" :percentage="40" />
            <SkillProgress title="MySQL" :percentage="70" />
            <SkillProgress title="Postgres" :percentage="60" />
            <SkillProgress title="TypeORM" :percentage="80" />
            <SkillProgress title="SOLID" :percentage="60" />
            <SkillProgress title="Design Patterns" :percentage="40" />
            <SkillProgress title="Redis" :percentage="80" />
          </div>
        </div>
        <div class="flex flex-col gap-5 justify-start items-start">
          <h2 class="text-xl font-semibold">مهارت‌های Front-End</h2>
          <div class="w-full flex flex-col justify-center items-start gap-4 bg-box p-6 rounded-xl">
            <SkillProgress title="HTML5" :percentage="100" />
            <SkillProgress title="CSS3" :percentage="90" />
            <SkillProgress title="Typescript" :percentage="70" />
            <SkillProgress title="Javascript" :percentage="70" />
            <SkillProgress title="ReactJS" :percentage="80" />
            <SkillProgress title="NextJS" :percentage="80" />
            <SkillProgress title="TailwindCSS" :percentage="80" />
            <SkillProgress title="Material UI" :percentage="50" />
            <SkillProgress title="Redux" :percentage="70" />
            <SkillProgress title="VueJS" :percentage="30" />
            <SkillProgress title="Bootstrap" :percentage="90" />
            <SkillProgress title="jQuery" :percentage="90" />
            <SkillProgress title="Axios" :percentage="90" />
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