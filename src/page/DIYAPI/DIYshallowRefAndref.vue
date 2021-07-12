<template>
  <h2>自定义shallowRef和ref</h2>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { shallowRef, ref } from "./index";

export default defineComponent({
  name: "APP",
  setup() {
    /* 测试自定义shallowRef */
    const ref3 = shallowRef({
      a: "abc",
    });
    // ref3.value = "xxx";
    // ref3.value.a = "yyy";

    /* 测试自定义ref */
    const ref1 = ref(0);
    // ref1.value++;// 劫持到修改

    const ref2 = ref({
      a: "abc",
      b: [{ x: 1 }],
      c: { x: [11] },
    });
    // ref2.value.b[0].x++;// 劫持到修改
    // console.log(ref1.value, ref2);
    return {};
  },
});
</script>
<style>
</style>