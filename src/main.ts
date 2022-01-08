import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import "windi.css";
import router from "@/router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.config.devtools = true;

const app = createApp({
  router,
  store,
  render: () => h(App),
});

app.mount("#app");
