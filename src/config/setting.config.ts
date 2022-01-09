//默认配置
export const routesWhiteList = ["/login", "/register", "/404", "/401"]; //不经过token校验的路由
export const storageType = "localStorage"; //token存储位置localStorage sessionStorage
export const recordRoute = true; //token失效回退到登录页时是否记录本次的路由
export const loginInterception = true; //是否开启登录拦截
export const loginRSA = true; //是否开启登录RSA加密
export const title = "title"; //页面标题
export const showProgress = true; //显示进度条
export const authentication = "intelligence";
export const tokenTableName = "client-web"; //token在localStorage、sessionStorage存储的key的名称
export const publicPath = "/"; // 开发以及部署时的URL
export const routerMode = "hash"; // 路由模式，可选值为 history 或 hash
export const keepAliveMax = 99; //缓存路由的最大数量keep-alive :max="keepAliveMax"
