<script setup>
import { ref } from "vue";
import "primeicons/primeicons.css";
import FooterMenu from "./FooterMenu.vue";

const menuHome = ref({
  item1: "About Us ",
  item2: "Careers",
  item3: "Blog",
});

const menuHelp = ref({
  item1: "General Travel",
  item2: "Health Concerns",
  item3: "Safety Measures",
  item4: "FAQ",
});

const menuPolicy = ref({
  item1: "Terms of Service",
  item2: "Privacy Policy",
});

const menuContacts = ref({
  item1: "1901 Thornridge Cir. Shiloh, Hawaii, 81063",
  item2: "example@gmail.com",
  item3: "+ 123 456 789",
});
</script>

<template>
  <div class="footer w-full flex-col items-center bg-[#08063C]">
    <div class="logo w-full items-center pb-8 border-b border-[#262454]">
      <img src="../../assets/Footer/logo.svg" alt="" />
    </div>
    <div class="menuBox w-full flex items-start gap-[5%]">
      <FooterMenu title="Home" :items="menuHome" />
      <FooterMenu title="Help" :items="menuHelp" />
      <FooterMenu title="Policy" :items="menuPolicy" />
      <div class="menuCase flex flex-col gap-1">
        <div class="case-title mt-5">
          <span class="text-white text-[13px] font-semibold">Contacts</span>
        </div>
        <div class="case-subtitle flex flex-col items-start gap-2">
          <span
            class="text-white text-[13px] flex items-start gap-2 font-[400]"
          >
            <i class="pi pi-map-marker text-[rgba(255,255,255,0.6)]"></i>
            {{ menuContacts.item1 }}
          </span>
          <span
            class="text-white text-[13px] flex items-start gap-2 font-[400]"
          >
            <i class="pi pi-envelope text-[rgba(255,255,255,0.6)]"></i>
            {{ menuContacts.item2 }}
          </span>
          <span
            class="text-white text-[13px] flex items-start gap-2 font-[400]"
          >
            <i class="pi pi-phone text-[rgba(255,255,255,0.6)]"></i
            >{{ menuContacts.item3 }}
          </span>
        </div>
      </div>
      <div class="menuSearchBox flex flex-col items-start gap-2 mt-5">
        <span class="menuSearchBox__title text-[13px] text-white font-semibold"
          >Join a Newsletter</span
        >
        <div class="menuSearchBox__input flex items-center gap-2">
          <input
            type="search"
            placeholder="Email address"
            class="p-0.5 w-[180px] rounded-md text-[12px] relative"
          />
          <button class="">Send</button>
        </div>
      </div>
    </div>
    <div class="shareBox w-full flex items-center mt-8 justify-between">
      <span class="copyright text-[11px] text-white"
        >Copyright © 2023. ARKALLY
      </span>
      <div class="shareBtns flex gap-1">
        <img src="../../assets/Footer/inst.svg" alt="" class="cursor-pointer" />
        <img
          src="../../assets/Footer/facebook.svg"
          alt=""
          class="cursor-pointer"
        />
        <img
          src="../../assets/Footer/inchat.svg"
          alt=""
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 30px 60px;
}

.menuBox {
  padding: 10px 0 0 0;
  padding-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.menuSearchBox__input input {
  padding-left: 10px !important;
  text-decoration-line: non;
}
.menuSearchBox__input input:focus-visible {
  outline: none;
}

.copyright {
  font-size: 11px !important;
}

.pi-chevron-down {
  font-size: 11px !important;
}
@media only screen and (max-width: 1060px) {
  .footer {
    padding: 30px 20px;
  }
}
@media only screen and (max-width: 1024px) {
  .footer {
    padding: 30px;
  }
  .menuBox {
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
  .menuSearchBox {
    width: 100%;
    margin: 40px 0 0 0;
  }
  .menuSearchBox__input {
    width: 100%;
  }
  .menuSearchBox__input input {
    width: 90%;
  }
}

@media only screen and (max-width: 425px) {
  .footer {
    padding: 30px 10px;
  }
}
</style>
