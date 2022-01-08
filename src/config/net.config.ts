/**
 * @description 网路配置
 **/
const network = {
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server
  baseURL:
    import.meta.env.MODE === "development"
      ? "vab-mock-server"
      : "vab-mock-server",
  //后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  Accept: "application/json",
  //最长请求时间
  requestTimeout: 1000 * 10,
  errMsgDuration: 1000 * 3,
  //操作正常Code数组
  successCode: [200],
  //登录失效code
  tokenInvalidCode: 402,
  //无权限code
  noPermissionCode: 401,
  //token名称
  tokenName: "",
  // 是否开启登陆拦截
  loginInterception: true,
  //需要加loading层的请求，填写url中的某个关键字 * 表示所有
  requestLoadingApi: ["*"],
};

export default network;
