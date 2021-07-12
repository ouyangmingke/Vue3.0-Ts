<template>
  <router-link to="/DIYshallowReactiveAndReacitve"
    >自定义响应 Reacitve </router-link
  >| <router-link to="/DIYshallowRefAndref"> 自定义响应 Ref </router-link>|
  <router-link to="/DIYshallowReadonlyAndreadonly"> 自定义只读 </router-link>|
  <router-link to="/DIYCheck"> 自定义验证 </router-link>|
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "APP",
  setup() {
    return {};
  },
});
</script>
<style>
</style>