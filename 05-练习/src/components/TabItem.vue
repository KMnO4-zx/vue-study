<script setup>
import { reactive, ref } from "vue";


const props =  defineProps(["item"])

// console.log(props.item.name, props.item.hot, props.item.img);
</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="props.item.img" :alt="props.item.name">
            <span>{{ props.item.rate }}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ props.item.name }}</span>
            <div class="hot-bar">
                <div class="inner">{{ props.item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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