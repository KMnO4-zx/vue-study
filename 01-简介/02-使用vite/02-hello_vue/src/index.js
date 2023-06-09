import {createApp} from "vue/dist/vue.esm-bundler.js"
import App from "../../01-hello-vue/src/App"


// 创建应用并挂载
// mount()的返回值是根组件的实例
const vm = createApp(App).mount("#app")