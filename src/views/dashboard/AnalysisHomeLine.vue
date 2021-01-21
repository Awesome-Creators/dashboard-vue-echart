<template>
  <chart-card title="24小时折线图" height="30%">
    <echart id="homeLine" :options="options" height="100%"></echart>
  </chart-card>
</template>

<script>
import Echart from "@/echart/";
import ChartCard from "@/components/ChartCard";

export default {
  components: { ChartCard, Echart },
  data() {
    return {
      options: {
        legend: {
          orient: "horizontal",
          x: "left",
          data: ["模拟数据", "模拟数据2"],
          icon: "rect",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
        },

        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: [
              {
                name: "2021/01/21 06:00:00",
                value: ["2021/01/21 06:00:00", 20],
              },
              {
                name: "2021/01/21 07:00:00",
                value: ["2021/01/21 07:00:00", 20],
              },
              {
                name: "2021/01/21 08:00:00",
                value: ["2021/01/21 08:00:00", 20],
              },
              {
                name: "2021/01/21 09:00:00",
                value: ["2021/01/21 09:00:00", 20],
              },

              {
                name: "2021/01/21 10:00:00",
                value: ["2021/01/21 10:00:00", 20],
              },
              {
                name: "2021/01/21 11:00:00",
                value: ["2021/01/21 11:00:00", 20],
              },
              {
                name: "2021/01/21 12:00:00",
                value: ["2021/01/21 12:00:00", 20],
              },
              {
                name: "2021/01/21 13:00:00",
                value: ["2021/01/21 13:00:00", 20],
              },
            ],
          },
          {
            name: "模拟数据2",
            type: "line",
            showSymbol: false,
            data: [
              {
                name: "2021/01/21 06:00:00",
                value: ["2021/01/21 06:00:00", 40],
              },
              {
                name: "2021/01/21 07:00:00",
                value: ["2021/01/21 07:00:00", 40],
              },
              {
                name: "2021/01/21 08:00:00",
                value: ["2021/01/21 08:00:00", 40],
              },
              {
                name: "2021/01/21 09:00:00",
                value: ["2021/01/21 09:00:00", 40],
              },

              {
                name: "2021/01/21 10:00:00",
                value: ["2021/01/21 10:00:00", 40],
              },
              {
                name: "2021/01/21 11:00:00",
                value: ["2021/01/21 11:00:00", 40],
              },
              {
                name: "2021/01/21 12:00:00",
                value: ["2021/01/21 12:00:00", 40],
              },
              {
                name: "2021/01/21 13:00:00",
                value: ["2021/01/21 13:00:00", 40],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
