<template>
  <div style="border: 1px solid red">
    <h3>子组件</h3>
    <slot>
      <p>默认 匿名 插槽内容</p>
    </slot>
    <slot name="header">
      <p>默认 header 插槽内容</p>
    </slot>
    <slot name="footer">
      <GrandSon />
    </slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import GrandSon from "@/components/GrandSon.vue";
export default defineComponent({
  name: "Son",
  components: {
    GrandSon,
  },
  setup() {
    return {};
  },
});
</script>
<style>

</style>