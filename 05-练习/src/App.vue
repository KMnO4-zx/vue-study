<script setup>
import { ref } from 'vue'

// 创建一个变量记录状态

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
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/messi.png" alt="梅西">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">梅西</span>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="/images/法国.jpg" alt="法国">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">法国</span>
              <div class="hot-bar">
                <div class="inner">333760热度</div>
              </div>
            </div>
          </div>
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

.tab-item {
  display: flex;
  margin-bottom: 40px;
}

.photo {
  width: 150px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
}

.photo img {
  width: 100%;
  vertical-align: bottom;
}

.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #F36600;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
}

.desc {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 30px;
  color: #fff;
  flex: auto;
  margin-left: 30px;
  
}

.hot-bar {
  background-color: #032666;
  border-radius: 20px;
  text-indent: 0.5em;
}

.inner {
  border-radius: 20px;
  background-image: linear-gradient(90deg, #B90334 50%, #4D0211);
  white-space: nowrap;
  width: 10%;
}
</style>