<template>
  <h1>{{ name + age }}</h1>
  <h3>toRefs将响应式数据取出并且不丢失响应性</h3>
  <h3>比如将使用reactive的响应式对象的值取出 并且值依然具有响应性</h3>
  <h3>使用...[arr] 可以将数据取出</h3>
  <input ref="dom" />使用Ref 获取html元素   并获取焦点
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
export default defineComponent({
  name: "ToRefsAndRef",
  setup() {
    const user = reactive({
      name: "白",
      age: 1,
    });
    const state = toRefs(user);
    
    // 默认为空  setup 执行时 页面还没有加载
    const dom = ref<HTMLElement | null>(null);

    onMounted(() => {
      dom.value && dom.value.focus();
    });
    return {
      user,
      dom,
      ...state,
    };
  },
});
</script>
<style>
</style>