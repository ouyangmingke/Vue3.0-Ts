<template>
  <h3>ToRefChild</h3>
  <h3>{{ foo }}</h3>
  <h3>length:{{ length }}</h3>
  <h3>toref：{{ t }}</h3>
  <h3>ref：{{ r }}</h3>
</template>
<script lang='ts'>
import { defineComponent, computed, isRef, Ref, ref, toRef } from "vue";
function useFeatureX(foo: Ref) {
  const lenth = computed(() => foo.value.toString().length);
  return lenth;
}
export default defineComponent({
  name: "ToRefChild",
  props: {
    foo: String,
  },
  setup(props) {
    // toRef 是基于原始数据进行的响应
    // ref 拷贝了一份新的数据值单独操作
    // const length = useFeatureX(toRef(props, "foo")); // 不改变
    const length = useFeatureX(toRef(props, "foo"));
    const t = toRef(props, "foo");
    const r = ref(props.foo);
    return { length, t, r };
  },
});
</script>
<style>
</style>