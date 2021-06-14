<template>
  <h2>provide 与 inject</h2>
  <div style="border: 1px solid red">
    <h2>父组件</h2>
    创建依赖 provide(key,value)
    <p>当前颜色: {{ color }}</p>
    <button @click="color = 'red'">红</button>
    <button @click="color = 'yellow'">黄</button>
    <button @click="color = 'blue'">蓝</button>
    <Son />
  </div>
</template>
<script lang='ts'>
/* 
- provide` 和 `inject` 提供依赖注入，功能类似 2.x 的 `provide/inject
- 实现跨层级组件(祖孙)间通信
*/
import { defineComponent, ref, provide } from "vue";
import Son from "@/components/Son.vue";

export default defineComponent({
  name: "ProvideAndInject",
  components: {
    Son,
  },
  setup() {
    const color = ref("red");
    // 创建依赖 provide(key,value)
    provide("color", color);
    return { color };
  },
});
</script>
<style>
</style>
