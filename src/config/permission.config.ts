/**
 * @description 路由守卫
 */
import router from "@/router";
import store from "@/store";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { getPageTitle } from "@/utils";
import {
  authentication,
  loginInterception,
  showProgress,
  recordRoute,
  routesWhiteList,
} from "@/config";

nProgress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});
router.beforeResolve(async (to, from, next) => {
  if (showProgress) nProgress.start();
  let hasToken = store.getters["permission/accessToken"];

  if (!loginInterception) hasToken = true;

  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      if (showProgress) nProgress.done();
    } else {
      const hasPermissions =
        store.getters["permission/permissions"] &&
        store.getters["permission/permissions"].length > 0;
      if (hasPermissions) {
        next();
      } else {
        try {
          let permissions;
          if (!loginInterception) {
            //settings.js loginInterception为false时，创建虚拟权限
            await store.dispatch("permission/setPermissions", ["admin"]);
            permissions = ["admin"];
          } else {
            permissions = await store.dispatch("permission/getUserInfo");
          }

          let accessRoutes = [];
          if (authentication === "intelligence") {
            accessRoutes = await store.dispatch(
              "routes/setRoutes",
              permissions
            );
          } else if (authentication === "all") {
            accessRoutes = await store.dispatch("routes/setAllRoutes");
          }
          accessRoutes.forEach((item: RouteItem) => {
            router.addRoute(item);
          });

          next({ path: to.path, replace: true });
        } catch {
          await store.dispatch("permission/resetAccessToken");
          if (showProgress) nProgress.done();
        }
      }
    }
  } else {
    if (routesWhiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      if (recordRoute) {
        next(`/login?redirect=${to.path}`);
      } else {
        next("/login");
      }

      if (showProgress) nProgress.done();
    }
  }
  document.title = getPageTitle(to.meta && to.meta.title);
});
router.afterEach(() => {
  if (showProgress) nProgress.done();
});
