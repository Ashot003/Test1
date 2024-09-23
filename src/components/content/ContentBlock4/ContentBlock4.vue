<script setup>
import { ref } from "vue";
import Slider from "../UI/Slides/Slider.vue";

const block4Items = ref([
  {
    logo: "/src/assets/Content/item1.svg",
    title: "Free cancellation",
    subtitle: "Stay flexible on your trip.",
  },
  {
    logo: "/src/assets/Content/item2.svg",
    title: "300,000+ experiences",
    subtitle: "Make memories around the world.",
  },
  {
    logo: "/src/assets/Content/item3.svg",
    title: "Reserve now, pay later",
    subtitle: "Book your spot.",
  },
  {
    logo: "/src/assets/Content/item4.svg",
    title: "Trusted reviews",
    subtitle: "4.3 stars from 140,000+ Trustpilot reviews.",
  },
]);

const boats = [
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat4.jpg",
      "/src/assets/Content/boat2.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat4.jpg",
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat4.jpg",
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat3.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat3.jpg",
      "/src/assets/Content/boat4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/boat.jpg",
      "/src/assets/Content/boat2.jpg",
      "/src/assets/Content/boat4.jpg",
      "/src/assets/Content/boat3.jpg",
    ],
  },
];

const tours = [
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },

  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours4.jpg",
      "/src/assets/Content/tours3.jpg",
    ],
  },

  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
  {
    title: "Atlantic 65 Sundeck",
    location: "Croatia, Zadar",
    people: 8,
    price: "305 €",
    reviews: 34,
    rating: 4.7,
    images: [
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
];

const tours2 = [
  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours4.jpg",
      "/src/assets/Content/tours2.jpg",
    ],
  },
  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
      "/src/assets/Content/tours2.jpg",
    ],
  },
  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },

  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours4.jpg",
      "/src/assets/Content/tours3.jpg",
    ],
  },

  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
  {
    title: "QUCIKSILVER 855 SD",
    location: "Germania, Berlin",
    people: 20,
    price: "500 €",
    reviews: 120,
    rating: 3.5,
    images: [
      "/src/assets/Content/tours.jpg",
      "/src/assets/Content/tours2.jpg",
      "/src/assets/Content/tours3.jpg",
      "/src/assets/Content/tours4.jpg",
    ],
  },
];
</script>

<template>
  <div
    class="content__block4 bg-white w-full flex items-center flex-col pt-6 p-[20px]"
  >
    <div
      class="contentBlock4__header w-full flex items-center flex-col gap-3 p-5"
    >
      <div
        class="contentBlock4__header-title w-full flex items-center justify-center"
      >
        <span>Why book with Arkally?</span>
      </div>
      <div
        class="contentBlock4__header-itemCase w-full flex items-center justify-center gap-10"
      >
        <div
          class="header-items flex flex-col items-center justify-center gap-2"
          v-for="item in block4Items"
          :key="item.title"
        >
          <div class="item_logo"><img :src="item.logo" alt="" /></div>
          <span class="item_title">{{ item.title }}</span>
          <span class="item_subtitle">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
    <div class="contentBlock4__content w-full flex flex-col items-center gap-3">
      <Slider title="Boats" :items="boats" />
      <div class="boatAd w-full flex flex-col items-center mt-10">
        <div
          class="boatAdBox relative min-w-full flex justify-center flex-col items-center p-4 gap-5"
        >
          <span class="boatAd_title flex w-full items-center font-bold z-40">
            Turn Your Boat into Earnings
          </span>
          <div
            class="boatAd_subtitle flex w-full items-center font-medium text-[13px] text-[rgba(255,255,255,0.9)] z-40"
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the<br />
            1500s, when an unknown printer took a galley of type and scrambled
            it to<br />
            make a type specimen book
          </div>
          <div class="boatAd_action w-full flex items-center z-40 mb-3">
            <button class="bg-black rounded-md">List your Boat</button>
          </div>
          <img
            src="/src/assets/Content/ad.jpg"
            class="object-cover object-center absolute top-0 left-0 min-h-full rounded-xl w-full"
            alt=""
          />
        </div>
      </div>
      <Slider
        title="Tours"
        :items="tours"
        :items2="tours2"
        class="custom-slider"
        :tab="true"
      />
      <div class="citiesBox w-full flex flex-col gap-5 mb-10">
        <span class="box-title flex items-center font-bold text[17px]"
          >Popular Cities</span
        >
        <span class="box-subtitle flex items-center font-medium text-sm">
          Things to do in Dubai | Things to do in Dubai | Things to do in
          Dubrovnik | Things to do in Dubai | Things to do in Dubai | Things to
          do in Dubai | Things to do in Amsterdam | Things to do in Dubrovnik |
          Things to do in Deli | Things to do in Italy | Things to do in Dubai |
          Things to do in Dubai |Things to do in Zurich | Things to do in
          Singapore | Things to do in Rome | Things to do in Paris | Things to
          do in Zadar | Things to do in Dubai | Things to do in Dubai | Things
          to do in Dubai | Things to do in Dubai | Things to do in Dubai |
          Things to do in Dubai
        </span>
        <span class="box-title flex items-center font-bold text-lg"
          >Popular Attractions</span
        >
        <span class="box-subtitle flex items-center font-medium text-sm">
          Antelope Canyon | Aquarium of the Pacific | Xcaret | British Museum |
          San Diego Zoo Safari Park | London Natural History Museum | Chichen
          Itza | Machu Picchu | Hoover Dam | Teotihuacan | Gondola Rides at the
          Venetian | Arch of Cabo San Lucas (El Arco) | Stonehenge | Teotihuacan
          | Molokini Crater
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentBlock4__header-title span {
  font-size: 30px !important;
  font-weight: 700;
}
.header-items {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item_title {
  font-weight: 600;
  font-size: 17px !important;
}

.boatAd {
  padding: 20px 20px !important;
  border-radius: 20px;
}

.boatAd_title {
  color: white;
  font-size: 35px !important;
}

.citiesBox {
  padding: 20px;
}

.custom-slider {
  margin: 100px 0 0 0;
}

@media only screen and (max-width: 1530px) {
  .citiesBox {
    padding: 20px 0 !important;
  }
}

@media only screen and (max-width: 1190px) {
  .contentBlock4__header-itemCase {
    gap: 10px !important;
  }
}

@media only screen and (max-width: 1024px) {
  .contentBlock4_header-itemCase {
    gap: 5px !important;
  }
  .custom-slider {
    margin: 0 !important;
  }
}

@media only screen and (max-width: 990px) {
  .contentBlock4__header-itemCase {
    width: 100%;
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
  .header-items {
    width: 100%;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
    padding: 0 0 30px 0;
    margin: 5px 0 0 0;
  }
}

@media only screen and (max-width: 768px) {
  .content__block4 {
    padding: 0 0 0 10px;
  }
  .boatAd {
    margin: 10px 0 0 0 !important;
  }

  .boatAd_title {
    justify-content: center;
    align-items: center;
    font-size: 20px !important;
  }
  .boatAd_subtitle {
    justify-content: center;
    font-size: 11px !important;
  }
  .boatAd_subtitle br {
    display: none;
  }
  .boatAd_action {
    justify-content: center;
    align-items: center;
  }
  .box-title,
  .box-subtitle {
    justify-content: center;
  }
  .box-title {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 425px) {
  .contentBlock4__header {
    padding: 10px !important;
  }
  .contentBlock4__header-title span {
    font-size: 20px !important;
  }
  .boatAd_title {
    font-size: 15px !important;
  }
}
</style>
