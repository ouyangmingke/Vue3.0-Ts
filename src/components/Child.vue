<template>
  <p>VUE3 中不再需要根标签</p>
  <h1>子组件</h1>
  <h1>{{ msg }}</h1>
  <button @click="cw">更新</button>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: {
    msg: String,
  },
  emits: ["fff"], // 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验
  /**
   * props:包含props配置声明且传入了的所有属性的对象
   * context: {attrs, slots, emit}
   * attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
   * slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
   * emit: 用来分发自定义事件的函数, 相当于 this.$emit
   */
  setup(props, context) {
    console.log(props);
    console.log(context.attrs);
    console.log(context.slots);
    console.log(context.emit);

    // 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
    // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据

    console.log("setup 在beforeCreate 之前就执行了");
    const cw = () => {
      // 使用分发事件  emit(事件名 , 事件参数 )
      context.emit("fff", "-");
    };
    // 如果有重名, setup优先
    return {
      a: 0, // 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
      cw, // 返回对象中的方法会与methods中的方法合并成功组件对象的方法
    };
  },
  data() {
    return {
      //a: 0, 因为会与setup 返回对象合并所以不能有相同的属性
      b: 0,
    };
  },
  methods: {
    // cw() {},因为会与setup 返回对象合并所以不能有相同的方法
    cw1() {
      console.log();
    },
  },

  beforeCreate() {
    console.log(
      "beforeCreate 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。"
    );
  },
  mounted() {
    console.log("界面渲染后的生命周期回调");
    console.log(this);
  },
});
</script>
<style>
</style>