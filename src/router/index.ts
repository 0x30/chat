import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
