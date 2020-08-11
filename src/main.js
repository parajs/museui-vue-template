import TopNav from "@/components/TopNav";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import theme from "muse-ui/lib/theme";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.component(TopNav.name, TopNav);

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
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
