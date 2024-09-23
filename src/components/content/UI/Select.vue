<script setup>
import Select from "primevue/select";
import { ref } from "vue";

const props = defineProps({
  data: Object,
  item: String,
  placeholder: String,
  icon: String,
  iconOption: String,
});

const selectData = ref(props.data);

const selectedValue = ref(props.item);
</script>

<template>
  <Select
    v-model="selectedValue"
    :options="selectData"
    optionLabel="name"
    :placeholder="props.placeholder"
    class="custom-select w-[32%]"
  >
    <template #value="selectData">
      <div
        v-if="selectData.value"
        class="flex items-center selectBox"
        style="gap: 10px"
      >
        <img
          :alt="selectData.value.label"
          :src="props.icon"
          :class="`mr-2 flag flag-${selectData.value.code.toLowerCase()}`"
          style="width: 15px"
        />
        <div>{{ selectData.value.name }}</div>
      </div>
    </template>

    <template #option="selectData">
      <div
        class="flex items-center option-item"
        style="width: 100%; display: flex; gap: 10px"
      >
        <img
          :alt="selectData.option.label"
          :src="props.iconOption"
          :class="`mr-2 flag flag-${selectData.option.code.toLowerCase()}`"
          style="width: 15px"
        />
        <div class="select_option_name">{{ selectData.option.name }}</div>
      </div>
    </template>
  </Select>
</template>

<style scoped>
::v-deep .p-select {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: none;
}

::v-deep .p-select-label {
  font-size: 11px;
  font-family: "Montserrat";
  font-weight: 500;
}

::v-deep .flex.item-center.p-select-option {
  display: flex;
  align-items: center;
}
::v-deep .flex {
  display: flex;
  align-items: center;
}
::v-deep .option-item {
  width: 100% !important;
  display: flex;
  align-items: center;
}

::v-deep .select_option_name {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-family: "Montserrat";
}

@media only screen and (max-width: 768px) {
  .p-select.p-component.p-inputwrapper.custom-select {
    width: 100% !important;
  }
}
</style>
