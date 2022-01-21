import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Gide from "../views/Gide.vue";
import Consult from "../views/Consult.vue";
import Tous from "../views/Tous.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/gide",
    name: "Gide",
    component: Gide,
  },
  {
    path: "/consult",
    name: "Consult",
    component: Consult,
  },
  {
    path: "/tous",
    name: "Tous",
    component: Tous,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
