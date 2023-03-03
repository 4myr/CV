<script setup lang="ts">
import MainComp from "../components/MainComp.vue";
import Input from "../components/Form/Input.vue";
import Textarea from "../components/Form/Textarea.vue";
import Button from "../components/Form/Button.vue";
</script>

<template>
  <MainComp title="تماس">
    <div class="flex flex-col gap-7">
      <iframe class="w-full h-[360px] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.658199507566!2d51.4447980151116!3d35.68541728019332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e02122b4dcd3b%3A0xe214e535ec788dc!2sTehran%20Province%2C%20Tehran%2C%20Hefdah%20Shahrivar%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1663311978311!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />  
      <div class="flex flex-col gap-4">
        <h2 class="font-bold text-xl">فرم تماس</h2>
        <form class="grid grid-cols-2 gap-5">
          <Input name="name" type="text" placeholder="نام و نام خانوادگی" icon="icon-user" />
          <Input name="email" type="email" placeholder="ایمیل" icon="icon-envelope" />
          <Textarea name="message" placeholder="پیام" :rows="5" class="col-span-2" />
          <Button class="left-0 col-span-2 md:col-span-1 !col-end-3" icon="icon-send" disabled>ارسال پیام</Button>
        </form>
      </div>
    </div>
  </MainComp>
</template>
