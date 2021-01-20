<template>
  <div class="container">
    <ul class="nav">
      <li
        class="item"
        v-bind:class="{ 'item-active': currentIndex == 'home' }"
        @click="navRouter('home')"
      >
        <span>首页</span>
      </li>
      <li
        class="item"
        v-bind:class="{ 'item-active': currentIndex == 'test' }"
        @click="navRouter('test')"
      >
        <span>测试</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: "home",
    };
  },
  methods: {
    navRouter(name) {
      this.currentIndex = name;
      this.$router.push({ name: name });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  float: left;
  width: 35%;
  .nav {
    margin-top: 10px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .item {
      &-active,
      &:hover {
        border-bottom: 4px solid #4b8df8;
        > span {
          font-weight: bolder;
        }
      }
      border-radius: $border-radius-base;
      cursor: pointer;
      width: 100px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      > span {
        color: #fff;
      }
    }
  }
}
</style>
