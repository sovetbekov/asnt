<template>
  <div class="px-5 md:px-20 mt-24">
    <div class="flex flex-row justify-between items-center">
      <div class="logo text-lg md:text-2xl">
        <div class="font-semibold">ASNT</div>

        <div class="text-sm text-gray-500">
          ваша надежность в промышленной безопасности<br />
          и профессиональном обучении.
        </div>
      </div>

      <div class="page-links text-right md:flex flex-col md:flex-row gap-5 md:gap-7 text-sm md:text-lg">
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">
          г. Атырау, Проспект Зейнолла Қабдолов, дом 10
        </div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">
          <a href="mailto:info@asnt.kz"> info@asnt.kz</a>
        </div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">+7 (778) 351 8240</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'primeicons/primeicons.css'
import { ref, onMounted } from 'vue'
</script>
<style lang="scss" scoped>
::selection {
  color: white;
  background: #6e6ec5;
}
</style>
