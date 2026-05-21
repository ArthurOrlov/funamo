<template>
  <div class="start">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
      class="start__slider"
    >
      <swiper-slide>
        <div class="start__slide slide-first">
          <div class="wave-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" style="position: absolute; bottom: 0; left: 0; width: 100%; opacity: 0.15;">
              <path fill="#d9328a" fill-opacity="0.3" d="M0,180 C240,60 480,300 720,180 C960,60 1200,300 1440,180 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.2" d="M0,200 C200,70 400,330 600,200 C800,70 1000,330 1200,200 C1300,150 1400,250 1440,200 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.12" d="M0,220 C300,100 500,340 700,210 C900,80 1100,340 1300,220 C1380,180 1420,260 1440,220 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.08" d="M0,240 C200,110 300,350 500,230 C700,90 800,350 1000,230 C1200,90 1300,350 1440,240 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.05" d="M0,260 C250,160 450,360 650,250 C850,140 1050,360 1250,250 C1350,200 1400,310 1440,260 L1440,400 L0,400 Z"></path>
            </svg>
          </div>
          
          <div class="container">
            <div class="title__slider">
              <div class="title__block">
                <h1>Funamo 
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35C10.55 20.03 5.4 15.36 5.4 15.36C3.2 13.36 2 11.5 2 8.5C2 5.5 4.5 3 7.5 3C9.5 3 11 4 12 5.5C13 4 14.5 3 16.5 3C19.5 3 22 5.5 22 8.5C22 11.5 20.8 13.36 18.6 15.36C18.6 15.36 13.45 20.03 12 21.35Z" fill="#d9328a" fill-opacity="0.9"/>
                    <path d="M12 8.5C12.8 7.3 14 6.5 15.5 6.5C18 6.5 19.5 8 19.5 10.5" stroke="#d9328a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                  </svg>
                </h1>
                <div class="title__line"></div>
                <div class="title__subtitle">Поможем создать пространство,<br>в котором хочется расти и мечтать</div>
                <button class="title__btn">Каталог</button>
              </div>
              <div class="title__block">
                <img class="title__img" src="/src/images/start-slider.svg" alt="start">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="start__slide slide-news">
          <div class="wave-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" style="position: absolute; bottom: 0; left: 0; width: 100%; opacity: 0.2;">
              <path fill="#7ec8e0" fill-opacity="0.35" d="M0,180 C240,70 480,290 720,180 C960,70 1200,290 1440,180 L1440,400 L0,400 Z"></path>
              <path fill="#7ec8e0" fill-opacity="0.25" d="M0,210 C300,100 500,320 800,210 C1100,100 1300,320 1440,210 L1440,400 L0,400 Z"></path>
              <path fill="#7ec8e0" fill-opacity="0.18" d="M0,240 C200,130 400,350 700,240 C900,130 1100,350 1440,240 L1440,400 L0,400 Z"></path>
              <path fill="#7ec8e0" fill-opacity="0.12" d="M0,260 C250,170 450,370 750,260 C1050,170 1250,370 1440,260 L1440,400 L0,400 Z"></path>
              <path fill="#7ec8e0" fill-opacity="0.08" d="M0,280 C220,200 500,380 800,280 C1100,200 1350,380 1440,280 L1440,400 L0,400 Z"></path>
            </svg>
          </div>
          
          <div class="container">
            <div class="news__slider">
              <div class="news__block news__pic">
                <img class="news__img" src="/src/images/news_cropped.webp" alt="corob">
              </div>
              <div class="news__block news__content">
                <span class="news__label">Новинка</span>
                <h2 class="news__title">Короб для игрушек</h2>
                <div class="news__line"></div>
                <ul class="news__list">
                  <li class="news__item">Ящик создан из натканного материала с прочными картонными стенками</li>
                  <li class="news__item">Удобная складная конструкция короба позволяет легко вписать ее в интерьер любой комнаты</li>
                  <li class="news__item">Детский принт с машинками добавит ощущение уюта и радости как маленьким, так и большим детям</li>
                </ul>
                <button class="news__btn">Перейти к товару</button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="start__slide slide-sale">
          <div class="wave-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" style="position: absolute; bottom: 0; left: 0; width: 100%; opacity: 0.15;">
              <path fill="#d9328a" fill-opacity="0.3" d="M0,180 C240,60 480,300 720,180 C960,60 1200,300 1440,180 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.2" d="M0,200 C200,70 400,330 600,200 C800,70 1000,330 1200,200 C1300,150 1400,250 1440,200 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.12" d="M0,220 C300,100 500,340 700,210 C900,80 1100,340 1300,220 C1380,180 1420,260 1440,220 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.08" d="M0,240 C200,110 300,350 500,230 C700,90 800,350 1000,230 C1200,90 1300,350 1440,240 L1440,400 L0,400 Z"></path>
              <path fill="#d9328a" fill-opacity="0.05" d="M0,260 C250,160 450,360 650,250 C850,140 1050,360 1250,250 C1350,200 1400,310 1440,260 L1440,400 L0,400 Z"></path>
            </svg>
          </div>
          
          <div class="container">
            <div class="sale__slider">
              <div class="sale__content">
                <img class="sale__img" src="/src/images/gift.png" alt="sale">
              </div>
              <div class="sale__content">
                <span class="sale__label">Акция</span>
                <h2 class="sale__title">Успей купить!</h2>
                <div class="sale__line"></div>
                <div class="sale__discount">-25%</div>
                <p class="sale__description">На все товары из новой коллекции<br>до 30 августа</p>
                <button class="sale__btn">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
    
    <div class="custom-pagination">
      <div 
        v-for="(slide, index) in 3" 
        :key="index"
        class="pagination-item"
        @click="goToSlide(index)"
      >
        <div class="pagination-dot" v-if="currentIndex !== index"></div>
        
        <div class="pagination-progress" v-else>
          <div class="progress-fill" :class="{ animating: isAnimating }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Autoplay, Navigation];

const currentIndex = ref(0);
const isAnimating = ref(true);
let swiperInstance: any = null;
let animationTimer: any = null;

const onSwiper = (swiper: any) => {
  swiperInstance = swiper;
};

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex;
  
  isAnimating.value = false;
  if (animationTimer) clearTimeout(animationTimer);
  
  setTimeout(() => {
    isAnimating.value = true;
  }, 50);
};

const goToSlide = (index: number) => {
  if (swiperInstance) {
    swiperInstance.slideToLoop(index);
    currentIndex.value = index;
    
    isAnimating.value = false;
    setTimeout(() => {
      isAnimating.value = true;
    }, 50);
    
    swiperInstance.autoplay.stop();
    swiperInstance.autoplay.start();
  }
};
</script>

<style scoped>

</style>