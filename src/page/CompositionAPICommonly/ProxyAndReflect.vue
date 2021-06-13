<template>
  <div>
      Vue3的响应式
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "APP",
  setup() {
    //#region Vue3的响应式  原理
    const user: any = {
      name: "John",
      age: 12,
    };

    /* 
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */
    const proxyUser = new Proxy(user, {
      get(target, prop) {
        console.log("劫持get()", prop);
        return Reflect.get(target, prop);
      },

      set(target, prop, val) {
        console.log("劫持set()", prop, val);
        return Reflect.set(target, prop, val); // (2)
      },

      deleteProperty(target, prop) {
        console.log("劫持delete属性", prop);
        return Reflect.deleteProperty(target, prop);
      },
    });
    // 读取属性值
    console.log(proxyUser === user);
    console.log(proxyUser.name, proxyUser.age);
    // 设置属性值
    proxyUser.name = "bob";
    proxyUser.age = 13;
    console.log(user);
    // 添加属性
    proxyUser.sex = "男";
    console.log(user);
    // 删除属性
    delete proxyUser.sex;
    console.log(user);
    //#endregion

    return {};
  },
});
</script>
<style>
</style>