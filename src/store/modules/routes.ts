/**
 * @description 路由拦截状态管理，两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
import { Commit } from "vuex";
import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api";
import { convertRouter, filterAsyncRoutes } from "@/utils";

const state = () => ({
  routes: [],
  partialRoutes: [],
});
const getters = {
  routes: (state: RoutesState) => state.routes,
  partialRoutes: (state: RoutesState) => state.partialRoutes,
};
const mutations = {
  setRoutes(state: RoutesState, routes: Array<RouteItem>) {
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes(state: RoutesState, routes: Array<RouteItem>) {
    state.routes = constantRoutes.concat(routes);
  },
  setPartialRoutes(state: RoutesState, routes: Array<RouteItem>) {
    state.partialRoutes = constantRoutes.concat(routes);
  },
};
const actions = {
  async setRoutes({ commit }: { commit: Commit }, permissions: Array<string>) {
    //过滤动态路由permissions，admin不再默认拥有全部权限
    const finallyAsyncRoutes = await filterAsyncRoutes(
      [...asyncRoutes],
      permissions
    );
    commit("setRoutes", finallyAsyncRoutes);
    return finallyAsyncRoutes;
  },
  async setAllRoutes({ commit }: { commit: Commit }) {
    const { data } = await getRouterList();
    data.push({ path: "*", redirect: "/404", hidden: true });
    const accessRoutes = convertRouter(data);
    commit("setAllRoutes", accessRoutes);
    return accessRoutes;
  },
  setPartialRoutes(
    { commit }: { commit: Commit },
    accessRoutes: Array<RouteItem>
  ) {
    commit("setPartialRoutes", accessRoutes);
    return accessRoutes;
  },
};
export default { state, getters, mutations, actions };
