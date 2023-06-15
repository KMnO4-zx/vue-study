<script setup>
import { reactive, ref } from "vue";
import Photo from './Photo.vue'
import HotBar from './HotBar.vue'

const props = defineProps(["item", 'max-hot'])
const item = props.item

// console.log(props.item.name, props.item.hot, props.item.img);
</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <Photo :src="item.img" :alt="item.name" :rate="item.rate"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <HotBar :hot="item.hot" :max-hot="props.maxHot"></HotBar>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 40px;
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
</style>