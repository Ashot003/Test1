<script setup>
import { ref } from "vue";

const props = defineProps({
  images: Array,
});

const currentImageIndex = ref(0);
</script>

<template>
  <div class="mini-slider w-full relative">
    <div class="mini-slides">
      <img
        :src="props.images[currentImageIndex]"
        alt="Item Image"
        class="aspect-[16/9] w-full rounded-lg object-cover"
        loading="lazy"
      />
    </div>
    <div class="pagination-controls flex justify-center gap-2 mt-2">
      <span
        v-for="(image, index) in props.images"
        :key="index"
        @click="currentImageIndex = index"
        class="pagination-dot"
        :class="{ active: currentImageIndex === index }"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.mini-slider {
  position: relative;
  width: 100%;
}

.mini-slides {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pagination-controls {
  position: absolute;
  bottom: 10px; /* Позиция от нижнего края картинки */
  left: 50%;
  transform: translateX(-50%); /* Центрирование */
  display: flex;
  justify-content: center;
  gap: 8px; /* Расстояние между точками */
  z-index: 1; /* Убедитесь, что кнопки будут выше картинки */
}

.pagination-dot {
  width: 7px;
  height: 7px;
  background-color: lightgray;
  border-radius: 50%;
  cursor: pointer;
}

.pagination-dot.active {
  background-color: #01b89d;
}
</style>
