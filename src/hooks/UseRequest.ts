import { ref } from 'vue'
import axios from 'axios'
/* 
使用axios发送异步ajax请求
*/
export default function useUrlLoader<T>(url: string) {
    // 请求成功的数据  利用泛型 和 null 适配 对象
    const result = ref<T | null>(null)
    // 加载状态
    const loading = ref(true)
    // 错误信息
    const errorMsg = ref(null)

    axios.get(url)
        .then(response => {
            loading.value = false
            result.value = response.data
        })
        .catch(e => {
            loading.value = false
            errorMsg.value = e.message || '未知错误'
        })

    return {
        loading,
        result,
        errorMsg,
    }
}