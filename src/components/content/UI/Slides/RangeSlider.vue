<script setup>
import { ref } from "vue";
import Slider from "primevue/slider";

const props = defineProps({
  title: String,
  value: {
    type: Array,
  },
  rate: String,
  option: String,
  min: {
    type: Number,
    default: 2000,
  },
  max: {
    type: Number,
    default: 2000,
  },
});

const value = ref([...props.value]);
</script>

<template>
  <div class="sliderCase flex flex-col gap-[20px] w-[100%]">
    <div class="sliderCase__title text-[13px] font-medium">
      {{ props.title }}
    </div>
    <Slider v-model="value" :max="props.max" range class="w-full" />
    <div class="sliderValues flex w-full justify-between items-center">
      <div
        class="case fromCase flex p-[10px] rounded-[5px] w-[70px] min-h-[40px] text-[8px] flex-col items-center bg-white"
      >
        <span class="case__title">From</span>
        <span class="case__value"
          ><span class="rate"
            >{{ props.rate }}{{ value[0] }}{{ props.option }}</span
          ></span
        >
      </div>
      <div
        class="case toCase flex p-[10px] rounded-[5px] w-[70px] min-h-[40px] text-[8px] flex-col items-center bg-white"
      >
        <span class="case__title">To</span>
        <span class="case__value"
          ><span class="rate"
            >{{ props.rate }}{{ value[1] }}{{ props.option }}</span
          ></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep .p-slider-range {
  background: #ccebeb !important;
}

::v-deep .p-slider-handle::before {
  background: #52baab !important;
}

::v-deep .p-slider-handle {
  background: none !important;
}
</style>
