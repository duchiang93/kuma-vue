import { createRouter, createWebHistory } from "vue-router";
import HomeSwiper from "../components/HomeSwiper.vue";
import IndexList from "../pages/IndexList.vue";
import Contact from "../pages/Contact.vue";
import Portfolio from "../pages/IndexPortfolio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeSwiper,
    },
    {
      path: "/theme",
      name: "IndexList",
      component: IndexList,
    },
    {
      path: "/portfolio/:productId",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
