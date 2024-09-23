<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import NumberCounter from "../UI/NumberCounter.vue";
import RangeSlider from "../UI/Slides/RangeSlider.vue";

const props = defineProps({
  visible: Boolean,
});
const emit = defineEmits(["update:visible"]);

const dialogVisible = ref(props.visible);

watch(
  () => props.visible,
  (newValue) => {
    console.log({ newValue }, "props");

    dialogVisible.value = newValue;
  }
);

const closeDialog = () => {
  emit("update:visible", false);
};

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
const powerSlideValue = ref([200, 500]);
const yearSlideValue = ref([2000, 2023]);
</script>

<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Filter"
    :title="{
      style: {
        fontSize: '24px',
        color: 'red',
      },
    }"
    :style="{ width: '25rem' }"
    class="bg-black"
    :closeButtonProps="{
      onClick: closeDialog,
      class: 'custom-icon',
      style: {
        background: 'none',
        border: '1px solid #091812',
        color: '#091812',
        borderRadius: '360px',
        width: '25px',
        height: '25px',
      },
    }"
  >
    <template #header>
      <h3 :style="{ fontSize: '24px', color: '#08063C', fontWeight: '600' }">
        Filter
      </h3>
    </template>

    <template #default>
      <div class="modalBox flex flex-col w-full gap-3 min-h-[100px] border-t">
        <div class="priceSlider w-full flex border-b p-2">
          <RangeSlider
            title="Price per day"
            rate="$"
            :value="priceSlideValue"
            :min="0"
            :max="5000"
          />
        </div>
        <NumberCounter
          name="Number of people"
          :count="countPeople"
          @updateCount="(value) => (countPeople = value)"
          class="w-full justify-between"
        />
        <NumberCounter
          name="Number of cabins"
          :count="countCabins"
          @updateCount="(value) => (countCabins = value)"
          class="w-full justify-between"
        />
        <NumberCounter
          name="Number of berths"
          :count="countBerths"
          @updateCount="(value) => (countBerths = value)"
          class="w-full justify-between"
        />
        <div class="powerSlider w-full flex border-b p-2">
          <RangeSlider
            title="Engine Power"
            option="hp"
            :value="powerSlideValue"
            :min="200"
            :max="500"
          />
        </div>
        <div class="berthSlider w-full flex border-b p-2">
          <RangeSlider
            title="Year of manufacture"
            :value="yearSlideValue"
            :min="2000"
            :max="2023"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-2 w-full">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="closeDialog"
          class="w-1/2"
        />
        <Button type="button" label="Save" @click="closeDialog" class="w-1/2" />
      </div>
    </template>
  </Dialog>
</template>

<style scoped></style>
