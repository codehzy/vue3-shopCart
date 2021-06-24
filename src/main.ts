import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store/index";
import "vant/lib/index.css";
import { Button, Loading, Toast, Icon } from "vant";

const app = createApp(App);

// 添加全局方法
app.config.globalProperties.$toast = (msg: string) => {
  return Toast(msg);
};
app.use(Button).use(Loading).use(Toast).use(Icon);

app.use(store, key);
app.use(router);
app.mount("#app");
