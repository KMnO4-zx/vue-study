// 引入函数 defineStore
import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    state: () => ({
        count: 100
    })
})