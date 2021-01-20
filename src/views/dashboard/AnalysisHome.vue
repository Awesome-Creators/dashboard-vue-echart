<template>
  <div class="container">
    <div class="left">
      <analysis-home-device></analysis-home-device>
    </div>
    <div class="middle"></div>
    <div class="right"></div>
  </div>
</template>

<script>
import ChartCard from "@/components/ChartCard";
import AnalysisHomeDevice from "./AnalysisHomeDevice";
export default {
  components: {
    ChartCard,
    AnalysisHomeDevice,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 30px 0 0;
  .left {
    width: 30%;
    float: left;
  }
  .middle {
    width: 35%;
    float: left;
  }
  .right {
    width: 30%;
    float: left;
  }
}
</style>
