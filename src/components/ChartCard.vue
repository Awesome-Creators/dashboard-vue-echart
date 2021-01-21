<template>
  <div class="chart-card" :style="{ width: width, height: height }">
    <div class="chart-card_title">{{ title }}</div>
    <div class="chart-card_cnt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartCard",
  props: {
    title: {
      type: String,
      default: "数据模板",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-card {
  margin-top: 30px;
  background-color: $card-background-color;
  width: 100%;
  // height: 100%;
  border: 1px solid $card-primary-color;
  box-shadow: 0px 0px 10px $card-primary-color;
  &_title {
    width: 50%;
    text-align: center;
    background-color: $card-primary-color;
    margin: -15px auto 0;
    height: 30px;
    line-height: 30px;
    box-shadow: 0px 0px 5px $card-primary-color;
  }
  &_cnt {
    // width: 100%;
    padding: 10px 10px;
    height: calc(100% - 40px);
  }
}
</style>
