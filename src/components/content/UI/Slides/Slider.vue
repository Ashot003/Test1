<script setup>
import { ref, onMounted, computed } from "vue";
import MiniSlider from "./MiniSlider.vue";

const props = defineProps({
  items: Array,
  items2: Array,
  title: String,
  tab: {
    type: Boolean,
    default: false,
  },
});

const currentSliderIndex = ref(0);
const itemsPerSlide = ref(4);

const updateItemsPerSlide = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 700) {
    itemsPerSlide.value = 1;
    console.log("Hello");
  } else if (screenWidth <= 900) {
    itemsPerSlide.value = 2;
  } else if (screenWidth <= 1140) {
    itemsPerSlide.value = 3;
  } else {
    itemsPerSlide.value = 4;
  }
};
const nextSlide = () => {
  if (currentSliderIndex.value < props.items.length - itemsPerSlide.value) {
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
    currentSliderIndex.value = props.items.length - itemsPerSlide;
  }
};

const activeTab = ref(0);

const filteredItems = computed(() => {
  if (activeTab.value === 0) {
    return props.items.filter((item) => item.type === "sunset");
  } else if (activeTab.value === 1) {
    return props.items.filter((item) => item.type === "historical");
  }

  return props.items;
});

const ActiveTab1 = () => {
  activeTab.value = 0;
};
const ActiveTab2 = () => {
  activeTab.value = 1;
};
</script>

<template>
  <div
    class="slider-container flex flex-col items-center relative w-full h-full overflow-hidden gap-3"
  >
    <div
      class="slider-header w-full flex items-center justify-between mt-[30px]"
    >
      <div class="slider-title text-[30px] font-bold mt-3">
        {{ props.title }}
      </div>

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
      v-if="props.tab"
      class="slider-tab-container w-full flex items-center gap-3 p-0"
    >
      <button
        class="tabPanels flex items-center rounded-xl p-1.5 text-[13px] border border-[rgba(0,0,0,0.5)] cursor-pointer gap-2"
        :class="{ active: activeTab === 0 }"
        @click="ActiveTab1"
      >
        <span
          class="pi pi-sun text-[#091812]"
          :class="{ active: activeTab === 0 }"
        ></span>
        <span>Sunset cruises</span>
      </button>
      <button
        class="tabPanels flex items-center rounded-xl p-1.5 text-[13px] border border-[rgba(0,0,0,0.5)] cursor-pointer gap-2"
        :class="{ active: activeTab === 1 }"
        @click="ActiveTab2"
      >
        <span
          class="pi pi-warehouse text-[#091812]"
          :class="{ active: activeTab === 1 }"
        ></span>
        <span>Historical tours</span>
      </button>
    </div>
    <div
      class="slides slide1 w-full flex transition-transform duration-700 ease-in-out h-full"
      :class="{ active: activeTab === 0 }"
      :style="`transform: translateX(-${
        currentSliderIndex * (100 / itemsPerSlide)
      }%)`"
    >
      <template v-for="(item, index) in props.items" :key="index">
        <div class="slide flex flex-col p-1 w-auto">
          <div class="slide_item flex flex-col items-center border rounded-xl">
            <MiniSlider :images="item.images" />
            <div class="p-2 bg-white rounded-lg w-full flex flex-col gap-4">
              <div class="itemTitle w-full flex items-center justify-between">
                <h3 class="font-semibold">{{ item.title }}</h3>
                <div class="flex items-center mt-1 gap-2">
                  <span class="text-white bg-yellow-400 p-1 rounded-lg">{{
                    item.rating
                  }}</span>
                  <span class="reviews text-gray-400 ml-1 underline"
                    >{{ item.reviews }} reviews</span
                  >
                </div>
              </div>
              <div class="itemOptions w-full flex flex-col gap-4">
                <p class="text-gray-600 text-[13px]">
                  {{ item.location }} | {{ item.people }} people | lorem ipsum
                </p>
                <span
                  >Starting from
                  <strong class="text-lg ml-3 text-[#469979]">{{
                    item.price
                  }}</strong></span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div
      class="slides slide2 w-full flex transition-transform duration-700 ease-in-out h-full"
      :class="{ active: activeTab === 1 }"
      :style="`transform: translateX(-${
        currentSliderIndex * (100 / itemsPerSlide)
      }%)`"
    >
      <template v-for="(item, index) in props.items2" :key="index">
        <div class="slide flex flex-col p-1 w-auto">
          <div class="slide_item flex flex-col items-center border rounded-xl">
            <MiniSlider :images="item.images" />
            <div class="p-2 bg-white rounded-lg w-full flex flex-col gap-4">
              <div class="itemTitle w-full flex items-center justify-between">
                <h3 class="font-semibold">{{ item.title }}</h3>
                <div class="flex items-center mt-1 gap-2">
                  <span class="text-white bg-yellow-400 p-1 rounded-lg">{{
                    item.rating
                  }}</span>
                  <span class="reviews text-gray-400 ml-1 underline"
                    >{{ item.reviews }} reviews</span
                  >
                </div>
              </div>
              <div class="itemOptions w-full flex flex-col gap-4">
                <p class="text-gray-600 text-[13px]">
                  {{ item.location }} | {{ item.people }} people | lorem ipsum
                </p>
                <span
                  >Starting from
                  <strong class="text-lg ml-3 text-[#469979]">{{
                    item.price
                  }}</strong></span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  max-width: 100%;
  position: relative;
}

.slides {
  display: none;
  transition: transform 0.7s ease-in-out;
}
.slide1.active {
  display: flex;
}
.slide2.active {
  display: flex;
}
.slide {
  min-width: 25%;
}

.arrows {
  transition: background-color 0.3s ease;
}

.reviews {
  font-size: 10px !important;
}

.itemTitle > h3 {
  font-size: 14px !important;
}

.tabPanels {
  background: none !important;
  color: #091812;
}

.tabPanels.active {
  color: #52baab;
  border: 1px solid #52baab;
}

.pi-sun.active {
  color: #52baab;
}
.pi-warehouse.active {
  color: #52baab;
}
.arrows:active {
  background: #e9f7f5ac;
  border: 1px solid #01b89d;
}
@media only screen and (max-width: 1140px) {
  .slide {
    min-width: 33.3% !important;
  }
}

@media only screen and (max-width: 900px) {
  .slide {
    min-width: 50% !important;
  }
}
@media only screen and (max-width: 768px) {
  .slider-container {
    padding: 0 0 80px 0;
    flex-direction: column;
    align-items: flex-start;
  }
  .slider-header {
    margin: 0;
    flex-direction: column;
  }
  .slides {
    position: relative;
    width: 80%;
  }

  .slider-navigation {
    position: absolute;
    top: 90%;
    gap: 30px;
  }
  .slider-tab-container {
    justify-content: center;
  }
}

@media only screen and (max-width: 700px) {
  .slide {
    min-width: 100% !important;
  }
}
</style>
