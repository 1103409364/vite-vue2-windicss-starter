import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/NotFound.vue";
import { publicPath, routerMode } from "@/config";

Vue.use(VueRouter);

export const constantRoutes: Array<RouteItem> = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/:path(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
export const asyncRoutes = [];

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    x: 0,
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  location.reload();
}

export default router;
