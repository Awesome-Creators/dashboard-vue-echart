import Vue from "vue";
import App from "./App.vue";
import Storage from "vue-ls";

import store from "./store/";
import router from "./router/";
import { defaultSetting, initSetting } from "./defaultSetting";
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

import "./scss/my-reset.scss";

Vue.config.productionTip = false;
Vue.use(Storage, defaultSetting.storageOptions);

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
  mounted() {
    initSetting();
  },
}).$mount("#app");
