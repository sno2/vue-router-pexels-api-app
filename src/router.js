import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./pages/SearchPhotos.vue"),
  },
  {
    path: "/photos/:id",
    component: () => import("./templates/Photo.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
