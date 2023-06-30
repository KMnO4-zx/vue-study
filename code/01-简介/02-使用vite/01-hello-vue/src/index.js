// 引入vue
import {createApp} from "vue/dist/vue.esm-bundler.js"

// 创建一个根组件
const App = {
    data(){
        return {
            message: "我爱vue~"
        }
    },
    template: "<h1>{{ message }}</h1>"
}

// 挂载到页面
createApp(App).mount("#app")