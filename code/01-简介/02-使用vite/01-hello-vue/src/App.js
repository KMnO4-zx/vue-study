// 引入组件
import MyButton from "./conponents/MyButton"

// 向外暴露出去
export default {
    data() {
        return {
            message: "hello world",
        }
    },
    // 在组件中注册子组件， 在哪用就在哪里注册
    components: {
        mybutton: MyButton
    },

    template: `
    <h1>{{ message }}</h1>
    <mybutton></mybutton>
    <mybutton></mybutton>
    <mybutton></mybutton>
    <mybutton></mybutton>
    `
}