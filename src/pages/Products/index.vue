<template>
  <div class="products">
    <div v-if="!loading">
      <div class="product-list" v-for="(item, index) in products" :key="index">
        <span class="name">{{ item.title }}</span>
        <span class="price">{{ item.price }}元</span>
        <van-button type="primary" size="small" @click="addHandel(item)"
          >加入购物车</van-button
        >
      </div>
    </div>
    <van-loading v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "../../store/index";
import { Product } from "../../interface/index";
import { apiGetProducts } from "../../api/index";
import { toast } from "../../utils/index";

export default defineComponent({
  name: "Products",
  setup: () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const { commit, getters } = useStore();

    // 获取产品列表
    const getProducts = async () => {
      loading.value = true;
      products.value = await apiGetProducts();
      loading.value = false;
    };

    // 加入购物车
    const addToCart = (product: Product) => {
      commit("ADD_TO_CARD", {
        title: product.title,
        count: 1,
        id: product.id,
        price: product.price,
      });
    };

    // 判断是否在购物车中存在
    const isInCart = (product: Product) => {
      return getters.isInCart(product);
    };

    const addHandel = (product: Product) => {
      // 如果存在
      if (isInCart(product)) return toast("已存在");
      addToCart(product);
      toast("添加成功");
    };

    getProducts();

    return {
      loading, // 加载状态
      products, //商品列表
      addHandel, //添加购物车
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
