import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { Loading, Notification } from "element-ui";
import { ElLoadingComponent } from "element-ui/types/loading";
import store from "@/store";
import router from "@/router";
import {
  baseURL,
  contentType,
  Accept,
  requestTimeout,
  errMsgDuration,
  successCode,
  tokenInvalidCode,
  noPermissionCode,
  tokenName,
  loginIntercept,
  requestLoadingApi,
} from "@/config";

let loadingInstance: ElLoadingComponent;
let loadCount = 0;

/**
 * @description code异常处理
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code: string, msg: string | null) => {
  switch (+code) {
    case tokenInvalidCode:
      Notification({
        title: "警告",
        message: msg || `接口${code}异常`,
        type: "error",
        duration: errMsgDuration,
      });
      // TODO:清除token
      store.dispatch("user/resetAccessToken").catch((e) => console.error(e));
      if (loginIntercept) {
        location.reload();
      }
      break;
    case noPermissionCode:
      router.push({ path: "/401" }).catch((e) => console.log(e));
      break;
    default:
      Notification({
        title: "警告",
        message: msg || `接口${code}异常`,
        type: "error",
        duration: errMsgDuration,
      });
      break;
  }
};

const service = axios.create({
  baseURL, // api的base_url
  timeout: requestTimeout, // 请求超时时间
  headers: {
    Accept,
    "Content-Type": contentType,
    "x-requested-with": "XMLHttpRequest",
  },
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers && store.getters["user/accessToken"]) {
      config.headers[tokenName] = store.getters["user/accessToken"];
    }
    if (
      config.data &&
      config.headers &&
      config.headers["Content-Type"] ===
        "application/x-www-form-urlencoded;charset=UTF-8"
    )
      config.data = qs.stringify(config.data);
    if (
      requestLoadingApi[0] === "*" ||
      requestLoadingApi.some((item) => config.url && config.url.includes(item))
    ) {
      ++loadCount;
      // 以服务的方式调用的全屏 Loading 是单例的
      loadingInstance = Loading.service({
        fullscreen: true,
        background: "rgba(0, 0, 0, 0)",
      }); // 添加请求loading
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    --loadCount;
    if (loadingInstance && loadCount === 0) {
      loadingInstance.close();
    }

    const { data, config } = response;
    const { code, msg } = data;

    if (successCode.includes(+code)) {
      return data;
    } else {
      handleCode(code, msg);
      return Promise.reject(
        "请求异常拦截:" + JSON.stringify({ url: config.url, code, msg }) ||
          "Error"
      );
    }
  },
  (error) => {
    --loadCount;
    loadingInstance && loadingInstance.close();
    const { response, message } = error;
    if (error.response && error.response.data) {
      const { status, data } = response;
      handleCode(status, data.msg || message);
      return Promise.reject(error);
    } else {
      let { message } = error;
      if (message === "Network Error") {
        message = "接口连接异常";
      }
      if (message.includes("timeout")) {
        message = "接口请求超时";
      }
      if (message.includes("Request failed with status code")) {
        const code = message.substr(message.length - 3);
        message = "接口" + code + "异常";
      }
      Notification({
        title: "警告",
        message: message || `接口未知异常`,
        type: "error",
        duration: errMsgDuration,
      });
      return Promise.reject(error);
    }
  }
);

export default service;
