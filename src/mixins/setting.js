import { mapState } from "vuex";

// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixin = {
  computed: {
    ...mapState({
      windowDesign: (state) => state.app.windowDesign,
      navTab: (state) => state.app.navTab,
    }),
  },
};
export { mixin };
