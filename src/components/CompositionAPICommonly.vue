<template>
  <div>
    <router-link to="/RefAndReactive">RefAndReactive</router-link>|
    <router-link to="/ProxyAndReflect">比较Vue2与Vue3的响应式</router-link>|
    <router-link to="/ComputAndwatch">计算属性与监视</router-link>|
    <router-link to="/Child">子组件</router-link>|
    <router-link to="/LifeCycle">生命周期</router-link>|
    <router-link to="/UseHook">Hook 函数</router-link>|
    <router-link to="/toRefsAndRef">取出响应式数据</router-link>|
    <router-view></router-view>

 
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "CompositionComponent",

  // 组合API的入口函数, 只在初始化时执行一次
  setup() {
    // 变量
    let msg = "函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用";
    return {
      // 属性
      msg,
    };
  },
});
</script>
