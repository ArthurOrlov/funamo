<template>
  <div class="catalog__card">
    <div 
      class="catalog__card-slider"
      @mouseenter="initZones"
      @mousemove="handleMouseMove"
      @mouseleave="resetImage"
      @click="openFancybox"
      ref="sliderContainer"
    >
      <img class="catalog__card-img" :src="currentImage" :alt="card.name">
      
      <div class="catalog__card-pagination" v-if="card.images.length > 1">
        <span 
          v-for="(_, idx) in card.images" 
          :key="idx"
          class="catalog__card-dot"
          :class="{ active: currentIndex === idx }"
        ></span>
      </div>
    </div>

    <div class="catalog__card-info">
      <div class="catalog__card-titul">{{ card.name }}</div>
      <div class="catalog__card-price">{{ card.price }} руб.</div>
      <a :href="card.link" class="catalog__card-link">Подробнее</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps<{
  card: {
    id: number;
    images: string[];
    name: string;
    price: string;
    link: string;
    category: string;
  };
}>();

const sliderContainer = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const zones = ref<{ start: number; end: number; index: number }[]>([]);

const currentImage = computed(() => {
  return props.card.images[currentIndex.value] || props.card.images[0];
});

const initZones = () => {
  if (!sliderContainer.value) return;
  const width = sliderContainer.value.clientWidth;
  const imagesCount = props.card.images.length;
  const zoneWidth = width / imagesCount;
  zones.value = Array.from({ length: imagesCount }, (_, i) => ({
    start: i * zoneWidth,
    end: (i + 1) * zoneWidth,
    index: i,
  }));
};

const handleMouseMove = (event: MouseEvent) => {
  if (!sliderContainer.value || props.card.images.length <= 1) return;

  const rect = sliderContainer.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;

  const currentZone = zones.value.find(
    (zone) => mouseX >= zone.start && mouseX < zone.end
  );

  if (currentZone && currentIndex.value !== currentZone.index) {
    currentIndex.value = currentZone.index;
  }
};

const resetImage = () => {
  currentIndex.value = 0;
};

const openFancybox = () => {
  const items = props.card.images.map((src) => ({
    src: src,
    type: "image" as const,
  }));

  Fancybox.show(items, {
    startIndex: currentIndex.value,
  });
};

onMounted(() => {
  initZones();
});
</script>

<style scoped>

</style>