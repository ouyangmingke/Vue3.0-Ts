import { onMounted, onUnmounted, ref } from "vue";
export default function () {
    const x = ref(-1);
    const y = ref(-1);

    // 用于收集点击事件坐标的函数
    //  注意这里需要指定数据类型 MouseEvent 
    const updatePosition = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    // 页面挂载后绑定点击监听
    onMounted(() => {
        document.addEventListener("click", updatePosition);
    });

    // 卸载前解绑点击监听
    onUnmounted(() => {
        document.removeEventListener("click", updatePosition);
    });
    return {
        x, y
    }
}