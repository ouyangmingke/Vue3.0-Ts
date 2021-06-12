// 程序主入口文件
// 引入 createApp 函数 创建对应的应用 产生应用的实例对象
import { createApp } from 'vue'

// 引入App组件（所有组件的父级主件）
import App from './App.vue'
import router from './router'

// 创建App应用返回对应的实例对象，调用 mount 方法进行挂载
createApp(App).use(router).mount('#app')
