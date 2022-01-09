import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import { publicPath, routerMode } from "@/config";

Vue.use(VueRouter);

export const constantRoutes: Array<RouteItem> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // NOTE: you can also apply meta information
    // meta: {authRequired: false }
    component: About,
    // NOTE: you can also lazy-load the component
    // component: () => import("@/views/About.vue")
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
