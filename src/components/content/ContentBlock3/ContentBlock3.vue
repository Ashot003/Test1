<script setup></script>
<template>
  <div
    class="content__block3 w-full flex items-center bg-[#EBF7FB] p-[80px] gap-3 flex-col"
  >
    <div class="contentBlock3__title w-full flex items-center justify-center">
      <span>Keep things flexible</span>
    </div>
    <div
      class="contentBlock3__subtitle w-full flex items-center justify-center"
    >
      <span
        >Use Reserve Now & Pay Later to secure the activities you don't <br />
        want to miss without being locked in.</span
      >
    </div>
  </div>
</template>

<style scoped>
.contentBlock3__title span {
  font-size: 35px !important;
  font-weight: 700;
}

.contentBlock3__subtitle span {
  font-size: 15px;
  font-weight: 400;
  color: #08063c;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .contentBlock3__title span {
    font-size: 25px !important;
  }
}

@media only screen and (max-width: 425px) {
  .content__block3 {
    padding: 25px;
  }
}

@media only screen and (max-width: 375px) {
  .contentBlock3__title {
    font-size: 20px !important;
  }
}
</style>
