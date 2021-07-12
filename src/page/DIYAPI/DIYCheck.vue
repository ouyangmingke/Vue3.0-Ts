<template>
  <h2>自定义验证</h2>
  <h3>通过标示位进行判断</h3>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { ref, reactive, readonly } from "./index";
import { isRef, isReactive, isReadonly, isProxy } from "./index";

export default defineComponent({
  name: "APP",
  setup() {
    /* 测试判断函数 */
    console.log("isReactive  " + isReactive(reactive({})));
    console.log("isRef  " + isRef(ref({})));
    console.log("isReadonly  " + isReadonly(readonly({})));
    console.log("isProxy  " + isProxy(reactive({})));
    console.log("isProxy  " + isProxy(readonly({})));
    return {};
  },
});
</script>
<style>
</style>