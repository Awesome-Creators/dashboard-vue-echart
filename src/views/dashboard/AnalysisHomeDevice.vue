<template>
  <chart-card title="设备信息">
    <div style="display:flex">
      <echart
        id="deviceStatus"
        :options="deviceStatusOptions"
        width="50%"
        height="200px"
      ></echart>
      <echart
        id="onlineStatus"
        :options="onlineStatusOptions"
        width="50%"
        height="200px"
      ></echart>
    </div>
  </chart-card>
</template>

<script>
// 引入 ECharts 主模块
// var echarts = require("echarts/lib/echarts");
import Echart from "@/echart/";
import ChartCard from "@/components/ChartCard";

export default {
  components: {
    ChartCard,
    Echart,
  },
  data() {
    return {
      deviceStatusOptions: {
        // visualMap: {
        //   show: false,
        //   min: 0,
        //   max: 600,
        //   inRange: {
        //     colorLightness: [0, 1],
        //   },
        // },
        legend: {
          orient: "horizontal",
          x: "left",
          data: ["在线", "离线"],
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "设备网络情况",
            type: "pie",
            radius: "50%",
            data: [
              { value: 235, name: "在线" },
              { value: 274, name: "离线" },
            ],
            roseType: "angle",
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            itemStyle: {
              normal: {
                // color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      onlineStatusOptions: {
        // visualMap: {
        //   show: false,
        //   min: 20,
        //   max: 1000,
        //   inRange: {
        //     colorLightness: [0, 1],
        //   },
        // },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "horizontal",
          x: "left",
          data: ["正常", "报警"],
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "设备警报情况",
            type: "pie",
            radius: "50%",
            data: [
              { value: 235, name: "正常" },
              { value: 235, name: "报警" },
            ],
            roseType: "angle",
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            },
            itemStyle: {
              normal: {
                // color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
