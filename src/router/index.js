import { createRouter, createWebHistory } from "vue-router";
import Homeview from "~/views/Homeview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homeview,
  },
  {
    path: "/album",
    name: "Album",
    component: () => import("~/views/Albumview.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("~/views/Pricingview.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("~/views/Checkoutview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
