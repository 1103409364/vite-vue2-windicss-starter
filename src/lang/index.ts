import Vue from "vue";
import Cookies from "js-cookie";
import VueI18n from "vue-i18n";
import store from "@/store";
import locale from "element-ui/lib/locale";

Vue.use(VueI18n);

import enLocale from "./en";
import zhLocale from "./zh";

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
};

const i18n = new VueI18n({
  locale: Cookies.get("language") || store.getters["setting/language"],
  fallbackLocale: "zh",
  messages,
});
//重点：为了实现element插件的多语言切换
locale.i18n((key: string, value: string) => i18n.t(key, value));
export default i18n;
