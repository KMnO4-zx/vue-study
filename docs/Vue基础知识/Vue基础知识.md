# Vue

## Vue介绍

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

- Vue 是一个前端的框架，主要负责帮助我们构建用户的界面
- MVVM：Model - View - View Model
- Vue 负责 vm 的工作（视图模型），通过 Vue 可以将视图和模型相关联。
    - 当模型发生变化时，视图会自动更新
    - 也可以通过视图去操作模型
- Vue 思想：
    - 组件化开发
    - 声明式的编程

### Vue启动

```
yarn create vue
cd vue
yarn dev
```

可以在`package.json`中添加自动启动：`"dev": "vite --open"`

```js
{
    "name": "vue-project",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "dev": "vite --open",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "vue": "^3.2.45"
    },
    "devDependencies": {
        "@vitejs/plugin-vue": "^3.2.0",
        "vite": "^3.2.4"
    }
}
```



### 直接在网页中使用

```html
<script>
    // 编写vue代码
    // 创建一个根组件，在vue3中组件就是一个普通的js对象
    // 组件用来创建组件实例，组件是组件实例的模板
    // 组件 --> 组件生成组件实例 --> 虚拟DOM --> DOM（在页面中呈现）
    const Root = {
        template: "<h1>我爱Vue</h1>" // 希望组件在页面中呈现的样子
    }

    // 创建app实例
    //const app = Vue.createApp(Root)
    // 将实例在页面中挂载
    //app.mount("#app")

    Vue.createApp(Root).mount("#app")
</script>
```

### 组件中的data

```html
<script>
    // 编写vue代码
    // 创建一个根组件，在vue3中组件就是一个普通的js对象
    // 组件用来创建组件实例，组件是组件实例的模板
    // 组件 --> 组件生成组件实例 --> 虚拟DOM --> DOM（在页面中呈现）
    const Root = {
        data() {
            return {
                message: "Vue好棒！" // data方法返回的对象，其中的属性会自动添加到组件实例中
            }
        }, // data是一个函数，需要一个对象作为返回值

        // 在模板中可以直接访问组件实例中的属性
        // 在模板中可以通过 {{属性名}} 来访问到组件实例中的属性
        template: "<h1>我爱Vue，{{message}}</h1>" // 希望组件在页面中呈现的样子
    }

    // 创建app实例
    //const app = Vue.createApp(Root)
    // 将实例在页面中挂载
    //app.mount("#app")

    Vue.createApp(Root).mount("#app")
</script>
```

### 按钮案例

- 如果直接将模板定义到网页中，此时模板必须符合html的规范
    - My-Button -> my-button

- 如果在组件中定义template，则会优先使用template作为模板，
    - 同时根元素中的所有内容，都会被替换
    - 如果在组件中没有定义template，则会使用根元素的innerHTML作为模板使用

- 组件是用来创建组件实例的（vm）
    - 创建一个按钮，可以显示按钮的点击的次数

- template是模板，它决定了组件最终的样子。定义模板的方式有三种：

    - 1.在组件中通过template属性去指定

    - 2.直接在网页的根元素中指定

    - 3.组件中通过render()直接渲染

### 模板介绍

```html
<script>
    // 组件是用来创建组件实例的（vm）
    // 创建一个按钮，可以显示按钮的点击的次数

    const Root = {
        data() {
            return {
                count: 0 // 记录点击次数

                // data中的数据会自动和使用它的视图绑定，数据发生变化视图会自动刷新
            }
        },

        template:
            "<button @click='count++'>点我一下</button> - 点了{{count}}次"
    }

    Vue.createApp(Root).mount("#app")
</script>
```

## Vue基础

App.vue是根组件，createApp(App) 将根组件关联到应用上

- 会返回一个应用的实例
    - app.mount("#app") 将应用挂载到页面中
- 会返回一个根组件的实例，组件的实例通常可以命名为vm
- 组件实例是一个Proxy对象（代理对象）

- 直接向组件实例中添加的属性不会被vue所代理，不是响应数据，修改后页面不会发生变化

- data会返回一个对象作为返回值，vue会对该对象进行代理

---

### data

有些场景下，可以通过shallowReactive()来创建一个浅层的响应式对象

```js
return shallowReactive({
 msg: "大闸蟹今天没去玩游戏！",
 stu: {
     name: "孙悟空",
     age: 18,
     gender: "男",
     friend: {
         name: "猪八戒"
     }
 }
})
```

### methods

- methods 用来指定实例对象中的方法 
    - 它是一个对象，可以在它里边定义多个方法
    - 这些方法最终将会被挂载到组件实例上
    - 可以直接通过组件实例来调用这些方法 
    - 所有组件实例上的属性都可以在模板中直接访问
    - methods中函数的this会被自动绑定为组件实例

```js
methods: {
    sum(a, b){
        // console.log(this) // 组件实例 vm
        return a + b
    },

    changeMsg(){
        this.msg = "新的消息！"
    }
}
```

