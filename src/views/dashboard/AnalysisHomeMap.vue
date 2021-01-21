<template>
  <chart-card title="设备信息" height="59%">
    <div class="home-map" id="homeMap" ref="homeMap"></div>
  </chart-card>
</template>

<script>
import ChartCard from "@/components/ChartCard";
const markerPng = require("@/assets/marker.png");
export default {
  data() {
    return {
      TMap: window.TMap,
      map: null,
    };
  },
  components: { ChartCard },
  mounted() {
    this.initMap();
  },
  methods: {
    //初始化地图
    initMap() {
      //设置中心点23.385281,116.719223
      const TMap = this.TMap;
      const center = new TMap.LatLng(23.385281, 116.719223);
      this.map = new TMap.Map(this.$refs.homeMap, {
        zoom: 9,
        maxZoom: 16,
        pitch: 0,
        center: center,
        draggable: true,
        scrollable: true,
        mapStyleId: "style 2",
        // baseMap: {
        //   // 设置卫星地图
        //   type: "satellite",
        // },
        // viewMode: "2D",
      });

      this.marker = new TMap.MarkerCluster({
        id: "marker-layer", //图层id
        map: this.map,
        enableDefaultStyle: true, // 启用默认样式
        minimumClusterSize: 2,
        // styles: {
        //   //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
        //   myStyle: new TMap.MarkerStyle({
        //     width: 32, // 点标记样式宽度（像素）
        //     height: 32, // 点标记样式高度（像素）
        //     src: markerPng, //图片路径
        //     //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
        //     anchor: { x: 16, y: 32 },
        //   }),
        // },
        geometries: [
          {
            id: "1", //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            styleId: "myStyle", //指定样式id
            position: new TMap.LatLng(23.385281, 116.719223), //点标记坐标位置
            properties: {
              //自定义属性
              title: "marker1",
            },
          },
          {
            //第二个点标记
            id: "2",
            styleId: "myStyle",
            position: new TMap.LatLng(23.385281, 117.7193),
            properties: {
              title: "marker2",
            },
          },
          {
            //第二个点标记
            id: "3",
            styleId: "myStyle",
            position: new TMap.LatLng(23.385281, 117.82),
            properties: {
              title: "marker3",
            },
          },
        ],
      });

      this.marker.on("click", function(evt) {
        console.log("点击", evt);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-map {
  width: 100%;
  height: 100%;
}
</style>
