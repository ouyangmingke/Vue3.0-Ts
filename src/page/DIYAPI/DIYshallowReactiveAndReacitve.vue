<template>
  <h2>DIYshallowReactiveAndReacitve</h2>
  <h3>这里是自定义劫持操作</h3>
  <h4>shallowReactive(浅监视) Reacitve(深监视)</h4>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import { ShallowReactive, reactive } from "./index";
export default defineComponent({
  name: "DIYshallowReactiveAndReacitve",
  setup() {
    /*
    // 测试自定义shallowReactive 
    const proxy = ShallowReactive({
      a: {
        b: 3,
      },
    });
    proxy.a = {
      b: 4,
    }; // 劫持到了修改数据
    proxy.a.b = 5; // 劫持到读取数据 没有劫持到修改数据 （浅响应）
    delete proxy.a; // 劫持到删除数据
    delete proxy.a.b;// 劫持到读取数据 没有劫持到修改数据 （浅响应）
    */
   
    /*
    // 测试自定义reactive
    const obj = {
      a: "abc",
      b: [{ x: 1 }],
      c: { x: [11] },
    };

    const proxy = reactive(obj);
    // console.log(proxy);
    // proxy.b[0].x += 1;// 劫持到读取 修改数据
    // proxy.c.x[0] += 1;
    // delete proxy.c.x[0]; // 劫持到读取 删除数据
    return {};
    */
  },
});
</script>
<style>
</style>