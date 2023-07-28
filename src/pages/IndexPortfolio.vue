<template>
  <Header :title="breadCrumb" :subTitle="title" />
  <div class="py-5 container index-portfolio">
    <div class="row">
      <div class="d-flex col-md-6">
        <img
          class="index-portfolio-img"
          :src="detail.preImg[preImgIndex]"
          alt=""
        />
      </div>

      <div class="col-md-d-flex flex-column index-portfolio-details">
        <div class="index-portfolio-details-arrow-group">
          <div class="index-portfolio-details-arrow" @click="prevImage">
            <i class="iconfont index-portfolio-details-arrow-icon">&#xe611;</i>
          </div>
          <div class="index-portfolio-details-arrow" @click="nextImage">
            <i class="iconfont index-portfolio-details-arrow-icon">&#xe64a;</i>
          </div>
        </div>
        <h2>
          {{ detail.title }}
        </h2>
        <hr />
        <ul class="py-3">
          <li
            v-for="(item, index) in detail.feature"
            :key="index"
            class="index-portfolio-details-feature-item"
          >
            {{ item }}
          </li>
        </ul>
        <div class="d-flex index-portfolio-details-category-group">
          <i class="pe-2 iconfont index-portfolio-details-category-icon"
            >&#xe607;</i
          >
          <div>
            <h5 class="fw-bold lh-lg">模板需求分類</h5>
            <span class="index-portfolio-details-category-text">
              {{ detail.category }}
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>

    <div className="row py-5">
      <div className="col-12 col-md-6">
        <img
          v-for="(preImg, index) in detail.preImg"
          @click="handlePreImg(index)"
          class="index-portfolio-pre-img"
          :src="preImg"
          :alt="detail.title"
          :key="index"
        />
      </div>
    </div>
    <div>
      <h3>Related Product</h3>
      <div class="gap-3 card-group">
        <div
          v-for="(relatedProduct, index) in detail.related"
          :key="index"
          class="card index-portfolio-related-product-card"
        >
          <img :src="relatedProduct.image" />
          <div class="card-body">
            <h5 class="card-title">{{ relatedProduct.title }}</h5>
            <p class="card-text">{{ relatedProduct.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination />
  <BackToTop />
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import content from "../assets/Data/data";
import Header from "../components/Header.vue";
import Pagination from "../components/Pagination.vue";
import BackToTop from "../components/BackToTop.vue";

const route = useRoute();
const productId = route.params.productId;
const { indexList } = content();
const { title, detail } = indexList[productId];

const preImgIndex = ref(0);
const handlePreImg = (preImg) => {
  preImgIndex.value = preImg;
};

const prevImage = () => {
  if (preImgIndex.value <= 0) {
    preImgIndex.value = detail.preImg.length - 1;
  } else {
    preImgIndex.value -= 1;
  }
};

const nextImage = () => {
  if (preImgIndex.value >= detail.preImg.length - 1) {
    preImgIndex.value = 0;
  } else {
    preImgIndex.value += 1;
  }
};

const breadCrumb = "風格";
</script>
