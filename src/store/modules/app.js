import Vue from "vue";
import { WINDOW_DESIGN, NAV_TAB } from "@/store/mutation-type";

const app = {
  state: {
    windowDesign: { width: 1920, height: 1080 },
    navTab: false,
  },
  mutations: {
    SAVE_WINDOW_DESIGN: (state, type) => {
      state.windowDesign = type;
      Vue.ls.set(WINDOW_DESIGN, type);
    },
    SAVE_NAV_TAB: (state, type) => {
      state.navTab = type;
      Vue.ls.set(NAV_TAB, type);
    },
  },
  actions: {
    saveWindowDesign: ({ commit }, type) => {
      commit("SAVE_WINDOW_DESIGN", type);
    },
    saveNavTab({ commit }, type) {
      commit("SAVE_NAV_TAB", type);
    },
  },
};
export default app;
