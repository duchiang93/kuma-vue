<template>
  <section class="aside-menu">
    <RouterLink to="/">
      <div class="d-flex align-items-center justify-content-center">
        <img class="aside-menu-logo-img" :src="logo" alt="" /></div
    ></RouterLink>
    <div class="d-flex flex-column align-items-center aside-menu-content">
      <ul class="d-grid gap-5 text-center list-unstyled">
        <li v-for="(item, index) in asideMenu" :key="index">
          <router-link class="aside-menu-item-text" :to="item.url">
            {{ item.content }}
          </router-link>
        </li>
      </ul>
      <div class="aside-menu-footer">
        <p class="aside-menu-footer-text">boxing club</p>
      </div>
    </div>

    <div class="my-4 sidebar" :class="isOpen ? 'active' : ''">
      <div class="d-flex">
        <ul class="d-flex align-items-center gap-3 list-unstyled">
          <li v-for="(item, index) in sideBar" :key="index">
            <router-link :to="item.url" class="burger-item">{{
              item.content
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <span
      class="toggle"
      :class="isOpen ? 'active' : ''"
      @click="toggleMenu"
    ></span>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

import logo from "../assets/Img/logo.png";
import content from "../assets/Data/data";

const isOpen = ref(false);
const sideBar = [
  { url: "/", content: "首頁" },
  { url: "/theme", content: "風格" },
  { url: "/", content: "色系" },
  { url: "/contact", content: "聯絡我們" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const { asideMenu } = content();
</script>
