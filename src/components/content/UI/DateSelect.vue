<script setup>
import DatePicker from "primevue/datepicker";
import { ref } from "vue";
import "primeicons/primeicons.css";

const date = ref();
</script>

<template>
  <div class="datepicker-container relative w-[32%]">
    <DatePicker
      v-model="date"
      id="datePicker"
      placeholder="Date"
      class="w-full p-inputtext"
    >
      <template #date="{ date }">
        <div
          class="custom-date-cell hidden"
          :style="{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: date.selectable ? '#e0e0e0' : 'transparent',
            left: '0 !important',
            padding: '0 !important',
          }"
        >
          {{ date.day }}
        </div>
      </template>
    </DatePicker>
    <!-- Arrow down icon -->
    <i
      class="pi pi-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6d6d6d] cursor-pointer z-50"
    ></i>
    <i
      class="pi pi-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] cursor-pointer z-50"
    ></i>
  </div>
</template>

<style scoped>
::v-deep .p-datepicker-input {
  font-size: 13px !important;
}

::v-deep .p-datepicker-weekday-cell {
  padding: 0 !important;
}

/* Ensure the icon is positioned properly */
.datepicker-container {
  position: relative;
}

.datepicker-container i {
  pointer-events: none;
}
::v-deep #datePicker {
  padding: 0 !important;
  border: none !important;
  width: 100% !important;
}

::v-deep #datePicker input {
  cursor: pointer;
  padding: 5px 45px !important;
}
/* For mobile responsiveness */
@media only screen and (max-width: 768px) {
  ::v-deep #datePicker {
    width: 100% !important;
  }
  .datepicker-container {
    width: 100%;
  }
  #datePicker-panel {
    --p-datepicker-panel-padding: 10px; /* Уменьшаем отступы для маленьких экранов */
    width: 50%; /* Задаем ширину на 50% экрана */
    max-width: 200px; /* Ограничиваем максимальную ширину */
  }
  ::v-deep .p-datepicker-calendar td {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
