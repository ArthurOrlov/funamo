<template>
  <header>
    <div id="menu">
      <div id="menu-bar" @click="menuOnClick">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
      <nav class="nav" id="nav">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Мы на WB</a></li>
        </ul>
      </nav> 
    </div>
    <div class="menu-bg" id="menu-bg"></div>

    <button class="header__catalog">Каталог</button>

    <div class="header__logo" :class="{ 'hidden': isSearchActive }">
      <img class="header__logo-img" src="/src/images/logo.svg" alt="logo">
    </div>
    
    <div class="header__search" :class="{ 'active': isSearchActive }">
      <div v-if="!isSearchActive" class="search-icon" @click="openSearch">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#d9328a"/>
        </svg>
      </div>
      <div v-else class="search-container">
        <input 
          ref="searchInput"
          v-model="searchQuery"
          type="text" 
          class="search-input" 
          placeholder="Поиск товаров..."
          @keyup.enter="searchProducts"
        />
        <div class="close-icon" @click="closeSearch">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#d9328a"/>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="header__tg">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#d9328a" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.665 3.717L17.745 19.622C17.574 20.402 17.103 20.607 16.437 20.222L11.584 16.721L9.238 19.028C9.052 19.214 8.899 19.367 8.55 19.367L8.808 14.492L18.685 5.298C18.975 5.032 18.619 4.888 18.241 5.154L6.156 13.022L1.333 11.339C0.568 11.082 0.552 10.562 1.477 10.177L19.479 3.05C20.123 2.791 20.689 3.165 20.665 3.717Z"/>
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  import { useMenu } from '../composables/useMenu';

  const { menuOnClick } = useMenu();
  
  const isSearchActive = ref(false);
  const searchQuery = ref('');
  const searchInput = ref<HTMLInputElement | null>(null);
  
  const openSearch = async () => {
    isSearchActive.value = true;
    await nextTick();
    searchInput.value?.focus();
  };
  
  const closeSearch = () => {
    isSearchActive.value = false;
    searchQuery.value = '';
  };
  
  const searchProducts = () => {
    if (searchQuery.value.trim()) {
      console.log('Поиск:', searchQuery.value);
    }
  };
</script>

<style scoped>

</style>