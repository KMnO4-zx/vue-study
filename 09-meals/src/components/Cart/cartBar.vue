<script setup>
import Mask from '../UI/Mask.vue'
import cartBag from '../../assets/bag.png'
import { useMealsStore } from '../../store/meals';
import { ref } from "vue";
import CartDetails from './CartDetails.vue';

const meals = useMealsStore()
const showDetails = ref(false)



</script>

<template>
    <!-- <Mask :is-show="showDetails" @hide="showDetails = false"></Mask> -->
    <CartDetails :is-show="showDetails" @hide="showDetails = false"></CartDetails>

    <div class="cart-bar">
        <div class="cart-bag">
            <img :src='cartBag' alt="">
            <span v-show="meals.totalCount > 0" class="total-count">{{ meals.totalCount }}</span>
        </div>
        <div class="total-amount">
            <p v-show="meals.totalCount <= 0" class="no-goods">未选购商品</p>
            <p @click="showDetails = !showDetails" v-show="meals.totalCount > 0" class="has-goods">{{ meals.amount }}</p>
        </div>
        <button class="checkout">去结算</button>
    </div>
</template>
<style scoped>
.cart-bar {
    position: fixed;
    width: 710rem;
    height: 100rem;
    background-color: #3A3A3A;
    bottom: 40rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
    z-index: 9999;
}

.cart-bag {
    position: absolute;
    width: 100rem;
    bottom: -10rem;
}

.total-count {
    width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    right: -20rem;
    /* padding: 6rem; */
    color: #fff;
    font-weight: bold;
}

.total-amount {
    margin-left: 160rem;
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
    content: "￥";
    font-size: 26rem;
}

.checkout {
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