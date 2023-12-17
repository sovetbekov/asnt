<template>
  <div class="content p-16 min-h-screen dark:bg-neutral-900 dark:text-gray-100">
    <HeaderTemplate @theme-value="getThemeValue" />
    <div
      v-motion-slide-top
      class="slogan text-3xl md:text-5xl font-semibold px-4 md:px-40 pt-8 md:pt-32 mb-12 md:mb-32"
    >
      ASNT - ваша надежность в промышленной безопасности и профессиональном обучении.
    </div>
    <div v-motion-slide-left class="sponsors px-4 md:px-40 mb-12 md:mb-32">
      <div class="text-base md:text-lg text-neutral-500 mb-2">Нам доверяют:</div>
      <ul class="flex md:flex-row gap-3 md:gap-5 items-center">
        <li>
          <img src="../assets/samruk.png" width="80" class="md:w-100" />
        </li>
        <li>
          <img src="../assets/erg.png" width="80" class="md:w-100 rounded-full" />
        </li>
        <li>
          <img src="../assets/kmg.png" width="80" class="md:w-100" />
        </li>
        <li>
          <img src="../assets/tco.png" width="80" class="md:w-100" />
        </li>
      </ul>
    </div>
    <div v-motion-slide-right class="services mx-4 md:mx-10 lg:mx-28 p-4 md:p-6 lg:p-10 mb-8 md:mb-12">
      <div class="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 dark:text-white text-black">Наши услуги</div>

      <div class="li flex flex-col md:flex-row gap-4 md:gap-10">
        <div class="service-item bg-[#5ecca0] p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg">
          <i class="pi pi-book text-lg md:text-xl" />
          <div class="text-base md:text-lg font-medium">Экспертиза промышленной безопасности</div>
        </div>

        <div class="service-item bg-neutral-800 p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-white">
          <i class="pi pi-box text-lg md:text-xl" />
          <div class="text-base md:text-lg font-medium">
            Подготовка, переподготовка и повышение квалификации по Промышленной безопасности.
          </div>
        </div>

        <div class="service-item bg-[#cb9bfa] p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-black">
          <i class="pi pi-qrcode text-lg md:text-xl" />
          <div class="text-base md:text-lg font-medium">Неразрушающий контроль</div>
        </div>

        <div class="service-item bg-[#f8fd91] p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-black">
          <i class="pi pi-file text-lg md:text-xl" />
          <div class="text-base md:text-lg font-medium">
            Подготовка и аттестация персонала в области Безопасности и Охраны Труда (БиОТ)
          </div>
        </div>
      </div>
    </div>

    <div
      class="black-grid p-4 md:p-8 lg:p-10 mx-4 md:mx-10 lg:mx-28 mb-4 md:mb-8 rounded-lg dark:text-black text-white bg-neutral-900 dark:bg-white"
    >
      <div
        class="advantages flex flex-col md:flex-row gap-4 md:gap-6 justify-between mx-2 md:mx-4 mt-2 md:mt-3 mb-6 md:mb-12"
      >
        <div class="text-xl md:text-2xl font-semibold">Преимущества ASNT</div>
        <div class="advantage-list flex flex-col gap-3 md:gap-5">
          <div class="advantage flex flex-row gap-2 md:gap-4 items-start">
            <i class="pi pi-arrow-circle-right text-lg md:text-xl" />
            <div class="text-sm md:text-base">
              Имеет все необходимые разрешительные документы согласно требованиям Законам РК.
            </div>
          </div>
          <div class="advantage flex flex-row gap-2 md:gap-4 items-start">
            <i class="pi pi-arrow-circle-right text-lg md:text-xl" />
            <div class="text-sm md:text-base">
              Квалифицированный персонал, имеющий большой опыт в проведении услуг в области промышленной безопасности.
            </div>
          </div>
          <div class="advantage flex flex-row gap-2 md:gap-4 items-start">
            <i class="pi pi-arrow-circle-right text-lg md:text-xl" />
            <div class="text-sm md:text-base">
              Имеет в наличии все необходимые приборы и инструменты для выполнения услуг в области Промышленной
              Безопасности и не разрушающего контроля.
            </div>
          </div>
        </div>
      </div>
      <div class="education p-4 md:p-8 text-black dark:text-white dark:bg-neutral-900 bg-white rounded-lg">
        <div class="edu-header flex flex-col gap-1 items-center">
          <div class="text-xl md:text-2xl font-bold">Обучение</div>
          <div class="text-gray-400 text-sm md:text-base">Наш учебный центр осуществляет:</div>
        </div>
        <div class="edu-list flex flex-col justify-center items-center md:flex-row gap-4 md:gap-10 mt-4 md:mt-10">
          <div
            class="service dark:bg-white bg-neutral-900 p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-white dark:text-black items-center"
          >
            <i class="pi pi-briefcase text-lg md:text-xl" />
            <div class="font-medium text-center text-sm md:text-base">
              Подготовка и аттестация персонала <br />
              в области охраны труда
            </div>
          </div>
          <div
            class="service dark:bg-white bg-neutral-900 p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-white dark:text-black items-center"
          >
            <i class="pi pi-database text-lg md:text-xl" />
            <div class="font-medium text-center text-sm md:text-base">
              Обучение и проверку знаний в области <br />
              пожарной и электро безопасности
            </div>
          </div>
          <div
            class="service dark:bg-white bg-neutral-900 p-4 md:p-6 flex flex-col gap-2 md:gap-4 rounded-lg text-white dark:text-black items-center"
          >
            <i class="pi pi-shield text-lg md:text-xl" />
            <div class="font-medium text-center text-sm md:text-base">
              Обучение и проверку знаний <br />в области электробезопасности
            </div>
          </div>
        </div>
        <div class="edu-format flex flex-col md:flex-row mt-6 md:mt-14 gap-4 md:gap-20 items-center">
          <img src="../assets/teaching.jpg" width="250" class="rounded-lg mb-4 md:mb-0 md:w-370" />
          <div class="description flex flex-col gap-3 text-sm md:text-base">
            <div class="text-xl md:text-2xl font-semibold text-right">Виды Предлагаемых Форм Обучения:</div>
            <div class="text-right">
              Обучение в учебном классе или на месте заказчика. Тренинги и семинары. Преподаватели из центра и
              квалифицированные специалисты. Специально оборудованный учебный класс. Курсы разработаны и утверждены
              министерствами. Учащиеся получают материалы и пособия. Используются авторские слайды и наглядные пособия.
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterTemplate />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HeaderTemplate from '../components/HeaderTemplate.vue'
import FooterTemplate from '../components/FooterTemplate.vue'

const isDarkMode = ref(false)
function getThemeValue(value: boolean) {
  isDarkMode.value = value
}
</script>
<style lang="scss" scoped>
.service {
  box-shadow: rgb(190, 190, 190) 0px 8px 10px -5px;
}
::selection {
  color: white;
  background: #6e6ec5;
}
</style>
