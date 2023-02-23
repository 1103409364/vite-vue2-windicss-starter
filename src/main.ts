import Vue from "vue";
import App from "@/App.vue";
import "windi.css";
import "@/config/element-ui.config";
import "@/config/permission.config";
import router from "@/router";
import store from "./store";
import i18n from "@/lang/index";
import "virtual:svg-icons-register";

Vue.config.productionTip = false;
if (import.meta.env.MODE !== "production") {
  Vue.config.devtools = true;
}

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App),
});
