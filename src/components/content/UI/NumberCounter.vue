<script setup>
import { ref, watch, defineEmits } from "vue";

const props = defineProps({
  name: String,
  count: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["updateCount"]);

const count = ref(props.count);

watch(
  () => props.count,
  (newVal) => {
    count.value = newVal;
  }
);

const countMinus = () => {
  if (count.value > 1) {
    count.value--;
    emit("updateCount", count.value);
  }
};

const countPlus = () => {
  count.value++;
  emit("updateCount", count.value);
};
</script>

<template>
  <div class="counter flex items-center gap-[15px]">
    <div class="counter_name text-[13px]">{{ props.name }}</div>
    <div class="counterBtns flex items-center gap-[5px]">
      <button
        class="countMinus rounded-full bg-transparent"
        @click="countMinus"
      >
        <img src="../../../assets/Content/minus.svg" alt="" />
      </button>
      <div class="countValue">{{ props.count }}</div>
      <button class="countPlus rounded-full bg-transparent" @click="countPlus">
        <img src="../../../assets/Content/plus.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.counterBtns > button:hover {
  background: none !important   ;
}
</style>
