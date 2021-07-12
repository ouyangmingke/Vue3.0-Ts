<template>
  <h2>自定义shallowReadonly 与 readonly</h2>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { shallowReadonly, readonly } from "./index";

export default defineComponent({
  name: "APP",
  setup() {
    /* 测试自定义readonly */
    /* 测试自定义shallowReadonly */
    const objReadOnly = readonly({
      a: {
        b: 1,
      },
    });
    const objReadOnly2 = shallowReadonly({
      a: {
        b: 1,
      },
    });

    // 深度只读
    // objReadOnly.a = 1;// 无法修改
    // delete objReadOnly.a;// 无法删除
    // objReadOnly.a.b = 2;// 无法修改
    // delete objReadOnly.a.b;// 无法删除

    // 浅层只读
    // objReadOnly2.a = 1;// 无法修改
    // delete objReadOnly2.a;// 无法删除
    // objReadOnly2.a.b = 2;// 可以修改
    // delete objReadOnly2.a.b; // 可以删除
    return {};
  },
});
</script>
<style>
</style>