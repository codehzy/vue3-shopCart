<template>
  <nav-bar :count="count" :active="activeRouteName"></nav-bar>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import NavBar from "./components/NavBar/index.vue";
import { useStore } from "./store/index";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup(props, context) {
    const store = useStore();
    const route = useRoute();

    // 购物车中的商品种类
    const count = computed((): number => {
      return store.state.shoppingCart.length;
    });

    // 当前路由
    const activeRouteName = computed((): string => {
      return route.name?.toString() || "";
    });

    return {
      count,
      activeRouteName,
    };
  },
});
</script>

<style lang="less" scoped></style>
