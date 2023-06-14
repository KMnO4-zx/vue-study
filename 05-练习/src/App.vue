<script setup>
import { ref, reactive } from 'vue'
import TabItem from './components/TabItem.vue'
// 创建一个变量记录状态

const current = ref(0)

const player = reactive({
    name: '梅西',
    img: '/images/messi.png',
    rate: 1,
    hot: 433760
})

const team = reactive({
    name: '法国',
    img: '/images/法国.jpg',
    rate: 1,
    hot: 333760
})


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
        <div class="tab-list">
          <TabItem :item="player"></TabItem>
        </div>
      </div>
      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <TabItem :item="team"></TabItem>
        </div>
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

.tab-list {
  margin: 20px;
}


</style>