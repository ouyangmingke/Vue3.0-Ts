<template>
  <div style="border: 1px solid red">
    <h3>孙 组件 {{ color }}</h3>
    inject(key) 获取依赖
  </div>
</template>
<script lang='ts'>
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "GrandSon",
  setup() {
    // inject 取值
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>
<style>
</style>