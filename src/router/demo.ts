/**
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layouts";
import EmptyLayout from "@/components/layouts/EmptyLayout";
import { publicPath, routerMode } from "@/config";

Vue.use(VueRouter);
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "app",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/demo",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Demo",
        component: () => import("@/views/demo/index"),
        meta: {
          title: "Demo",
          icon: "marker",
          permissions: ["admin"],
        },
      },
    ],
  },

  {
    path: "/vab",
    component: Layout,
    redirect: "noRedirect",
    name: "Vab",
    alwaysShow: true,
    meta: { title: "组件", icon: "app" },
    children: [
      {
        path: "permissions",
        name: "Permission",
        component: () => import("@/views/vab/permissions/index"),
        meta: {
          title: "角色权限",
          permissions: ["admin", "editor"],
        },
      },
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "资源",
          permissions: ["admin"],
        },
        children: [
          {
            path: "awesomeIcon",
            name: "AwesomeIcon",
            component: () => import("@/views/materials/icon"),
            meta: { title: "图标" },
          },
          {
            path: "other",
            name: "Other",
            component: () => import("@/views/materials/other"),
            meta: { title: "其他" },
          },
        ],
      },
      {
        path: "table",
        component: () => import("@/views/vab/table/index"),
        name: "Table",
        meta: {
          title: "表格",
          permissions: ["admin"],
        },
      },
      {
        path: "map",
        component: () => import("@/views/vab/map/index"),
        name: "Map",
        meta: {
          title: "地图",
          permissions: ["admin"],
        },
      },

      {
        path: "webSocket",
        name: "WebSocket",
        component: () => import("@/views/vab/webSocket/index"),
        meta: { title: "webSocket", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/vab/tree/index"),
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/vab/loading/index"),
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: () => import("@/views/vab/smallComponents/index"),
        meta: { title: "小组件", permissions: ["admin"] },
      },
      // {
      //   path: 'https://baidu.com',
      //   name: 'ExternalLink',
      //   meta: {
      //     title: '外链',
      //     target: '_blank',
      //     permissions: ['admin', 'editor'],
      //     badge: 'New',
      //   },
      // },
    ],
  },
  {
    path: "/personnelManagement",
    component: Layout,
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "配置", icon: "app", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () =>
          import("@/views/personnelManagement/userManagement/index"),
        meta: { title: "用户管理" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () =>
          import("@/views/personnelManagement/roleManagement/index"),
        meta: { title: "角色管理" },
      },
      {
        path: "menuManagement",
        name: "MenuManagement",
        component: () =>
          import("@/views/personnelManagement/menuManagement/index"),
        meta: { title: "菜单管理", badge: "New" },
      },
    ],
  },
  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "app" },
    children: [
      {
        path: "401",
        name: "Error401",
        component: () => import("@/views/401"),
        meta: { title: "401" },
      },
      {
        path: "404",
        name: "Error404",
        component: () => import("@/views/404"),
        meta: { title: "404" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  location.reload();
}

export default router;
