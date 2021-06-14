<template>
  <h2>创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制</h2>
  <input v-model="keyword" placeholder="搜索关键字" />
  <p>{{ keyword }}</p>
</template>
<script lang='ts'>
import { defineComponent, customRef } from "vue";
/* 
实现函数防抖的自定义ref
*/
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: number;
  /** customRef
   * customRef函数接收 track 和 trigger 函数作为参数，
   * 并且应该返回一个带有 get 和 set 的对象。
   */
  return customRef((track, trigger) => {
    return {
      // 返还数据
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        // 清除定时器
        clearTimeout(timeout);
        // 开启定时器
        // 延时一段时间后赋值 并更新页面
        timeout = setTimeout(() => {
          value = newValue;
          // 告诉Vue去触发界面更新
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "customRef",
  setup() {
    const keyword = useDebouncedRef("", 1000);
    return {
      keyword,
    };
  },
});
</script>
<style>
</style>