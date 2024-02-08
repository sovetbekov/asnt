<template>
  <div class="content p-20 flex flex-col gap-5">
    <div class="flex flex-row gap-4 items-baseline">
      <p-button icon="pi pi-angle-left" rounded outlined @click="goToHome()" />
      <p class="text-xl">Документы</p>
    </div>
    <p-data-table :value="docs" tableStyle="min-width: 50rem" size="small">
      <template v-for="col of columns" :key="col.field">
        <p-column v-if="col.field === 'downloadLink'" :field="col.field" :header="col.header">
          <template #body="slotProps">
            <p-button rounded icon="pi pi-download" @click="openFile(slotProps.data[col.field])" />
          </template>
        </p-column>
        <p-column v-else :field="col.field" :header="col.header"> </p-column>
      </template>
    </p-data-table>
  </div>
</template>
<script setup lang="ts">
import PDataTable from 'primevue/datatable'
import PColumn from 'primevue/column'
import PButton from 'primevue/button'
import { useRouter } from 'vue-router'

const docs = [
  {
    docName: 'Политика по обеспечению конциденциальности информации',
    downloadLink: 'src/assets/asntDocs/Политика ПО ОБЕСПЕЧЕНИЮ КОНФИДЕНЦИАЛЬНОСТИ ИНФОРМАЦИИ.docx',
  },
  {
    docName: 'Политика управления беспристрастностью',
    downloadLink: 'src/assets/asntDocs/Политика УПРАВЛЕНИЯ БЕСПРИСТРАСТНОСТЬЮ.docx',
  },
  {
    docName: 'Реестр выданных сертификатов по подтверждению соответствия квалификации персонала',
    downloadLink:
      'src/assets/asntDocs/Реестр выданных сертификатов по подтверждению соответствия квалификации персонала.docx',
  },
  {
    docName: 'Договор  на проведение сертификации по подтверждению соответствия квалификации персонала',
    downloadLink:
      'src/assets/asntDocs/Договор  на проведение сертификации по подтверждению соответствия квалификации персонала.docx',
  },
  {
    docName: 'Кодекс профессиональной этики сертифицированного специалиста неразрушающего контроля',
    downloadLink:
      'src/assets/asntDocs/Кодекс профессиональной этики сертифицированного специалиста неразрушающего контроля.docx',
  },
  {
    docName: 'Алгоритм сертификации по подтверждению соответствия квалификации персонала',
    downloadLink: 'src/assets/asntDocs/Алгоритм сертификации по подтверждению соответствия квалификации персонала.docx',
  },
  { docName: 'ДП 03.08 Жалобы', downloadLink: 'src/assets/asntDocs/ДП 03.08 Жалобы.pdf' },
  {
    docName: 'ДП 03.07 Апелляции в отношении решений по сертификации',
    downloadLink: 'src/assets/asntDocs/ДП 03.07 Апелляции в отношении решений по сертификации.pdf',
  },
]

const columns = [
  { field: 'docName', header: 'Название документа' },
  { field: 'downloadLink', header: 'Скачать' },
]

const router = useRouter()
const goToHome = () => {
  router.push('/')
}

const openFile = (path: string) => {
  window.open(path, '_blank')
}
</script>
<style lang="scss" scoped>
::selection {
  color: white;
  background: #6e6ec5;
}
</style>
