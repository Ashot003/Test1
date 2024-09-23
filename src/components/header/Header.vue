<script setup>
import { ref } from "vue";
import "primeicons/primeicons.css";
import Menubar from "./UI/Menubar.vue";

const activeMenu = ref(false);

const openBurgerMenu = () => {
  activeMenu.value = true;
};

const closeBurgerMenu = () => {
  activeMenu.value = false;
};

const menuItems = ref([
  {
    label: "Explore",
    icon: "pi pi-th-large",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
      },
    ],
  },
  {
    label: "About",
    icon: "pi pi-star",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
      },
    ],
  },
  {
    label: "HelpDesk",
    icon: "pi pi-question-circle",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
      },
    ],
  },
  {
    label: "Blog",
    icon: "pi pi-book",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
      },
    ],
  },
]);
</script>

<template>
  <div class="header">
    <div class="header_block1 header_block">
      <div class="logo"><img src="../../assets/Header/logo.svg" alt="" /></div>
      <div class="block1__menuBox menuBox">
        <ul class="block1__menu header__menu">
          <li class="block1__menuItem header__menuItem other__item">
            <img src="../../assets/Header/usa.svg" alt="" /> En / USD$
          </li>
          <li class="block1__menuItem header__menuItem">List your boat</li>
          <li class="block1__menuItem header__menuItem">Help</li>
          <li class="block1__menuItem header__menuItem">Login</li>
          <li class="block1__menuItem header__menuItem">Sign Up</li>
        </ul>
      </div>
      <div class="burgerMenu__icon" @click="openBurgerMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="header_block2 header_block">
      <Menubar :items="menuItems" visible="desctop" />
    </div>
    <div :class="['burgerMenu__case', { 'active-menu': activeMenu }]">
      <div class="close_burgerMenu">
        <i class="fa-solid fa-x" @click="closeBurgerMenu"></i>
      </div>
      <ul class="burgerMenu">
        <li class="burgerMenu__item other__item burgerMenu__other__item">
          <img src="../../assets/Header/usa.svg" alt="" /> En / USD$
        </li>
        <li class="burgerMenu__item">List your boat</li>
        <li class="burgerMenu__item">Help</li>
        <li class="burgerMenu__item">Login</li>
        <li class="burgerMenu__item">Sign Up</li>

        <Menubar :items="menuItems" visible="mobile" />
      </ul>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  background: white;
  gap: 20px;
}

.header_block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.header_block1 {
  border-bottom: 1px solid #e8e8e8;
  z-index: 1;
  padding-bottom: 10px;
}

.header__menu {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  cursor: pointer;
}

.header__menuItem {
  font-size: 13px;
  font-family: "Montserrat";
  font-weight: 500;
  color: #08063c;
}

.other__item {
  border: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  gap: 5px;
}

.burgerMenu__case,
.burgerMenu__icon {
  display: none;
}

.block2__menuItem {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.block2__burgerMenu__item {
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 10px;
}

.fa-x {
  font-size: 12px;
  color: rgb(114, 114, 114);
}
@media only screen and (max-width: 961px) {
  .header {
    padding: 10px 15px;
  }
  .header__menu {
    display: none;
  }

  .burgerMenu__icon {
    display: flex;
  }

  .burgerMenu__case {
    padding: 10px;
    width: 150px;
    min-height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    background: #fbfbfb;
    border-radius: 10px;
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 999;
  }

  .burgerMenu__case.active-menu {
    right: 0;
  }

  .burgerMenu {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .burgerMenu__item {
    font-size: 12px;
    font-family: "Montserrat";
    font-weight: 500;
    color: #08063c;
  }
  .burgerMenu__item:nth-child(6) {
    margin: 20px 0 0 0;
  }
  .burgerMenu__other__item {
    width: 120px;
    padding: 8px;
    background: #e2e1e1;
  }

  .fa-solid {
    transition: 0.2s ease;
  }

  .fa-solid:active {
    transform: scale(0.9);
  }
  .header_block2 {
    display: none;
  }
}

@media only screen and (max-width: 425px) {
  .header {
    padding: 10px 20px;
  }
  .block2__menu {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
