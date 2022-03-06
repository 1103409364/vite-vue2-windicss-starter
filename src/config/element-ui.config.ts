import Vue from "vue";
import { Message, Notification, MessageBox, Loading, Input } from "element-ui";
import "element-ui/lib/theme-chalk/message.css";
import "element-ui/lib/theme-chalk/notification.css";
import "element-ui/lib/theme-chalk/loading.css";
import "element-ui/lib/theme-chalk/message-box.css";
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$loading = Loading;
Vue.prototype.$ELEMENT = { size: "medium" };

Vue.use(Input);
