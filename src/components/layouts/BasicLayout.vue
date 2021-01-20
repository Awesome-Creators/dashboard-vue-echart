<template>
  <div>
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

<style></style>
