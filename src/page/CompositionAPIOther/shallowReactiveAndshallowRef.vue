<template>
  <h2>
    注意: 在修改 shallow 数据时 只能修改 shallow 类型数据
    不能同时修改其他响应式数据
  </h2>
  <h3>shallowReactive 只处理了对象内最外层属性的响应式</h3>
  <h3>shallowRef: 只处理了value的响应式, 不进行对象的reactive处理</h3>
  <h5>m1: {{ m1 }}</h5>
  <button @click="updateM1">更新m1</button>

  <h5>m2: {{ m2 }}</h5>
  <button @click="updateM2">更新m2</button>

  <h5>m3: {{ m3 }}</h5>
  <button @click="updateM3">更新m3</button>

  <h5>m4: {{ m4 }}</h5>
  <button @click="updateM4">更新m4</button>
</template>
<script lang='ts'>
import {
  defineComponent,
  isProxy,
  isReactive,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
  toRef,
} from "vue";
/* 
shallowReactive与shallowRef
  shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
总结:
  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可,
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
export default defineComponent({
  name: "APP",
  setup() {
    // 深度响应式
    const m1 = reactive({
      name: "reactive:对象深层响应",
      car: { name: "奔驰" },
    });

    const m2 = ref({
      name: "ref:基本类型响应",
      car: { name: "奔驰M2" },
    });

    // 浅响应式
    const m3 = shallowReactive({
      name: "shallowReactive",
      car: { name: "奔驰M3" },
    });

    const m4 = shallowRef({
      name: "shallowRef:基本类型浅响应",
      car: { name: "奔驰M4" },
    });

    const updateM1 = () => {
      m1.name += "++";
      m1.car.name += "==";
      console.log(m1);
    };
    const updateM2 = () => {
      m2.value.car.name += "123";
      console.log(m2);
    };

    const updateM3 = () => {
      // m3.name += "++";
      // 内层更新值但不响应
      m3.car.name += "==";
      console.log(m3);
    };
    const updateM4 = () => {
      m4.value.name += "122";
      // 只有更新 Value 值有效
      console.log(m4);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      updateM1,
      updateM2,
      updateM3,
      updateM4,
    };
  },
});
</script>
<style>
</style>