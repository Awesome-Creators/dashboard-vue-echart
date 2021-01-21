<template>
  <div class="container">
    <div class=" box left">
      <analysis-home-status></analysis-home-status>
      <analysis-home-alarm></analysis-home-alarm>
      <analysis-home-history></analysis-home-history>
    </div>
    <div class=" box middle">
      <analysis-home-map></analysis-home-map>
      <div class="flex-box">
        <analysis-home-line></analysis-home-line>
      </div>
    </div>
    <div class=" box right">
      <analysis-home-device></analysis-home-device>
      <analysis-home-info title="当前区域实时数据"></analysis-home-info>
      <analysis-home-info title="当前区域历史数据"></analysis-home-info>
    </div>
  </div>
</template>

<script>
import ChartCard from "@/components/ChartCard";
import AnalysisHomeStatus from "./AnalysisHomeStatus";
import AnalysisHomeAlarm from "./AnalysisHomeAlarm";
import AnalysisHomeMap from "./AnalysisHomeMap";
import AnalysisHomeLine from "./AnalysisHomeLine";
import AnalysisHomeHistory from "./AnalysisHomeHistory";
import AnalysisHomeInfo from "./AnalysisHomeInfo";
import AnalysisHomeDevice from "./AnalysisHomeDevice";
export default {
  components: {
    ChartCard,
    AnalysisHomeStatus,
    AnalysisHomeAlarm,
    AnalysisHomeMap,
    AnalysisHomeLine,
    AnalysisHomeHistory,
    AnalysisHomeInfo,
    AnalysisHomeDevice,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100% - 80px);
  margin: 0 auto;
  // padding:0 10px;
  display: flex;
  justify-content: center;

  .flex-box {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .box {
    // display: inline-block;
    // float: left;
    height: 100%;
  }
  .left {
    width: 25%;
  }
  .middle {
    width: 45%;
    padding: 0 20px;
    margin: 0 20px;
    border-right: 1px solid $card-primary-color;
    border-left: 1px solid $card-primary-color;
  }
  .right {
    width: 25%;
  }
}
</style>
