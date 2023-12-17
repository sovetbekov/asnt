<template>

  <div class="content flex flex-row">
      <div class="basis-4/12">
        <img class="p-10" src="@/assets/logo.png" width="350">
      </div>


      <div class="form-body flex flex-col gap-8 my-8 bg-white rounded-lg basis-4/12 p-28">
        <div class="titles flex flex-col gap-1">
            <p class="form-title text-2xl font-bold">Создание карточки кандидата</p>
            <p class="form-subtitle text-base text-gray-400">Найдите своего идеального кандидата</p>
        </div>
        <div class="initials flex flex-row gap-8">
          <div class="flex flex-col gap-2">
            <label for="lastName">Фамилия</label>
            <PInputText class="rounded-lg" id="lastName" v-model="value" raised size="small"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="firstName">Имя</label>
              <PInputText class="rounded-lg" id="firstName" v-model="value" raised size="small"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="fatherName">Отчество</label>
              <PInputText class="rounded-lg" id="fatherName" v-model="value" raised size="small"/>
          </div>
        </div>
        <div class="flex flex-col gap-2">
            <label for="position">Позиция</label>
            <PInputText class="rounded-lg" id="position" v-model="value" raised size="small"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="department">Отдел</label>
              <PInputText class="rounded-lg" id="department" v-model="value" raised size="small"/>
          </div>



        <div class="flex flex-col gap-2">
            <label class="text-base" for="email">Почта</label>
            <PInputText class="rounded-lg" id="email" v-model="value" type="email" size="small"/>
        </div>

        <div class="flex flex-col gap-2">
            <label for="phoneNum">Номер телефона</label>
            <PInputMask class="rounded-lg" v-model="value2" date="phone" id="phoneNum" mask="(+9) 999-999-99-99" placeholder="(+7) " />
        </div>

        <div class="flex flex-col gap-2">
            <label for="password">Пароль</label>
            <PInputText class="rounded-lg" id="password" v-model="value" raised size="small"/>
        </div>

        <PButton class="mt-4" label="Создать" raised></PButton>

      </div>
      <div class="basis-4/12">
      </div>

  </div>

  <div class="footer flex flex-row pb-10 justify-center">
    <p class="text-base text-gray-400"> © 2023 kmg.kz</p>
  </div>



</template>
<script lang="ts" setup>
import PInputText from 'primevue/inputtext';
import PInputMask from 'primevue/inputmask';

import PButton from 'primevue/button'

import { ref } from 'vue';

const value = ref(null);
const value2 = ref('');



</script>
<style scoped>

.form {
  box-shadow: rgba(156, 163, 170, 0.2) 0px 8px 24px;
}
.p-inputtext{
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 2px 0px;
  }
</style>
