import Vue from "vue";
import store from "./store/";
import { WINDOW_DESIGN, NAV_TAB } from "@/store/mutation-type";

/**
 * 项目默认配置项
 * window - 设计图宽度和高度
 * navTab - 顶部导航栏显示
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

const defaultSetting = {
  windowDesign: { width: 1920, height: 1080 },
  navTab: false,
  storageOptions: {
    namespace: "pro__", // key prefix
    name: "ls", // name variable Vue.[ls] or this.[$ls],
    storage: "local", // storage name session, local, memory
  },
};

const initSetting = function() {
  store.commit(
    "SAVE_WINDOW_DESIGN",
    Vue.ls.get(WINDOW_DESIGN, defaultSetting.windowDesign)
  );
  store.commit("SAVE_NAV_TAB", Vue.ls.get(NAV_TAB, defaultSetting.navTab));
};

export { defaultSetting, initSetting };
