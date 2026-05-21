<template>
  <AppHeader/>
  <About/>
  <sliderStories/>
  <catalog/>
  <wb/>
  <why/>
  <AppFooter/>
</template>

<script setup lang="ts">
  import AppHeader from './components/header.vue';
  import About from './components/about.vue'
  import sliderStories from './components/sliderStories.vue';
  import catalog from './components/catalog.vue';
  import wb from './components/wb.vue';
  import why from './components/why.vue';
  import AppFooter from './components/footer.vue';
</script>

<style scoped>
  @import './assets/normalize.css';
  @import './assets/global.css';
  @import './assets/header.css';
</style>
