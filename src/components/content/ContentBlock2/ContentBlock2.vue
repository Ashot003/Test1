<script setup>
import ImageSlider from "./ImageSlider.vue";
import ImageSliderMobile from "./ImageSliderMobile.vue";

const defaultImages = [
  {
    src: "/src/assets/Content/slider/5.jpg",
    title: "Drvenik Mali",
    flag: "/src/assets/Content/slider/flags/Mali.svg",
  },
  {
    src: "/src/assets/Content/slider/6.jpg",
    title: "Dubrovnik ",
    flag: "/src/assets/Content/slider/flags/Dubrovnik.svg",
  },
  {
    src: "/src/assets/Content/slider/7.jpg",
    title: "Hvar",
    flag: "/src/assets/Content/slider/flags/Hvar.svg",
  },
  {
    src: "/src/assets/Content/slider/8.jpg",
    title: "Sibenik",
    flag: "/src/assets/Content/slider/flags/Sibenik.svg",
  },
  {
    src: "/src/assets/Content/slider/9.jpg",
    title: "Trogir",
    flag: "/src/assets/Content/slider/flags/Trogir.svg",
  },
  {
    src: "/src/assets/Content/slider/10.jpg",
    title: "Zadar",
    flag: "/src/assets/Content/slider/flags/Zadar.svg",
  },
  {
    src: "/src/assets/Content/slider/11.jpg",
    title: "Sibenik",
    flag: "/src/assets/Content/slider/flags/Sibenik.svg",
  },
  {
    src: "/src/assets/Content/slider/12.jpg",
    title: "Hvar",
    flag: "/src/assets/Content/slider/flags/Mali.svg",
  },
];
</script>

<template>
  <div class="content__Block2 w-full flex flex-col items-center">
    <div
      class="contentBlock2__title w-full flex items-center justify-center pb-3"
    >
      <span class="text-3xl text-black font-bold"> Popular Rentals </span>
    </div>
    <div
      class="contentBlock2__slider flex h-auto w-full items-center justify-center gap-2"
    >
      <div class="slider__desktop flex w-full justify-center gap-1">
        <div class="sliderCase w-[410px]">
          <ImageSlider />
        </div>

        <div class="imageCase w-auto grid grid-cols-4 gap-2 h-full">
          <div class="items bg-none" v-for="item in defaultImages" :key="item">
            <div class="relative">
              <img :src="item.src" class="aspect-[16/9] object-cover" />

              <div
                class="absolute image_title top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center gap-2"
              >
                <h2 class="text-white text-[11px] font-bold">
                  {{ item.title }}
                </h2>
                <img :src="item.flag" class="w-4 h-4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="slider__mobile w-full flex items-center flex-col gap-3 overflow-hidden"
      >
        <ImageSliderMobile />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content__Block2 {
  padding-bottom: 70px;
  margin-top: 100px;
}
.contentBlock2__title span {
  font-size: 30px !important;
}
.contentBlock2__title {
  padding: 100px 0 50px 0 !important;
}

.slider__mobile {
  display: none;
}

@media only screen and (max-width: 1430px) {
  .content__Block2 {
    padding: 0 20px 70px 20px !important;
  }
  .contentBlock2__title {
    padding: 50px 10px !important;
  }
}
@media only screen and (max-width: 990px) {
  .content__Block2 {
    padding-bottom: 10px !important;
  }
  .contentBlock2__title {
    padding: 30px 10px 0 10px !important;
  }
  .slider__desktop {
    display: none;
  }
  .slider__mobile {
    display: flex;
  }
}

@media only screen and (max-width: 768px) {
  .contentBlock2__title span {
    margin: 20px 0 0 0 !important;
  }
  .contentBlock2__slider {
    padding: 20px;
  }
  .content__Block2 {
    margin: 150px 0 0 0;
  }
}

@media only screen and (max-width: 600px) {
  .contentBlock2__slider {
    padding: 0 !important;
  }
}
@media only screen and (max-width: 480px) {
  .content__Block2 {
    padding: 0 0 0 5px !important;
  }
  .contentBlock2__title span {
    font-size: 25px !important;
  }
}
@media only screen and (max-width: 425px) {
  .image_title > h2 {
    top: 50%;
    left: 50%;
  }
}
</style>
