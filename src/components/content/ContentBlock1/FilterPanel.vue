<script setup>
import { ref } from "vue";
import NumberCounter from "../UI/NumberCounter.vue";
import RadioButton from "../UI/RadioButton.vue";
import RangeSlider from "../UI/Slides/RangeSlider.vue";

const items = ref([
  { name: "With Skipper", key: "true" },
  {
    name: "Without Skipper",
    key: "false",
  },
]);
const selectedItem = ref("");

const countPeople = ref(1);
const countCabins = ref(1);
const countBerths = ref(1);

const priceSlideValue = ref([0, 5000]);
const powerSlideValue = ref([0, 500]);
const berthSlideValue = ref([2000, 2023]);
</script>

<template>
  <div class="filter_box flex justify-between items-start">
    <div class="categoryBox grid grid-col-[auto] gap-[15px]">
      <div class="categoryBox__title text-[11px] text-[#091812] font-medium">
        Type of navigation
      </div>
      <RadioButton :categories="items" :selected="selectedItem" />
    </div>
    <div
      class="counterBox flex flex-col items-center gap-[20px] justify-center w-[290px]"
    >
      <NumberCounter
        name="Number of people"
        :count="countPeople"
        @updateCount="(value) => (countPeople = value)"
      />
      <NumberCounter
        name="Number of cabins"
        :count="countCabins"
        @updateCount="(value) => (countCabins = value)"
      />
      <NumberCounter
        name="Number of berths"
        :count="countBerths"
        @updateCount="(value) => (countBerths = value)"
      />
    </div>
    <div class="sliderBox w-[220px] flex flex-col">
      <RangeSlider
        title="Price per day"
        rate="$"
        :value="priceSlideValue"
        :min="0"
        :max="5000"
      />
    </div>
  </div>
</template>

<style scoped>
.filter_box {
  width: 100%;
}
</style>
