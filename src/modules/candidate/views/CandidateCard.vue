<template>

        <div class="candidate-data flex flex-row gap-12">
          <div class="flex flex-col gap-2">
              <label for="fatherName" class='text-base'>ФИО</label>
              <PInputText class="rounded-lg" id="fatherName" v-model="props.candidateId" raised disabled="true"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="position">Позиция</label>
              <PInputText class="rounded-lg" id="position" v-model="value2" raised disabled="true" placeholder="Инженер"/>
            </div>
          <div class="flex flex-col gap-2">
              <label for="department">Отдел</label>
              <PInputText class="rounded-lg" id="department" v-model="value2" raised disabled="true" placeholder="Внутреняя разработка"/>
          </div>
          <div class="flex flex-col gap-2">
              <label for="phoneNum">Номер телефона</label>
              <PInputMask class="rounded-lg" v-model="value" date="phone" id="phoneNum" mask="(+9) 999-999-99-99" placeholder="(+7) " disabled="true"/>
          </div>
        </div>



</template>
<script lang="ts" setup>
import PInputText from 'primevue/inputtext';
import PInputMask from 'primevue/inputmask';

import PButton from 'primevue/button'

import { ref } from 'vue';

const value = ref('');
const value2 = ref('');

const props = defineProps({
  candidateId: {
    type: String,
    default: null,
  },
})

</script>
<style scoped>

.form {
  box-shadow: rgba(156, 163, 170, 0.2) 0px 8px 24px;
}
.p-inputtext{
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 2px 0px;
  }
</style>
