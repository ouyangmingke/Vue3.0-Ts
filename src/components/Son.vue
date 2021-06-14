<template>
  <div style="border: 1px solid red">
    <h3>子组件</h3>
    <GrandSon />
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