<script setup>
import "primeicons/primeicons.css";
import Menubar from "primevue/menubar";

const props = defineProps({
  items: Array,
  visible: "mobile" | "desctop",
});
</script>

<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>

<style scoped>
::v-deep .card {
  width: 100%;
  padding: 0;
}
.p-menubar {
  width: 100% !important;
  border: none;
  padding: 0;
}

.p-menubar-root-list {
  gap: 10px;
}

.p-menubar-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.p-menubar-item-content > a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
}

::v-deep .p-menubar-item a {
  color: #08063c !important; /* Change text color */
  font-size: 13px;
  font-family: "Montserrat";
  font-weight: 500;
}
::v-deep .p-menubar-item-icon {
  color: #a2cbbb;
  font-size: 20px;
}

::v-deep .card.mobile {
  display: none;
}

@media only screen and (max-width: 961px) {
  ::v-deep .p-menubar-mobile {
    background: none;
  }
  ::v-deep .p-menubar-button {
    background: none !important;
    border-radius: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0 0 0;
  }

  ::v-deep .p-menubar-root-list {
    width: 210px !important;
    position: absolute;
    transform: translateX(-70%);
    transition: all 0.3s ease;
  }

  ::v-deep .menubar-submenu {
    position: absolute;
    transform: translateX(-50%);
  }

  ::v-deep .p-menubar-item-icon {
    font-size: 11px;
  }
}
</style>
