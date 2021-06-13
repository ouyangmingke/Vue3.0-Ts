<template>
  <div>
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

<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "APP",
  setup() {
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
      myuser,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
    };
  },
});
</script>
<style>
</style>