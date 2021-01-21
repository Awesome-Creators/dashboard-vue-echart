<template>
  <div class="basis-layout">
    <dashboard-title></dashboard-title>
    <router-view></router-view>
  </div>
</template>

<script>
import dashboardTitle from "@/components/dashboardTitle/Index";

export default {
  components: { dashboardTitle },
};
</script>

<style lang="scss" scoped>
.basis-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
