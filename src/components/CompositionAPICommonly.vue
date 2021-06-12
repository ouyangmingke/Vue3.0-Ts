<template>
  <div>
    {{ "未使用REF " + count }}
    {{ "使用REF " + refcount }}
    <button @click="update">响应式数据</button>
    <h2>TUser.name : {{ TUser.name }}</h2>
    <h2>TUser.age: {{ TUser.age }}</h2>
    <h2>TUser.wife: {{ TUser.wife }}</h2>
    {{ User.a }}

    <fieldset>
      <legend>加法操作</legend>
      {{ myuser.firstName }}
      <br />
      <input type="text" v-model="myuser.firstName" v-text="myuser.fistName" />
      <br />
      {{ myuser.lastName }}
      <br />
      <input type="text" v-model="myuser.lastName" v-text="myuser.lastName" />
      <br />
      {{ fullName1 }}
      <br />
      使用 computed函数 只设置 get
      <input type="text" v-model="fullName1" v-text="fullName1" />
      <br />

      {{ fullName2 }}
      <br />
      使用 computed函数 设置 get set
      <input type="text" v-model="fullName2" v-text="fullName2" />
      <br />
      {{ fullName3 }}
      <br />
      使用 watch 监视属性
      <input type="text" v-model="fullName3" v-text="fullName3" />
      <br />
      {{ fullName4 }}
      <br />
      使用 watchEffect 监视属性
      <input type="text" v-model="fullName" v-text="fullName4" />
      <br />
    </fieldset>
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

    /** reactive与ref-细节
     * ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
     *如果用ref对象/数组, 内部会自动将对象/数组  转换  为reactive的代理对象
     *ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
     *reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
     *ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
     */

    //#region ref 与 reactive
    // 没用 ref  该数据是非响应式的
    let count = 0;

    // ref  定义一个响应式数据
    // （reference对象） 对象中有value 属性在 js 中调用需要使用 value 属性 在模板中 不需要使用 .value
    // 一般用来定义一个基本类型的响应式数据
    const refcount = ref(count);

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

    const update = () => {
      //  count 非响应式数据 值改变但是页面不会更新渲染
      count += 10;
      refcount.value++;
      console.log(`count：${count}  refcount: ${refcount.value}`);

      // 修改目标对象 代理对象也会修改
      // 修改代理对象 目标对象也会修改
      User.name = "我修改的是User.name";
      TUser.age++;
      console.log(User);
    };
    //#endregion

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

    //#region 计算属性与监视
    const myuser = reactive({
      firstName: "A",
      lastName: "B",
    });

    /**  computed函数:
     * 与computed配置功能一致
     * 只有getter
     * 有getter和setter
     */
    const fullName = ref("");
    const fullName1 = computed(() => {
      return myuser.firstName + "_" + myuser.lastName;
    });
    const fullName2 = computed({
      get() {
        return myuser.firstName + "_" + myuser.lastName;
      },
      set(value: string) {
        // 不能修改自己  否则会陷入递归
        const name = value.split("_");
        myuser.firstName = name[0];
        myuser.lastName = name[1];
      },
    });
    const fullName3 = ref("");
    const fullName4 = ref("");

    /** watch函数:
     * 与watch配置功能一致
     * 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
     * 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
     * 通过配置deep为true, 来指定深度监视
     */
    // 使用 watch 监视一个数据 使用 传入参数
    watch(
      fullName,
      (v) => {
        fullName3.value = v;
      },
      {
        immediate: true, // 是否初始化立即执行一次, 默认是false
        deep: true, // 是否是深度监视, 默认是false
      }
    );
    watch([() => myuser.firstName, fullName], () => {
      console.log("监视非响应式数据 需要 使用 () => data ");
    });

    /** watchEffect函数
     * 不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
     * 默认初始时就会执行第一次, 从而可以收集需要监视的数据
     * 监视数据发生变化时回调
     */
    watchEffect(() => {
      fullName4.value = myuser.lastName;
    });
    //#endregion
    return {
      // 属性
      myuser,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
      msg,
      count,
      refcount,
      update,
      User,
      TUser,
    };
  },
});
</script>
