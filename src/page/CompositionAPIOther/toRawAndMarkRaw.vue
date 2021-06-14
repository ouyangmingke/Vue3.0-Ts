<template>
  <h2>{{ state }}</h2>
  {{ foo }}
  {{ bar }}
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang='ts'>
/* 
toRaw: 得到reactive代理对象的目标数据对象
*/
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "toRawAndMarkRaw",
  setup() {
    const state = reactive<UserInfo>({
      name: "tom",
      age: 25,
    });

    const nested = {
      nested: {
        a: "a",
      },
    };
    const foo = markRaw(nested);

    const bar = reactive(foo.nested);

    const testToRaw = () => {
      bar.a += "1";
      console.log(foo);
      console.log(bar);

      // 代返回 reactive 或 readonly 代理的原始对象。
      const user = toRaw(state);
      user.age++; // 界面不会更新
    };

    const testMarkRaw = () => {
      const likes = ["a", "b"];
      // state.likes = likes

      // 标记一个对象，使其永远不会转换为 proxy。返回对象本身。
      state.likes = markRaw(likes); // likes数组就不再是响应式的了
      setInterval(() => {
        // 修改数据 但不响应
        if (state.likes) state.likes[0] += "--";
      }, 1000);
    };

    return {
      foo,
      bar,
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>
<style>
</style>