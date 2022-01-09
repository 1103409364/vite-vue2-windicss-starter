//默认配置
export const routesWhiteList = ["/login", "/register", "/404", "/401"]; //不经过token校验的路由
export const storage = "localStorage"; //token存储位置localStorage sessionStorage
export const recordRoute = true; //token失效回退到登录页时是否记录本次的路由
export const loginInterception = true; //是否开启登录拦截
export const loginRSA = true; //是否开启登录RSA加密
