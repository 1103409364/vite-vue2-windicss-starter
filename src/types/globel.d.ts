// 为 Typescript 配置声明文件
declare module "element-ui/lib/locale/lang/en";
declare module "element-ui/lib/locale/lang/zh-CN";
declare module "element-ui/lib/locale";
interface User {
  account: string;
  password: string;
}
interface UrlMap {
  [key: string]: string;
}

interface RouteMeta {
  title: string;
  icon: string;
  permissions?: Array<string>;
}
interface RouteItem {
  path: string;
  redirect?: string;
  name: string;
  hidden?: boolean;
  component: vue.Component;
  meta?: RouteMeta;
  children?: Array<RouteItem>;
}
