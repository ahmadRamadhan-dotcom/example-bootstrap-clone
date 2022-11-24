import { createRouter, createWebHistory } from "vue-router";
import Homeview from "~/views/Homeview.vue";

const routes = [
  {
    path: "/",
    name: "Examples",
    component: Homeview,
  },
  {
    path: "/album",
    name: "Album example",
    component: () => import("~/views/Albumview.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing example",
    component: () => import("~/views/Pricingview.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout example",
    component: () => import("~/views/Checkoutview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name} · Tailwindcss`;
  next();
});

export default router;
