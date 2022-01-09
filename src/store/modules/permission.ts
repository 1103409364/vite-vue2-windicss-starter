/**

 * @description 登录、获取用户信息、退出登录、清除accessToken逻辑
 */

import Vue from "vue";
import { Commit, Dispatch } from "vuex";
import { userInfo, login, logout } from "@/api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/accessToken";
import { resetRouter } from "@/router";
import { title, tokenName } from "@/config";

const state = () => ({
  accessToken: getAccessToken(),
  username: "",
  avatar: "",
  permissions: [],
});
const getters = {
  accessToken: (state: PermissionsState) => state.accessToken,
  username: (state: PermissionsState) => state.username,
  avatar: (state: PermissionsState) => state.avatar,
  permissions: (state: PermissionsState) => state.permissions,
};
const mutations = {
  setAccessToken(state: PermissionsState, accessToken: string) {
    state.accessToken = accessToken;
    setAccessToken(accessToken);
  },
  setUsername(state: PermissionsState, username: string) {
    state.username = username;
  },
  setAvatar(state: PermissionsState, avatar: string) {
    state.avatar = avatar;
  },
  setPermissions(state: PermissionsState, permissions: Array<string>) {
    state.permissions = permissions;
  },
};
const actions = {
  setPermissions({ commit }: { commit: Commit }, permissions: Array<string>) {
    commit("setPermissions", permissions);
  },
  async login({ commit }: { commit: Commit }, userInfo: User) {
    const { data } = await login(userInfo);
    const accessToken = data[tokenName];
    if (accessToken) {
      commit("setAccessToken", accessToken);
      const hour = new Date().getHours();
      const thisTime =
        hour < 8
          ? "早上好"
          : hour <= 11
          ? "上午好"
          : hour <= 13
          ? "中午好"
          : hour < 18
          ? "下午好"
          : "晚上好";
      Vue.prototype.$notify(`欢迎登录${title}`, `${thisTime}！`);
    } else {
      Vue.prototype.$message(
        `登录接口异常，未正确返回${tokenName}...`,
        "error"
      );
    }
  },
  async userInfo({
    commit,
    state,
  }: {
    commit: Commit;
    state: PermissionsState;
  }) {
    const { data } = await userInfo(state.accessToken);
    if (!data) {
      Vue.prototype.$baseMessage("验证失败，请重新登录...", "error");
      return false;
    }
    const { permissions, username, avatar } = data;
    if (permissions && username && Array.isArray(permissions)) {
      commit("setPermissions", permissions);
      commit("setUsername", username);
      commit("setAvatar", avatar);
      return permissions;
    } else {
      Vue.prototype.$baseMessage("用户信息接口异常", "error");
      return false;
    }
  },
  async logout({ dispatch }: { dispatch: Dispatch }) {
    await logout();
    await dispatch("resetAccessToken");
    await resetRouter();
  },
  resetAccessToken({ commit }: { commit: Commit }) {
    commit("setPermissions", []);
    commit("setAccessToken", "");
    removeAccessToken();
  },
};
export default { state, getters, mutations, actions };
