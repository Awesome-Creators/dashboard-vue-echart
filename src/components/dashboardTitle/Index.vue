<template>
  <div class="dashboard-title">
    <nav-tab v-if="navTab"></nav-tab>
    <span class="time">{{ nowTime }}</span>
    <main-title></main-title>
  </div>
</template>

<script>
import MainTitle from "./MainTitle.vue";
import NavTab from "./NavTab.vue";
import { mixin } from "@/mixins/setting";
import dayjs from "dayjs";
export default {
  mixins: [mixin],
  components: { MainTitle, NavTab },
  data() {
    return {
      nowTime: dayjs().format("YYYY-MM-DD hh:mm:ss"),
      nowTimeId: null,
    };
  },
  mounted() {
    this.refreshNowTime();
  },
  methods: {
    refreshNowTime() {
      if (this.nowTimeId != null) {
        clearTimeout(this.nowTimeId);
      }
      setTimeout(() => {
        this.nowTime = dayjs().format("YYYY-MM-DD hh:mm:ss");
        console.log(this.nowTime);
        this.refreshNowTime();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-title {
  width: 100%;
  height: 80px;
  background-color: $title-back-color;
  z-index: 9;
  // position: relative;
  .time {
    float: right;
    margin-right: 10px;
    font-size: 20px;
    margin-top: 10px;
  }
}
</style>
