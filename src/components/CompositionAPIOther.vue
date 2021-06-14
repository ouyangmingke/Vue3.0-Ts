<template>
  <router-link to="/shallowReactiveAndshallowRef"> 浅响应式</router-link>|
  <router-link to="/readonlyAndshallowReadonly"> 深浅只读 </router-link>|
  <router-link to="/toRawAndMarkRaw"> 转换为普通对象，禁用代理 </router-link>|
  <router-link to="/toRef"> toRef </router-link>|
  <router-link to="/customRef"> 自定义的 ref </router-link>|
  <router-link to="/ProvideAndInject"> 依赖注入 </router-link>|
  <router-link to="/Check"> 检查数据 </router-link>|
</template>
<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CompositionAPIOther",
  setup() {
    return {};
  },
});
</script>
<style>
</style>