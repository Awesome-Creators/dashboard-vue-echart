<template>
  <div class="wrapper">
    <!-- <analysis></analysis> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Analysis from "@/views/dashboard/Analysis";
export default {
  name: "Home",
  components: {
    // Analysis,
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #081832;
}
</style>
