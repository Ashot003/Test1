<script setup>
const props = defineProps({
  title: String,
  items: {
    type: Object,
    item1: String,
    item2: String,
    item3: String,
    item4: String,
  },
  icon: Object,
});
</script>

<template>
  <div class="menuCase w-[250px] flex flex-col gap-1">
    <div class="case-title mt-5">
      <span class="text-white text-[13px] font-semibold">{{
        props.title
      }}</span>
    </div>
    <div class="case-subtitle flex flex-col items-start gap-1">
      <span class="text-white text-[13px] font-[400]">{{
        props.items.item1
      }}</span>
      <span class="text-white text-[13px] font-[400]">{{
        props.items.item2
      }}</span>
      <span class="text-white text-[13px] font-[400]">{{
        props.items.item3
      }}</span>
      <span class="text-white text-[13px] font-[400]">{{
        props.items.item4
      }}</span>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 1024px) {
  .menuCase {
    width: 100% !important;
    border-bottom: 1px solid #262454;
    padding: 10px 0;
    justify-content: center;
    margin: 0;
  }
  .case-title {
    margin: 0;
  }
}
</style>
