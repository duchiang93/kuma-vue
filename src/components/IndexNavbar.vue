<template>
  <div class="d-flex justify-content-center index-navbar">
    <div class="position-relative d-flex justify-content-center">
      <a class="d-flex text-decoration-none index-navbar-items" href="#">
        <p
          v-for="(item, index) in navItem"
          :key="index"
          :class="['index-navbar-item', { active: index === activeIndex }]"
          @click="handleItemClick(index)"
        >
          {{ item }}
        </p>
      </a>
      <div
        class="rounded-pill index-navbar-border"
        :style="{ '--active-index': activeIndex }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import content from "../assets/Data/data";

const { navItem } = content();

const activeIndex = ref(0);

const handleItemClick = (index) => {
  activeIndex.value = index;
};
</script>
