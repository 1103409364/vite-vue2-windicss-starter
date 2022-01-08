// 引入element-ui的语言包
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

const zh = {
  lang: {
    zh: "中文",
    en: "English",
  },
  switchLang: "语言切换",
  login: {
    title: "登录",
    sysName: "admin kit",
    userName: "用户名",
    password: "密码",
    submitText: "登录",
  },
  router: {
    pages: "页面",
    cardList: "卡片列表",
    tableList: "表格列表",
    permission: "权限控制",
    nested: "嵌套路由",
    form: "表单",
  },
  ...zhLocale,
};

export default zh;
