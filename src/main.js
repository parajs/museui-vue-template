// import Toast from 'muse-ui-toast'; 本地保存会自动删除、只能曲线解决
import Toast from "@/components/muse-ui-toast";
import TopNav from "@/components/TopNav";
import "@/icons"; // icon
import "@/styles/index.scss";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import theme from "muse-ui/lib/theme";
import Vue from "vue";
import App from "./App.vue";
import MockXhr from "./mock";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

if (process.env.NODE_ENV === "mock") {
  MockXhr();
}
Vue.use(Toast, { position: "top " });

theme.add(
  "teal",
  {
    primary: "#1BC6B8",
    secondary: "#ff4081",
    success: "#4caf50",
    warning: "#ffeb3b",
    info: "#1BC6B8"
  },
  "light"
);

theme.use("teal");
Vue.use(MuseUI);

Vue.component(TopNav.name, TopNav);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
