<script setup>
import TabList from "./TabList.vue";
import { ref } from "vue";

const current = ref(0)



</script>

<template>
    <!-- 选项卡 外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡的头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div @click="current = 0" class="tab-button" :class="{ active: current === 0 }">热门球员</div>
            <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">热门球队</div>
        </header>
        <!-- 选项卡的主体 -->
        <div class="main">
            <!-- 
                          current === 0 显示球员
                          current === 1 显示球队
                            v-show 指令，用来设置一个内容是否显示
                              v-show 设置一个元素是否显示时，通过 display: none;
                       -->
            <div v-show="current === 0">
                <!-- 球员 -->
                <!-- <TabList :items="props.players" :items-max-hot="props.itemsMaxHot"></TabList> -->
                <slot name="0"></slot>
            </div>
            <div v-show="current === 1">
                <!-- 球队 -->
                <!-- <TabList :items="props.teams" :items-max-hot="props.itemsMaxHot"></TabList> -->
                <slot name="1"></slot>
            </div>

        </div>
    </div>
</template>

<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    width: 800px;
    background-color: #2C53D3;
    padding: 20px;
}

.tab-head {
    display: flex;
    border-radius: 10px;
    /* 设置子元素可以遮盖 */
    overflow: hidden;
}

.tab-button {
    background-color: white;
    font-size: 30px;
    flex: auto;
    padding: 10px 0;
    text-align: center;
    /* cursor: pointer; 鼠标移上去光标变成小手 */
    cursor: pointer;
    transition: 0.4s;
}

.tab-button:not(.active):hover {
    color: #BB0132;
}

.active {
    background-color: #BB0132;
    color: #fff;
}
</style>