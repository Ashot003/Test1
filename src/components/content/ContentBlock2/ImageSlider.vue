<script setup>
import { ref, onUnmounted } from "vue";
import "primeicons/primeicons.css";

const images = [
  {
    title: "Brac Island ",
    src: "/src/assets/Content/slider/1.jpg",
    alt: "Image 1",
    flag: "/src/assets/Content/slider/flags/Britian.svg",
  },
  {
    title: "Ciovo Island",
    src: "/src/assets/Content/slider/2.jpg",
    alt: "Image 2",
    flag: "/src/assets/Content/slider/flags/Dubrovnik.svg",
  },
  {
    title: "Korcula",
    src: "/src/assets/Content/slider/3.jpg",
    alt: "Image 3",
    flag: "/src/assets/Content/slider/flags/Britian.svg",
  },
  {
    title: "Split",
    src: "/src/assets/Content/slider/4.jpg",
    alt: "Image 4",
    flag: "/src/assets/Content/slider/flags/Hvar.svg",
  },
];

const currentSliderIndex = ref(0);
let intervalId;

// Следующий слайд
const nextSlide = () => {
  currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
};

// Предыдущий слайд
const prevSlide = () => {
  currentSliderIndex.value =
    (currentSliderIndex.value - 1 + images.length) % images.length;
};

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="slider-container relative w-full h-full overflow-hidden">
    <div
      class="slides flex transition-transform duration-700 ease-in-out h-full"
      :style="`transform: translateX(-${currentSliderIndex * 100}%)`"
    >
      <template v-for="(image, index) in images" :key="index">
        <div class="slide min-w-full relative h-full">
          <img
            :src="image.src"
            :alt="image.alt"
            class="aspect-[16/9] w-full object-cover h-full rounded-lg"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center"
          >
            <h2 class="text-white text-xl font-bold flex items-center gap-2">
              {{ image.title }}
              <img :src="image.flag" alt="Flag" class="w-6 h-6" />
            </h2>
          </div>
        </div>
      </template>
    </div>

    <i
      class="pi pi-chevron-right arrows absolute right-4 top-[45%] p-2 rounded-full bg-[rgba(255,255,255,0.4)] text-lg cursor-pointer text-white z-50"
      @click="nextSlide"
    ></i>
    <i
      class="pi pi-chevron-left arrows absolute left-4 top-[45%] p-2 rounded-full bg-[rgba(255,255,255,0.4)] text-lg cursor-pointer text-white z-50"
      @click="prevSlide"
    ></i>
  </div>
</template>

<style scoped>
.slider-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.slides {
  display: flex;
  transition: transform 0.7s ease-in-out;
}

.slide {
  min-width: 100%;
}

.arrows {
  transition: background-color 0.3s ease;
  font-weight: 300 !important;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px !important;
}

::v-deep .pi .pi-chevron-right {
  font-size: 13px !important;
}

.arrows:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
