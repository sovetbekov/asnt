<template>
  <form class="vacancy-form my-10 flex flex-row gap-10">
     <PDropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Выберите направление проверки" />
  <PFileUpload chooseLabel="Загрузить резюме" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" outlined/>
    <PButton label="Отправить заявку" severity="success"/>
  </form>
 </template>
<script lang="ts" setup>
import { ref } from 'vue';

import PInputText from 'primevue/inputtext';
import PInputMask from 'primevue/inputmask';
import PButton from 'primevue/button'
import PFileUpload from 'primevue/fileupload';
import PDropdown from 'primevue/dropdown'
import { useToast } from "primevue/usetoast";

const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};


const selectedCity = ref();
const cities = ref([
    { name: 'Безопасность', code: 'security' },
    { name: 'Комплаенс', code: 'compliance' },

]);
</script>
<style scoped>

.p-inputtext{
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 2px 0px;
}

</style>
