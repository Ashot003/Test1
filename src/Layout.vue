<script setup>
import Content from "./components/content/Content.vue";
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";
</script>
<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped></style>
