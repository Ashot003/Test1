import { createApp } from "vue";
import "./style.css";
import "../node_modules/flowbite-vue/dist/index.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.mount("#app");
