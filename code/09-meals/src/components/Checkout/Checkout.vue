<script setup>
import { useMealsStore } from '../../store/meals';
import Counter from '../UI/Counter.vue'

const props = defineProps(['isShow'])
const emit = defineEmits(['close'])
const meals = useMealsStore()

</script>

<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close">
            <i @click="$emit('close')" class="ri-close-line"></i>
        </div>
        <!-- 订单详情 -->
        <div class="details">
            <header>餐品详情</header>
            <div class="list">
                <div class="item" v-for="item in meals.cartMeals">
                    <div class="img-wrap">
                        <img :src="item.img" :alt="item.title">
                    </div>
                    <div class="info">
                        <h2 class="title">{{ item.title }}</h2>
                        <div class="count">
                            <Counter :meals="item"></Counter>
                            <span class="amount">{{ item.count * item.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>合计￥<span>{{ meals.amount }}</span></footer>
        </div>
        <div class="bar">
            <div class="total-amount">
                <p v-show="meals.totalCount <= 0" class="no-goods">未选购商品</p>
                <p @click="showDetails = !showDetails" v-show="meals.totalCount > 0" class="has-goods">{{ meals.amount }}
                </p>
            </div>
            <button class="checkout-btn">去支付</button>
        </div>
    </div>
</template>

<style scoped>
.checkout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F0F0F0;
    z-index: 99999;
}

.close {
    height: 60rem;
    line-height: 60rem;
    padding-left: 20rem;
    font-size: 36rem;
    font-weight: bold;
}

.details {
    background-color: #fff;
    margin: 0 20rem;
    border-radius: 40rem;
    padding: 0 20rem;
}

.details header {
    height: 100rem;
    line-height: 100rem;
    font-size: 30rem;
    font-weight: bold;
    border-bottom: 1px dashed #e6e6e6;
}

.details footer {
    position: relative;
    height: 140rem;
    text-align: right;
    line-height: 140rem;
    font-size: 30rem;
    border-top: 1px dashed #e6e6e6;
}


.details footer::before,
.details footer::after {
    content: '';
    position: absolute;
    width: 20rem;
    height: 20rem;
    background-color: #F0F0F0;
    border-radius: 50%;
    left: -30rem;
    top: -10rem;
}

.details footer::after {
    left: auto;
    right: -30rem;
}

.details footer span {
    font-size: 30rem;
    font-weight: bold;
}

.list {
    max-height: 900rem;
    overflow: auto;
}

.item {
    display: flex;

}

.img-wrap {
    width: 160rem;
}

.info {
    flex: auto;
}

.title {
    margin: 26rem 0;
    font-size: 26rem;
}

.count {
    display: flex;
    justify-content: space-between;

}

.amount {
    font-size: 26rem;
    font-weight: bold;
}

.amount::before {
    content: '￥';
    font-weight: normal;
}

.bar {
    position: fixed;
    width: 710rem;
    height: 100rem;
    background-color: #3A3A3A;
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
}

.total-amount {
    margin-left: 40rem;
    display: flex;
    line-height: 100rem;
}

.no-goods,
.has-goods {
    color: #8E908F;
    font-weight: bold;
    font-size: 30rem;
}

.has-goods {
    color: #fff;
}

.has-goods::before {
    content: "合计：￥";
    font-size: 26rem;
}

.checkout-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 160rem;
    height: 100%;
    border-radius: 60rem;
    border: none;
    background-color: #F8BC00;
    font-size: 36rem;
}
</style>