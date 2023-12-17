<template>
  <div class="content flex flex-row justify-between bg-gray-50 min-h-screen gap-60">
    <div class="basis-4/12">
      <!-- <img class="p-10" src="@/assets/logo.png" width="350" /> -->
    </div>
    <div class="form flex flex-col gap-8 basis-4/12 bg-white p-10 my-60 rounded-lg">
      <div class="titles flex flex-col gap-1">
        <p class="form-title text-2xl font-bold">Войти в аккаунт</p>
        <p class="form-subtitle text-base text-gray-400">Добро пожаловать!</p>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-base" for="email">Почта</label>
        <PInputText class="rounded-lg" id="email" v-model="value" type="email" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="username">Пароль</label>
        <PInputText class="rounded-lg" id="username" v-model="value" raised />
      </div>

      <PButton class="mt-4" label="Войти" raised></PButton>
    </div>
    <div class="basis-4/12" />
  </div>
</template>
<script lang="ts" setup>
import PInputText from 'primevue/inputtext'
import PButton from 'primevue/button'

import { ref } from 'vue'

const value = ref(null)
</script>
<style scoped>
.form {
  box-shadow: rgba(156, 163, 170, 0.2) 0px 8px 24px;
}
.p-inputtext {
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 2px 0px;
}
</style>
