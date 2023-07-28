<template>
  <div class="d-flex align-items-center header">
    <div
      class="w-100 d-flex align-items-center justify-content-between header-content"
    >
      <h2>{{ title }}</h2>
      <span class="header-content-text">
        Home &gt; {{ title }} {{ subTitle ? " > " + subTitle : "" }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>
