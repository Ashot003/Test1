<script setup>
import RadioButton from "primevue/radiobutton";
import { ref } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    name: String,
    key: String,
  },
  selected: String,
});

const selectedItem = ref(props.selected);
const items = ref(props.categories);
</script>

<template>
  <div class="flex flex-col gap-4 w-[30%]">
    <div
      v-for="item in items"
      :key="item.key"
      class="flex items-center gap:10px"
    >
      <RadioButton
        v-model="selectedItem"
        :inputId="item.key"
        name="category"
        :value="item.name"
      />
      <label
        :for="item.key"
        class="ml-2 text-[10px] flex w-[100px] font-medium text-[#091812]"
      >
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<style scoped></style>
