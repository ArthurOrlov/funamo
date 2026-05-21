<template>
  <div class="about" ref="containerRef" @mousemove="handleMouseMove">
    <div class="wave-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" style="position: absolute; bottom: 0; left: 0; width: 100%; opacity: 0.15;">
        <path fill="#d9328a" fill-opacity="0.3" d="M0,180 C240,60 480,300 720,180 C960,60 1200,300 1440,180 L1440,400 L0,400 Z"></path>
        <path fill="#d9328a" fill-opacity="0.2" d="M0,200 C200,70 400,330 600,200 C800,70 1000,330 1200,200 C1300,150 1400,250 1440,200 L1440,400 L0,400 Z"></path>
        <path fill="#d9328a" fill-opacity="0.12" d="M0,220 C300,100 500,340 700,210 C900,80 1100,340 1300,220 C1380,180 1420,260 1440,220 L1440,400 L0,400 Z"></path>
        <path fill="#d9328a" fill-opacity="0.08" d="M0,240 C200,110 300,350 500,230 C700,90 800,350 1000,230 C1200,90 1300,350 1440,240 L1440,400 L0,400 Z"></path>
        <path fill="#d9328a" fill-opacity="0.05" d="M0,260 C250,160 450,360 650,250 C850,140 1050,360 1250,250 C1350,200 1400,310 1440,260 L1440,400 L0,400 Z"></path>
      </svg>
    </div>
    
    <img 
      src="/src/images/cloud2.png" 
      alt="cloud back" 
      class="cloud cloud-back"
      :style="{ opacity: 0.5, transform: `translate(${cloudBackX}px, ${cloudBackY}px)` }"
    />
    
    <img 
      src="/src/images/cloud1.png" 
      alt="cloud left" 
      class="cloud cloud-left"
      :style="{ transform: `translate(${cloudLeftX}px, ${cloudLeftY}px)` }"
    />
    
    <img 
      src="/src/images/cloud2.png" 
      alt="cloud right" 
      class="cloud cloud-right"
      :style="{ transform: `translate(${cloudRightX}px, ${cloudRightY}px)` }"
    />
    
    <img 
      src="/src/images/balloons.png" 
      alt="balloons left" 
      class="balloons balloons-left"
      :style="{ transform: `translate(${balloonsLeftX}px, ${balloonsLeftY}px)` }"
    />
    
    <img 
      src="/src/images/balloons.png" 
      alt="balloons right" 
      class="balloons balloons-right"
      :style="{ transform: `translate(${balloonsRightX}px, ${balloonsRightY}px) scaleX(-1)` }"
    />
    
    <div class="about__content">
      <h1>Добро пожаловать в Funamo</h1>
      <p>Создаем пространство для счастья</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const containerRef = ref<HTMLElement | null>(null);

const mouseX = ref(0);
const mouseY = ref(0);

const cloudBackX = ref(0);
const cloudBackY = ref(0);
const cloudLeftX = ref(0);
const cloudLeftY = ref(0);
const cloudRightX = ref(0);
const cloudRightY = ref(0);

const balloonsLeftX = ref(0);
const balloonsLeftY = ref(0);
const balloonsRightX = ref(0);
const balloonsRightY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;
  
  const rect = containerRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  mouseX.value = (e.clientX - centerX) / 30;
  mouseY.value = (e.clientY - centerY) / 30;
  
  cloudBackX.value = mouseX.value * 0.5;
  cloudBackY.value = mouseY.value * 0.35;
  cloudLeftX.value = mouseX.value * 0.7;
  cloudLeftY.value = mouseY.value * 0.5;
  cloudRightX.value = mouseX.value * -0.7;
  cloudRightY.value = mouseY.value * 0.5;
  
  balloonsLeftX.value = mouseX.value * 0.4;
  balloonsLeftY.value = mouseY.value * -0.5;
  balloonsRightX.value = mouseX.value * 0.4;
  balloonsRightY.value = mouseY.value * -0.5;
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight;
  const progress = Math.min(scrollY / maxScroll, 1);
  
  cloudBackX.value = -progress * 200;
  cloudBackY.value = progress * 150;
  cloudLeftX.value = -progress * 300;
  cloudLeftY.value = progress * 200;
  cloudRightX.value = progress * 300;
  cloudRightY.value = progress * 200;
  
  balloonsLeftY.value = -progress * 400;
  balloonsRightY.value = -progress * 400;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #fff5f8 0%, #ffeef4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.wave-svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.wave-svg svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 450px;
}

.cloud {
  position: absolute;
  bottom: -50%;
  width: 50%;
  opacity: 0;
  animation: floatUp 1s ease-out forwards;
  pointer-events: none;
  z-index: 1;
}

.cloud-back {
  left: 20%;
  width: 40%;
  z-index: 0;
  animation-delay: 0.1s;
}

.cloud-left {
  left: -10%;
  z-index: 2;
  animation-delay: 0.3s;
}

.cloud-right {
  right: -10%;
  z-index: 2;
  animation-delay: 0.5s;
}

.balloons {
  position: absolute;
  width: 500px;
  opacity: 0;
  animation: floatUpBalloons 1s ease-out forwards;
  pointer-events: none;
  z-index: 0;
}

.balloons-left {
  left: 10%;
  bottom: -50%;
  animation-delay: 0.8s;
}

.balloons-right {
  right: 5%;
  bottom: -50%;
  animation-delay: 1s;
}

.about__content {
  position: relative;
  z-index: 10;
  color: #1a1a1a;
}

.about__content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-family: 'Mons-medium';
}

.about__content p {
  font-size: 24px;
  opacity: 0.8;
  font-family: 'Mons-regular';
}

@keyframes floatUp {
  0% {
    bottom: -50%;
    opacity: 0;
  }
  100% {
    bottom: -25%;
    opacity: 1;
  }
}

@keyframes floatUpBalloons {
  0% {
    bottom: -50%;
    opacity: 0;
  }
  100% {
    bottom: 5%;
    opacity: 1;
  }
}

.balloons-left {
  left: 10%;
  bottom: -50%;
  animation: floatUpBalloonsLeft 1s ease-out forwards;
  animation-delay: 0.8s;
}

.balloons-right {
  right: 5%;
  bottom: -50%;
  animation: floatUpBalloonsRight 1s ease-out forwards;
  animation-delay: 1s;
}

@keyframes floatUpBalloonsLeft {
  0% {
    bottom: -50%;
    opacity: 0;
  }
  100% {
    bottom: 25%;
    opacity: 1;
  }
}

@keyframes floatUpBalloonsRight {
  0% {
    bottom: -50%;
    opacity: 0;
  }
  100% {
    bottom: 30%;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .cloud {
    width: 70%;
  }
  
  .cloud-back {
    width: 55%;
    left: 15%;
  }
  
  .balloons {
    width: 300px;
  }
  
  .balloons-left {
    left: 5%;
  }
  
  .balloons-right {
    right: 0;
  }
  
  .about__content h1 {
    font-size: 32px;
  }
  
  .about__content p {
    font-size: 18px;
  }
}
</style>