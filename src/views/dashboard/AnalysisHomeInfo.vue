<template>
  <chart-card :title="title" height="30%">
    <div class="info-box">
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
      <div class="info-item">水中导电率：9999us/cm</div>
    </div>
  </chart-card>
</template>

<script>
import ChartCard from "@/components/ChartCard";
export default {
  components: {
    ChartCard,
  },
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  //   justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  .info-item {
    color: #fff;
    width: 40%;
    margin: 8px;

    background-color: rgba(24, 52, 107, 0.7);
    box-shadow: 0 2px 4px rgba(24, 52, 107, 0.7);
    text-align: center;

    height: 25px;
    line-height: 25px;
  }
}
</style>
