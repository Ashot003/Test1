import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SearchResult from "./pages/SearchResult.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/search", component: SearchResult },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
