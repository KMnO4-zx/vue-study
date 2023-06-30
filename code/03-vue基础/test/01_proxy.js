// 创建对象

const obj = {
    name: '孙悟空',
    age: 18,
}

/* 
    如果直接修改对象的属性，那么就仅仅是修改了属性，而没有去做其他的事情
        这种操作只会影响对象自身，不会导致元素的重新渲染

    希望在修改一个属性的同时，可以进行一些其他的操作，比如触发元素的重新渲染

    要实现这个目的，必须要对这个对象进行改造，vue3中使用的是代理模式来完成对对象的改造
*/

// obj.name = '猪八戒'

// 来为对象创建一个代理

const handler = {
    // get 用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定get后，在通过代理读取对象属性时，就会调用get方法来获取值
    get(target, prop, receiver) {
        /*
            三个参数
                target：被代理的对象
                prop：读取的属性
                receiver：代理对象
        */
        return target[prop]

    },

    // set会在通过代理修改对象时调用
    set(target, prop, value, receiver) {
        target[prop] = value
    }

}  // handler 用来指定代理的行为

// 创建代理
const proxy = new Proxy(obj, handler)

proxy.age = 28

console.log(proxy.age)
console.log(obj.age)