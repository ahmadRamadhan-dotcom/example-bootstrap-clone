import { createRouter, createWebHistory } from "vue-router";
import Homeview from "~/views/Homeview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homeview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
