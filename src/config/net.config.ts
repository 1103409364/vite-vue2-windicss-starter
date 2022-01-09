import { baseUrlMap } from "./baseUrl.config";

export const baseURL = baseUrlMap[import.meta.env.MODE || "development"];
//后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
export const contentType = "application/json;charset=UTF-8";
export const Accept = "application/json";
export const requestTimeout = 1000 * 10; //请求超时时间
export const errMsgDuration = 1000 * 3;
export const successCode = [200]; //请求正常的Code
export const tokenInvalidCode = 402; //登录失效code
export const noPermissionCode = 401; //无权限code
export const tokenName = ""; //token名称
export const loginIntercept = true; // 是否开启登陆拦截
export const requestLoadingApi = ["*"]; //需要加loading层的请求，填写url中的某个关键字 * 表示所有
