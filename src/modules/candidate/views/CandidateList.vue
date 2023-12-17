<template>
  <div class="content flex flex-row ">
    <div class="candidate-list p-20 h-full border-r-2 ">
      <div class="titles flex flex-col gap-1 mb-8">
        <p class="form-title text-2xl font-bold">Список кандидатов</p>
        <p class="form-subtitle text-base text-gray-400">Найдите своего идеального кандидата</p>
      </div>
      <div
        v-for="(candidate, index) in candidates"
        :key="index"
        class="candidate-short-info mb-5 p-3 rounded-lg flex flex-row gap-4"
        @click="toggleSelectCandidate(candidate.fullName)"
        :class="{ 'selected': selectedCandidate === candidate.fullName }"
      >
        <div class="avatar items-center">
          <img :src="imageLink" class="rounded-full" width="60" height="60">
        </div>
        <div class="flex flex-col gap-0 justify-center">
          <p class="m-0 candidate-name text-lg font-medium">{{ candidate.fullName }}</p>
          <p class="m-0 candidate-position text-sm text-gray-400">{{ candidate.position }}</p>
        </div>
      </div>
    </div>
    <div class="right-part px-28 py-20">
      <div class="candidate-card">
        <div class="header mb-10">
          <div class="flex flex-col gap-1 justify-center ">
            <p class="m-0 candidate-name text-3xl font-semibold">Создание заявки</p>
            <p class="m-0 candidate-position text-lg text-gray-400">Позиция: Инженер-техник</p>
          </div>
        </div>
        <CandidateCard :candidate-id="selectedCandidate"/>
      </div>
      <VacancyForm></VacancyForm>



    </div>


  </div>





</template>
<script lang="ts" setup>
import { ref } from 'vue';

import { useToast } from "primevue/usetoast";
import PButton from 'primevue/button'

import CandidateCard from './CandidateCard.vue';
import VacancyForm from '@/modules/vacancy/views/VacancyForm.vue';

const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const activeStepIndex = ref(0)
const steps = ref([1,2,3])
const value = ref('+7 707 332 6766');
const value2 = ref('test');


const selectedCity = ref();
const cities = ref([
    { name: 'Безопасность', code: 'security' },
    { name: 'Комплаенс', code: 'compliance' },

]);

const selectedCandidate = ref('');


function toggleSelectCandidate(userId: string) {
  if (selectedCandidate.value === userId) {
    selectedCandidate.value = ''; // Deselect if already selected
  } else {
    selectedCandidate.value = userId; // Select if not selected
    // Perform actions with the selected full name here
    console.log("Selected candidate:", userId);
  }
}

const candidates = ref([
  {
    fullName: 'Хабиб Нурмагомедов',
    position: 'Профессиональный боец',
    id: 'test-1'
  },
  {
    fullName: 'Александр Усик',
    position: 'Чемпион по боксу',
    id: 'test-2'
  },
  {
    fullName: 'Криштиану Роналду',
    position: 'Профессиональный футболист',
    id: 'test-3'
  },
  {
    fullName: 'Серена Уильямс',
    position: 'Профессиональный теннисист',
    id: 'test-4'
  },
  {
    fullName: 'Лионель Месси',
    position: 'Футбольный игрок',
    id: 'test-5'
  },
  {
    fullName: 'Майк Тайсон',
    position: 'Профессиональный боксер',
    id: 'test-6'
  },
  {
    fullName: 'Рафаэль Надаль',
    position: 'Теннисист',
    id: 'test-7'
  },
  {
    fullName: 'Флойд Мейвезер',
    position: 'Профессиональный боксер',
    id: 'test-8'
  },
  {
    fullName: 'Новак Джокович',
    position: 'Профессиональный теннисист',
    id: 'test-9'
  },
  {
    fullName: 'Карлос Менсия',
    position: 'Профессиональный футболист',
    id: 'test-10'
  },
]);

const imageLink = 'data:image/jpeg;base64,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'


</script>
<style scoped>

.candidate-list {
  background-color: #f9fbfc;
}
.p-inputtext{
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 2px 0px;
}
.selected {
  /* Add styles for a selected div */
  /* For example, changing background color */
  background-color: #FFFFFF;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  /* You can add more styles to indicate selection */
}
</style>
