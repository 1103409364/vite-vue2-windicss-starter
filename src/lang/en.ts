// 引入element-ui的语言包
import enLocale from "element-ui/lib/locale/lang/en";

const en = {
  lang: {
    zh: "中文",
    en: "English",
  },
  switchLang: "Language switch",
  login: {
    title: "Login",
    sysName: "admin kit",
    userName: "UserName",
    password: "Password",
    submitText: "Sign in",
  },
  router: {
    permission: "permission",
  },
  ...enLocale,
};

export default en;
