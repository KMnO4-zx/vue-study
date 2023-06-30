<script setup>
import { ref, reactive } from "vue";
// 这是用来显示列表的
import TabItem from './TabItem.vue'

const props = defineProps(["items", "itemsMaxHot"])

</script>


<template>
    <div class="tab-list">
        <TabItem v-for="item in props.items" :item="item" :max-hot="props.itemsMaxHot"></TabItem>
    </div>
</template>

<style scoped>
.tab-list {
    margin: 20px;
    transition: 0.4s;
}
</style>