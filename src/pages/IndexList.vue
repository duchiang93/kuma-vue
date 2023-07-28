<template>
  <Header :title="title" />
  <IndexNavbar />
  <div class="d-grid gap-4 index-list">
    <div v-for="item in indexList" :key="item.id" class="position-relative">
      <img class="index-list-box-img" :src="item.image" alt="" />
      <div
        class="d-flex flex-column justify-content-center align-items-center text-light index-list-box-text-box"
      >
        <h2>{{ item.title }}</h2>
        <div class="d-flex flex-row">
          <p
            v-for="(category, index) in item.categories"
            :key="index"
            class="flex-row index-list-box-content-box-text-p"
          >
            {{ category }}
          </p>
        </div>
        <div
          class="d-flex justify-content-evenly align-items-center index-list-box-text-box-link-box"
        >
          <router-link
            :to="{ name: 'Portfolio', params: { productId: item.id } }"
            class="index-list-box-link"
          >
            <i class="iconfont index-list-box-link-icon">&#xe624;</i>
          </router-link>
          <div
            @click="handleItemClick(item.image)"
            class="text-decoration-none index-list-box-link"
          >
            <i class="iconfont index-list-box-link-icon">&#xe66b;</i>
          </div>
        </div>
      </div>
      <div class="index-list-content">
        <h2 class="fw-bold index-list-content-title">{{ item.title }}</h2>
        <p class="index-list-content-text">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>

  <div
    class="d-flex justify-content-center align-items-center w-100 h-100 index-list-popup"
    :class="isVisiable ? 'visiable' : ''"
  >
    <img class="index-list-popup-img" :src="imgSrc" alt="" />

    <div class="index-list-popup-close">
      <i
        @click="handleClose"
        class="bi bi-x-circle index-list-popup-close-icon"
      ></i>
    </div>
  </div>
  <Pagination />
  <BackToTop />
</template>

<script setup>
import { ref } from "vue";

import content from "../assets/Data/data";
import Header from "../components/Header.vue";
import IndexNavbar from "../components/IndexNavbar.vue";
import Pagination from "../components/Pagination.vue";
import BackToTop from "../components/BackToTop.vue";

const imgSrc = ref("");
const isVisiable = ref(false);

const handleItemClick = (index) => {
  isVisiable.value = true;
  imgSrc.value = index;
};
const handleClose = () => {
  isVisiable.value = false;
};

const { indexList } = content();

const title = "風格";
</script>
