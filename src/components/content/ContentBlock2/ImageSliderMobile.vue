<script setup>
import { ref, onMounted } from "vue";

const images = [
  {
    title: "Brac Island",
    src: "/src/assets/Content/slider/1.jpg",
    flag: "/src/assets/Content/slider/flags/Britian.svg",
  },
  {
    title: "Ciovo Island",
    src: "/src/assets/Content/slider/2.jpg",
    flag: "/src/assets/Content/slider/flags/Hvar.svg",
  },
  {
    title: "Korcula",
    src: "/src/assets/Content/slider/3.jpg",
    flag: "/src/assets/Content/slider/flags/Dubrovnik.svg",
  },
  {
    title: "Split",
    src: "/src/assets/Content/slider/4.jpg",
    flag: "/src/assets/Content/slider/flags/Trogir.svg",
  },
];

const itemsPerSlide = ref(1);
const currentSliderIndex = ref(0);

const updateItemsPerSlide = () => {
  const screenWidth = window.innerWidth;
  // if (screenWidth <= 768) {
  //   itemsPerSlide.value = 1;
  // } else {
  //   itemsPerSlide.value = 1;
  // }
};
const nextSlide = () => {
  if (currentSliderIndex.value < images.length - itemsPerSlide.value) {
    currentSliderIndex.value += 1;
  } else {
    currentSliderIndex.value = 0;
  }
};

onMounted(() => {
  updateItemsPerSlide();
  window.addEventListener("resize", updateItemsPerSlide);
});

const prevSlide = () => {
  if (currentSliderIndex.value > 0) {
    currentSliderIndex.value -= 1;
  } else {
    currentSliderIndex.value = images.length - itemsPerSlide;
  }
};
</script>

<template>
  <div
    class="slider-container flex flex-col items-center relative w-full h-full overflow-hidden gap-5"
  >
    <div class="slider-header w-full flex items-center justify-between p-2">
      <div class="slider-navigation flex items-center gap-3">
        <i
          class="pi pi-chevron-left arrows p-2 rounded-full text-lg cursor-pointer text-[rgba(0,0,0,0.4)] bg-none border border-[rgba(0,0,0,0.3)] z-50"
          @click="prevSlide"
        >
        </i>
        <i
          class="pi pi-chevron-right arrows p-2 rounded-full text-lg cursor-pointer text-[rgba(0,0,0,0.4)] bg-none border border-[rgba(0,0,0,0.3)] z-50"
          @click="nextSlide"
        >
        </i>
      </div>
    </div>
    <div
      class="slides flex transition-transform duration-700 ease-in-out h-full"
      :style="`transform: translateX(-${
        currentSliderIndex * (100 / itemsPerSlide)
      }%)`"
    >
      <template v-for="(item, index) in images" :key="index">
        <div class="slide flex flex-col min-w-[calc(100%/1)] p-2 relative">
          <img
            :src="item.src"
            alt="Boat Image"
            class="aspect-[16/9] w-full object-cover rounded-lg"
          />
          <span
            class="imgCase flex items-center absolute top-1/2 left-1/3 gap-2"
          >
            <span class="img-title text-white font-bold">
              {{ item.title }}
            </span>
            <img :src="item.flag" alt="Flag" class="flag-icon w-5 h-5" />
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.slides {
  display: flex;
  transition: transform 0.7s ease-in-out;
}

.slide {
  min-width: 33.33%;
}

.arrows {
  transition: background-color 0.3s ease;
}

.img-title {
  font-size: 25px !important;
}
.arrows:active {
  background: #e9f7f5ac;
  border: 1px solid #01b89d;
}

@media only screen and (max-width: 990px) {
  .slider-container {
    padding: 0 0 80px 0;
    flex-direction: column;
    align-items: flex-start;
  }
  .slider-header {
    flex-direction: column;
  }
  .slides {
    position: relative;
    width: 80%;
  }
  .slide {
    min-width: calc(100% / 1) !important;
    object-fit: cover;
  }
  .slider-navigation {
    position: absolute;
    top: 90% !important;
    gap: 30px !important;
  }
}

@media only screen and (max-width: 768px) {
  .slider-navigation {
    top: 85% !important;
  }
  .img-title {
    font-size: 20px !important;
  }
  .imgCase {
    top: 45% !important;
    left: 30%;
  }
}

@media only screen and (max-width: 480px) {
  .slide {
    padding: 5px !important;
  }
}

@media only screen and (max-width: 425px) {
  .img-title {
    font-size: 16px !important;
  }
  .imgCase {
    left: 25%;
  }
}
</style>
