<template>
  <div class="main-container">
    <AsideMenu />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AsideMenu from "./components/AsideMenu.vue";
import "./assets/kuma.scss";
</script>
