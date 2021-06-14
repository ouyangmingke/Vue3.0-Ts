<template>
  <h2>响应式数据的判断</h2>
  <h4>isRef: 检查一个值是否为一个 ref 对象</h4>
  <h4>isReactive: 检查一个对象是否是由 reactive创建的响应式代理</h4>
  <h4>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</h4>
  <h4>isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理</h4>
</template>
<script lang='ts'>
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref,
} from "vue";
export default defineComponent({
  name: "Check",
  setup() {
    // isRef: 检查一个值是否为一个 ref 对象
    console.log("isRef");

    console.log(isRef(ref({})));

    // isReactive: 检查一个对象是否是由 reactive创建的响应式代理
    console.log("isReactive");

    console.log(isReactive(reactive({})));
    console.log(isReactive(ref({}).value));

    // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    console.log("isReadonly");
    console.log(isReadonly(readonly({})));

    // isProxy: 检查一个对象是否是由 reactive 或者 readonly  方法创建的代理
    console.log("isProxy");
    console.log(isProxy(ref({}).value));
    console.log(isProxy(reactive({})));
    console.log(isProxy(readonly({})));

    return {};
  },
});
</script>
<style>
</style>