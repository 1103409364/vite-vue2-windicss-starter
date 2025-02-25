import Cookies from "js-cookie";

// App
const sidebarStatusKey = "sidebar_status";
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(sidebarStatusKey, sidebarStatus);

// User
const tokenKey = "admin_access_token";
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const setUid = (uid: string) => Cookies.set("uid", uid);
export const getUid = (uid: string) => Cookies.get(uid);
export const removeToken = () => Cookies.remove(tokenKey);
