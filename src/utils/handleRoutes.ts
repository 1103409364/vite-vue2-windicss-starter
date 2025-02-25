/**
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
export function convertRouter(asyncRoutes: Array<RouteItem>) {
  // return asyncRoutes.map((route) => {
  //   if (route.component) {
  //     if (route.component === "Layout") {
  //       route.component = (resolve) =>
  //         require(["@/components/layouts"], resolve);
  //     } else if (route.component === "EmptyLayout") {
  //       route.component = (resolve) =>
  //         require(["@/components/layouts/EmptyLayout"], resolve);
  //     } else {
  //       const index = route.component.indexOf("views");
  //       const path =
  //         index > 0 ? route.component.slice(index) : `views/${route.component}`;
  //       route.component = (resolve) => require([`@/${path}`], resolve);
  //     }
  //   }
  //   if (route.children && route.children.length)
  //     route.children = convertRouter(route.children);
  //   if (route.children && route.children.length === 0) delete route.children;
  //   return route;
  // });
}

/**

 * @description 判断当前路由是否包含权限
 * @param permissions
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(permissions: Array<string>, route: RouteItem) {
  if (route.meta && route.meta.permissions) {
    return permissions.some(
      (role) =>
        route.meta &&
        route.meta.permissions &&
        route.meta.permissions.includes(role)
    );
  } else {
    return true;
  }
}

/**

 * @description intelligence模式根据permissions数组拦截路由
 * @param routes
 * @param permissions
 * @returns {[]}
 */
export function filterAsyncRoutes(
  routes: Array<RouteItem>,
  permissions: Array<string>
) {
  const finallyRoutes: Array<RouteItem> = [];
  routes.forEach((route) => {
    const item = { ...route };
    if (hasPermission(permissions, item)) {
      if (item.children) {
        item.children = filterAsyncRoutes(item.children, permissions);
      }
      finallyRoutes.push(item);
    }
  });
  return finallyRoutes;
}
