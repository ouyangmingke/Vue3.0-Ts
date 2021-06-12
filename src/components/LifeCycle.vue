<template>
  <h1>生命周期</h1>
  <h2>msg: {{ msg }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>
<script lang='ts'>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "LifeCycle",

  //#region VUE 2.X 的生命周期
  beforeCreate() {
    console.log("2.X beforeCreate()");
  },

  created() {
    console.log("2.X created");
  },

  beforeMount() {
    console.log("2.X beforeMount");
  },

  mounted() {
    console.log("2.X mounted");
  },

  beforeUpdate() {
    console.log("2.X beforeUpdate");
  },

  updated() {
    console.log("2.X updated");
  },

  beforeUnmount() {
    console.log("2.X beforeUnmount");
  },

  //   beforeDestroy() {
  //     // 在VUE 3.X 中已经移除 使用 onBeforeUnmount
  //     console.log("2.X beforeDestroy");
  //   },

  //   destroyed() {
  //     // 在VUE 3.X 中已经移除 使用 onUnmounted
  //     console.log("2.X destroyed");
  //   },

  unmounted() {
    console.log("2.X unmounted");
  },
  //#endregion

  //#region VUE 3.X 的生命周期
  setup() {
    onBeforeMount(() => {
      console.log("--onBeforeMount");
    });

    onMounted(() => {
      console.log("--onMounted");
    });

    onBeforeUpdate(() => {
      console.log("--onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("--onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("--onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("--onUnmounted");
    });

    const msg = ref("abc");

    const update = () => {
      msg.value += "--";
    };

    return { msg, update };
  },

  //#endregion
});
</script>
<style>
</style>