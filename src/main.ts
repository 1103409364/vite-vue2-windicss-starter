import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import { Message, Notification, MessageBox, Loading } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "windi.css";
import "@/config/permission.config";
import router from "@/router";
import store from "./store";
import i18n from "@/lang/index";

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$loading = Loading;
Vue.prototype.$ELEMENT = { size: "medium" };

Vue.config.productionTip = false;
if (import.meta.env.MODE !== "production") {
  Vue.config.devtools = true;
}

const app = createApp({
  router,
  store,
  i18n,
  render: () => h(App),
});

app.mount("#app");
