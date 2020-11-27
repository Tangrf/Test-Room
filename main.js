import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { onError } from "@/utils";

import "./plugins/iview.js";
import "./plugins/element.js";
import "./global.less";

Vue.config.productionTip = false;
Vue.prototype.$onError = onError;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
