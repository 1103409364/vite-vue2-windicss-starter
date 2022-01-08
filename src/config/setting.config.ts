/**
 * @description 默认配置
 */
const setting = {
  //不经过token校验的路由
  routesWhiteList: ["/login", "/register", "/404", "/401"],
  //token存储位置localStorage sessionStorage
  storage: "localStorage",
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //是否开启登录拦截
  loginInterception: true,
  //是否开启登录RSA加密
  loginRSA: true,
};

export default setting;
