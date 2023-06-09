import { createApp } from 'vue'
import App from './App.vue'

/*
    App.vue是根组件
        - createApp(App) 将根组件关联到应用上
        - vm 代理对象
*/

const app = createApp(App)
const vm = app.mount("#app")

// 设置为全局变量
window.vm = vm
// console.log(vm)
// createApp(App).mount('#app')
