<template>
  <div class="d-flex justify-content-center home-swiper">
    <swiper
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
      }"
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="pic in homeSwiperPics" :key="pic">
        <img class="home-swiper-img" :src="pic" alt="" />
      </swiper-slide>
    </swiper>

    <div class="text-center home-swiper-text-box">
      <h2 class="home-swiper-content-text1">卓越品質 歷久不衰</h2>

      <h3 class="home-swiper-content-text2">讓經營成為享受</h3>

      <h3 class="home-swiper-content-text2">酷碼 期待與您的合作</h3>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import homeSwiperPic from "../assets/Img/02.png";
import homeSwiperPic1 from "../assets/Img/03.png";
import Footer from "../components/Footer.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation];
const homeSwiperPics = [homeSwiperPic, homeSwiperPic1];
</script>
