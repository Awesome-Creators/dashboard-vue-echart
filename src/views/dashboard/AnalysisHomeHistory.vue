<template>
  <chart-card title="历史记录" height="30%">
    <!-- <ul class="list">
      <li v-for="(item, index) in list" class="item" v-bind:key="index">
        <span class="name ellipsis">
          {{ item.deviceName }}
        </span>
        <span class="info ellipsis">
          {{ item.info }}
        </span>
        <span class="time">
          {{ item.time }}
        </span>
      </li>
    </ul> -->
    <table class="my-gridtable ">
      <tr>
        <th class="name ellipsis">设备</th>
        <th class="info ellipsis">信息</th>
        <th class="time ellipsis">时间</th>
      </tr>
      <tr v-for="(item, index) in list" v-bind:key="index">
        <td class="name ellipsis">{{ item.deviceName }}</td>
        <td class="info ellipsis">{{ item.info }}</td>
        <td class="time ellipsis">{{ item.time }}</td>
      </tr>
    </table>
  </chart-card>
</template>

<script>
// 引入 ECharts 主模块
// var echarts = require("echarts/lib/echarts");
import ChartCard from "@/components/ChartCard";

export default {
  components: {
    ChartCard,
  },
  data() {
    return {
      list: [
        {
          deviceName: "杀杀杀",
          info: "出现异asfasdfsdf常",
          time: "2000-01-01 11:11",
        },
        {
          deviceName: "杀杀杀",
          info: "出现异asfasdfsdf常",
          time: "2000-01-01 11:11",
        },
        {
          deviceName: "杀杀a撒旦飞洒地方士大夫士大夫撒地方  杀",
          info: "出现异asfasdfsdf常",
          time: "2000-01-01 11:11",
        },
        {
          deviceName: "杀杀杀",
          info: "出现异asfasdfsdf常",
          time: "2000-01-01 11:11",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-gridtable {
  table-layout: fixed;
  .name {
    width: 30%;
  }
  .info {
    width: 40%;
  }
  .time {
    width: 30%;
  }
}
</style>
