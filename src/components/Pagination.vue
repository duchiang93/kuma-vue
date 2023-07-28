<template>
  <div class="d-flex justify-content-center">
    <div
      class="d-flex align-items-center justify-content-center rounded-pill pagination-items"
    >
      <a
        v-for="(pageNumber, index) in pageNumbers"
        :key="index"
        href="#"
        :class="['pagination-item', { active: index === activeIndex }]"
        @click="handlePageNumberClick(index, $event)"
      >
        {{ pageNumber }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const pageNumbers = [1, 2, "Next"];

const handlePageNumberClick = (index, event) => {
  event.preventDefault();
  activeIndex.value = index;
};
</script>
