<script setup>
import SearchList from "../UI/SearchList.vue";
</script>

<template>
  <div class="content__block1">
    <div class="block1__title">
      <span
        >Search for Boats,Locations, <br />
        or Boat Types</span
      >
    </div>
    <img src="/src/assets/Content/background.jpg" alt="" />
    <SearchList />
    <div>akdsk</div>
  </div>
</template>

<style scoped>
.content__block1 {
  position: relative;
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8% 30px 0 30px;
  align-items: center;
  aspect-ratio: 16/5;
}

.content__block1 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.block1__title {
  width: 100%;
  display: flex;
  align-items: center;
}
.block1__title > span {
  width: 100%;
  font-size: 46px !important;
  font-family: "Montserrat";
  font-weight: 700;
  color: white;
  z-index: 2;
}

@media only screen and (max-width: 1320px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 961px) {
  .block1__title {
    padding: 0 20px;
  }
}

@media only screen and (max-width: 890px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 768px) {
  .block1__title > span {
    font-size: 30px !important;
  }
  .content__block1 {
    background-position: center;
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 600px) {
  .block1__title > span {
    font-size: 24px !important;
  }
}

@media only screen and (max-width: 580px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 520px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}
@media only screen and (max-width: 480px) {
  .content__block1 {
    padding: 0 0 0 0;
    aspect-ratio: 16/5;
  }
  .block1__title {
    justify-content: center;
    padding: 10px 0;
  }
  .block1__title > span {
    color: black;
    text-align: center;
  }

  .content__block1 img {
    position: static;
  }
}

@media only screen and (max-width: 440px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 390px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}

@media only screen and (max-width: 360px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}
@media only screen and (max-width: 340px) {
  .content__block1 {
    aspect-ratio: 16/5;
  }
}
</style>
