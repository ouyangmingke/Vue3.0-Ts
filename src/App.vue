<template>
  vue2中的html模板必须是一对标签 vue3 可以用  '/>'
  <!-- 使用子组件 HelloWorld -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <hr />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/CompositionAPICommonly">常用组合API</router-link> |
    <router-link to="/CompositionAPIOther">组合API其他部分</router-link>|
    <router-link to="/Child">子组件</router-link>|
    <router-link to="/LifeCycle">生命周期</router-link>|
    <router-link to="/UseHook">Hook 函数</router-link>|
    <router-link to="/toRefsAndRef">取出响应式数据</router-link>|
    <router-view></router-view>
  </div>
</template>

// 可以写TS代码
<script lang="ts">
// defineComponent 函数 目的是定义一个主件，内部可以传入一个配置对象
import { defineComponent, ref } from "vue";
// 引入一个子级组件
// import UseHook from "./components/UseHook.vue";
// import ToRefsAndRef from "./components/.vue";
// 暴露一个定义好的组件
export default defineComponent({
  // 当前组件的名字  命名后  可以使用 VUE 浏览器扩展查看到
  name: "App",
  setup() {
    const msg = ref("在props中显示");
    const fun = (name: string) => {
      msg.value += name;
    };
    return {
      msg,
      fun,
    };
  },

  // 注册组件
  components: {
    // 注册一个子组件
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
