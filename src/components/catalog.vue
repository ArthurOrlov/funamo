<template>
  <div class="catalog">
    <div class="catalog__container container">
      <div class="catalog__title">Каталог</div>
      <div class="catalog__content">
        <div class="catalog__filter">
          <div class="catalog__category">Выбери категорию:</div>
          <label><input type="checkbox" v-model="filters.all" @change="selectAll"> Все</label>
          <label v-for="category in categories" :key="category.id">
            <input type="checkbox" :value="category.name" v-model="selectedCategories"> 
            {{ category.name }}
          </label>
        </div>
        <div class="catalog__cards">
          <Card v-for="card in filteredCards" :key="card.id" :card="card"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, computed, watch, nextTick} from 'vue'
  import Card from './card.vue'
  import AOS from 'aos'

  const categories = ref([
    { id: 1, name: 'Корзина для игрушек' },
    { id: 2, name: 'Корзина для хранения' },
    { id: 3, name: 'Защитная накладка для дома' },
    { id: 4, name: 'Набор для праздника' },
    { id: 5, name: 'Игровая палатка' },
    { id: 6, name: 'Нагрудник' },
    { id: 7, name: 'Коврик детский' }
  ])

  const selectedCategories = ref<string[]>([])
  const filters = ref({ all: true })

  const cards = ref([
    { id: 1, images: ['/funamo/images/basket1.webp', '/funamo/images/basket2.webp', '/funamo/images/basket3.webp'], name: 'Корзина для игрушек', price: '1200', link: '', category: 'Корзина для игрушек' },
    { id: 2, images: ['/noimage.webp'], name: 'Корзина для хранения', price: '3040', link: '', category: 'Корзина для хранения' },
    { id: 3, images: ['/noimage.webp'], name: 'Защитная накладка для дома', price: '12100', link: '', category: 'Защитная накладка для дома' },
    { id: 4, images: ['/noimage.webp'], name: 'Набор для праздника', price: '3040', link: '', category: 'Набор для праздника' },
    { id: 5, images: ['/noimage.webp'], name: 'Игровая палатка', price: '1200', link: '', category: 'Игровая палатка' },
    { id: 6, images: ['/noimage.webp'], name: 'Нагрудник', price: '3040', link: '', category: 'Нагрудник' },
    { id: 7, images: ['/funamo/images/carpet-white1.webp', '/funamo/images/carpet-white2.webp', '/funamo/images/carpet-white3.webp'], name: 'Коврик детский', price: '3040', link: '', category: 'Коврик детский' },
    { id: 8, images: ['/noimage.webp'], name: 'Корзина для игрушек розовая', price: '1500', link: '', category: 'Корзина для игрушек' },
    { id: 9, images: ['/noimage.webp'], name: 'Игровая палатка с звездами', price: '2500', link: '', category: 'Игровая палатка' },
  ])

  const filteredCards = computed(() => {
    if (filters.value.all || selectedCategories.value.length === 0) {
      return cards.value
    }
    return cards.value.filter(card => selectedCategories.value.includes(card.category))
  })

  const selectAll = () => {
    if (filters.value.all) {
      selectedCategories.value = []
    }
  }

  const updateAllFilter = () => {
    filters.value.all = selectedCategories.value.length === 0
  }

  watch(selectedCategories, () => {
    updateAllFilter()
  })

  watch(filteredCards, async () => {
    await nextTick()
    AOS.refresh()
  })

</script>

<style scoped>

</style>