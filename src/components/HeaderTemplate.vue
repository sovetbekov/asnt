<template>
  <div class="px-5 md:px-20">
    <div class="flex flex-row justify-between items-center">
      <div class="logo text-lg md:text-2xl font-semibold">ASNT</div>

      <div class="page-links hidden md:flex flex-col md:flex-row gap-5 md:gap-7 text-base md:text-lg">
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Услуги</div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Обучение</div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Про нас</div>
      </div>
      <div class="header-right flex flex-row gap-5">
        <div class="toggle-mode cursor-pointer">
          <i :class="darkMode ? 'pi pi-moon' : 'pi pi-sun'" @click="toggleDarkMode()" />
        </div>
        <div class="md:hidden">
          <button @click="burgerClick()" id="menu-toggle" class="toggle-button">
            <i class="pi pi-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="md:hidden hidden">
      <div class="flex flex-row justify-center items-center gap-3 mt-3">
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Услуги</div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Обучение</div>
        <div class="page-link cursor-pointer dark:hover:text-neutral-400 hover:text-black">Про нас</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import 'primeicons/primeicons.css'
import { ref, onMounted, defineEmits } from 'vue'

const darkMode = ref(false)

// Load dark mode preference from local storage on component mount
onMounted(() => {
  const isDarkMode = localStorage.getItem('darkMode')

  if (isDarkMode) {
    darkMode.value = isDarkMode === 'true'
    applyDarkMode(darkMode.value)
  }
})

const emit = defineEmits(['theme-value'])

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  applyDarkMode(darkMode.value)
  emit('theme-value', darkMode.value)
  localStorage.setItem('darkMode', darkMode.value.toString())
}

const applyDarkMode = (isDarkMode: boolean) => {
  const html = document.documentElement
  html.classList.toggle('dark', isDarkMode)
}

const burgerClick = () => {
  const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu?.classList.toggle('hidden')
}
</script>
<style lang="scss" scoped>
::selection {
  color: white;
  background: #6e6ec5;
}
</style>
