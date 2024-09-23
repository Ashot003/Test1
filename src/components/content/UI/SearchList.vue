<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import Select from "./Select.vue";
import DateSelect from "./DateSelect.vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import FilterPanel from "../ContentBlock1/FilterPanel.vue";
import FilterPanelMobile from "../ContentBlock1/FilterPanelMobile.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedCountry = ref("");
const countries = ref([
  { name: "Croatia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "USA", code: "US" },
]);

const selectedType = ref("");
const types = ref([
  { name: "Tours", code: "TS" },
  { name: "Boat", code: "BT" },
  { name: "Yacht", code: "YT" },
  { name: "Jet-Ski", code: "JS" },
]);

const windowWidth = ref(window.innerWidth);
const isDisabled = computed(() => windowWidth.value < 1024);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const mobileFilter = ref(false);

const handleFilter = () => {
  if (isDisabled.value) {
    mobileFilter.value = true;
  }
};

const searching = () => {
  router.push("/search");
};
</script>

<template>
  <Accordion value="1" class="searchBox z-50">
    <AccordionPanel value="0" class="selectGroup">
      <div class="card">
        <Select
          :data="countries"
          :item="selectedCountry"
          placeholder="Select a country"
          icon="/src/assets/Content/location.svg"
          iconOption="/src/assets/Content/location.svg"
        />
        <DateSelect />
        <Select
          :data="types"
          :itemid="selectedType"
          placeholder="Product Type"
          icon="/src/assets/Content/ship.svg"
        />
      </div>
      <div class="filterBox">
        <button class="searchBtn" @click="searching">Search</button>
        <AccordionHeader :disabled="isDisabled">
          <button class="filterBtn" @click="handleFilter">
            <img src="../../../assets/Content/filter.svg" alt="" />
          </button>
        </AccordionHeader>
      </div>
      <AccordionContent class="w-[100%]">
        <FilterPanel />
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
  <FilterPanelMobile
    :visible="mobileFilter"
    @update:visible="(value) => (mobileFilter = value)"
  />
</template>

<style scoped>
.searchBox {
  position: absolute;
  width: 95% !important;
  padding: 15px;
  background: #e6f2f6;
  border-radius: 6px;
  top: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.selectGroup {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.filterBox {
  width: auto !important;
  display: flex;
  align-items: center;
  gap: 5px;
}

::v-deep .p-accordionpanel {
  display: flex !important;
  flex-direction: row;
  align-items: center;
}

::v-deep .p-accordioncontent-content {
  margin: 10px 0 0 0;
  background: none;
}
::v-deep .card {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

::v-deep .p-accordionheader {
  padding: 0 !important;
  background: none !important;
}

::v-deep .p-accordionheader-toggle-icon {
  display: none !important;
}
@media only screen and (max-width: 1320px) {
  .selectGroup {
    gap: 10px;
  }
  .filterBox {
    width: 100% !important;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 100%;
  }
  ::v-deep .p-accordionpanel {
    flex-direction: column;
  }
  .searchBtn {
    width: 85%;
  }
}

@media only screen and (max-width: 768px) {
  .searchBox {
    top: 85%;
  }
}

@media only screen and (max-width: 440px) {
  .searchBox {
    top: 90%;
  }
}
</style>
