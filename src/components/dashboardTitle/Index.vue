<template>
  <div class="dashboard-title">
    <nav-tab v-if="navTab"></nav-tab>
    <main-title></main-title>
  </div>
</template>

<script>
import MainTitle from "./MainTitle.vue";
import NavTab from "./NavTab.vue";
import { mixin } from "@/mixins/setting";
export default {
  mixins: [mixin],
  components: { MainTitle, NavTab },
};
</script>

<style lang="scss" scoped>
.dashboard-title {
  width: 100%;
  height: 80px;
  background-color: $title-back-color;
  z-index: 9;
}
</style>
