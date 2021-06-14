<template>
  <div>
    <h1>RefAndReactive</h1>

    <h4>{{ "REF 原始对象" + count }}</h4>
    <h4>{{ "REF 对象" + refcount }}</h4>
    <button @click="UpdateRef">更新REF</button>
    <h2>修改原始对象后 数据不具有响应性</h2>
    <h2>reactive原始对象 : {{ User }}</h2>
    <button @click="UpdateUser">更新reactive原始对象</button>

    <h3>修改代理对象 代理对象和原始对象都会相应更新</h3>
    <h2>reactive {{ TUser }}</h2>
    <button @click="UpdateTUser">代理对象</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "APP",
  setup() {

    /** reactive与ref-细节
     * ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
     * 如果用ref对象/数组, 内部会自动将对象/数组  转换  为reactive的代理对象
     * ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
     * reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
     * ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
     */

    //#region ref 与 reactive
    // 没用 ref  该数据是非响应式的
    let count = 0;

    // ref  定义一个响应式数据
    // 该对象只包含一个名为 value 的 property：
    // （reference对象） 对象中有value 属性在 js 中调用需要使用 value 属性 在模板中 不需要使用 .value
    // 一般用来定义一个基本类型的响应式数据
    const refcount = ref(count);

    const UpdateRef = () => {
      //  count 非响应式数据 值改变但是页面不会更新渲染
      count += 10;
      refcount.value++;
      // count 值已被修改但是界面不会更=更新  非响应式
      console.log(`count：${count}  refcount: ${refcount.value}`);
    };

    /*****
    reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    *****/
    let User: any = {
      name: "tom",
      age: 25,
      wife: {
        name: "marry",
        age: 22,
      },
    };

    const TUser = reactive(User);

    const UpdateUser = () => {
      // 修改目标对象 代理对象也会修改
      User.name = "已修改原始对象User";
      console.log(User);
    };

    const UpdateTUser = () => {
      // 修改代理对象 目标对象也会修改
      TUser.age++;
    };
    //#endregion

    return {
      count,
      refcount,
      UpdateRef,
      User,
      UpdateUser,
      TUser,
      UpdateTUser,
    };
  },
});
</script>
<style>
</style>