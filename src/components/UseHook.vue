<template>
  <h2>使用Hook 函数</h2>
  <H4>使用Vue3的组合API封装的可复用的功能函数</H4>
  <H4>简单来说就是把方法放到了其他文件中，然后调用</H4>
  <h2>x: {{ x }}, y: {{ y }}</h2>
  <div class="about">
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
    <ul v-else>
      <li>id: {{ result[0].id }}</li>
      <li>name: {{ result[0].name }}</li>
      <li>distance: {{ result[0].distance }}</li>
    </ul>

    <ul v-for="p in result" :key="p.id">
      <li>id: {{ p.id }}</li>
      <li>title: {{ p.title }}</li>
      <li>price: {{ p.price }}</li>
    </ul>
    <!-- <img v-if="result" :src="result[0].url" alt=""> -->

  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import UseMousePostion from "../hooks/UseMousePostion";
import UseRequest from "../hooks/UseRequest";

// 地址数据接口
interface AddressResult {
  id: number;
  name: string;
  distance: string;
}

// 产品数据接口
interface ProductResult {
  id: string;
  title: string;
  price: number;
}
export default defineComponent({
  name: "APP",
  setup() {
    const { x, y } = UseMousePostion();
    const { loading, result, errorMsg } = UseRequest<ProductResult[]>(
      "/data/products.json"
    );
    // 监视数据
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length); // 有提示
      }
    });
    return {
      x,
      y,
      loading,
      result,
      errorMsg,
 
    };
  },
});
</script>
<style>
</style>