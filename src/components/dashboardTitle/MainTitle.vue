<template>
  <div class="container">
    <span>
      大屏幕数据
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-image: url("~@/assets/logoBg.png");
  background-size: 100% 100%;
  color: #fff;
  text-align: center;
  height: 100%;
  width: 30%;
  margin: 0 auto;
  > span {
    font-size: 32px;
    line-height: 80px;
    font-weight: bold;
  }
}
</style>
