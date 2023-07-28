<template>
  <div @click="handleOnClick" class="back-to-top">
    <i class="bi bi-arrow-up-circle fa-8x back-to-top-icon"></i>
  </div>
</template>

<script setup>
const handleOnClick = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
