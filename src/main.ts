import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import "windi.css";
import router from "@/router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "@/lang/index";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = createApp({
  router,
  store,
  i18n,
  render: () => h(App),
});

app.mount("#app");
