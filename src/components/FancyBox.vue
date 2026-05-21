<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
  import { Fancybox } from "@fancyapps/ui";
  import "@fancyapps/ui/dist/fancybox/fancybox.css";

  const props = defineProps({
    fancyboxOptions: {
      type: Object,
      default: () => ({})
    }
  });

  const container = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (container.value) {
      Fancybox.bind(container.value, "[data-fancybox]", {
        ...props.fancyboxOptions
      });
    }
  });

  onUpdated(() => {
    if (container.value) {
      Fancybox.unbind(container.value);
      Fancybox.close();
      Fancybox.bind(container.value, "[data-fancybox]", {
        ...props.fancyboxOptions
      });
    }
  });

  onUnmounted(() => {
    if (container.value) {
      Fancybox.unbind(container.value);
      Fancybox.close();
    }
  });
</script>