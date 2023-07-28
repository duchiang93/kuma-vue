<template>
  <Header :title="title" />
  <div class="w-100 d-flex flex-column p-5 contact">
    <div class="d-flex justify-content-center align-items-center contact-text">
      專業是我們的基礎、質感是我們的堅持、聆聽您的需求是我們的榮幸、酷碼在此期待與您共同開發
    </div>
    <form>
      <div class="contact-input-box">
        <label htmlFor="name">姓名(必填)</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="contact-input-box">
        <label htmlFor="gender">稱謂</label>
        <select name="gender" id="gender">
          <option value="male">男生</option>
          <option value="female">女生</option>
        </select>
      </div>
      <div class="contact-input-box">
        <label htmlFor="email">電子郵件(必填)</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="contact-input-box">
        <label htmlFor="subject">主旨</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div class="contact-input-box">
        <label htmlFor="message">留言</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button
        class="w-100 border-0 text-white mt-4 rounded-pill contact-form-button"
        @click.prevent="submitForm"
      >
        傳送
      </button>
    </form>
  </div>
  <Footer />
  <BackToTop />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";

const title = "聯絡我們";
</script>
