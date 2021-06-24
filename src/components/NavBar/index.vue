<template>
  <div class="nav-bar">
    <router-link to="/" :class="{ active: active === 'product' }"
      >商品列表</router-link
    >
    <router-link
      to="/shoppingCart"
      :class="{ active: active === 'shoppingCart' }"
      >购物车{{ count ? `(${count})` : "" }}</router-link
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  props: {
    count: Number,
    active: String,
  },
  setup: () => {},
});
</script>
<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  background: gray;
  height: 40px;
  line-height: 40px;
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 0 20px;

    &.active {
      background: rgb(153, 0, 255);
    }
  }
}
</style>
