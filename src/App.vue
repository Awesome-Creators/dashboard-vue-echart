<template>
  <div id="app">
    <div class="wrapper">
      <!-- <analysis></analysis> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #081832;
}
</style>
