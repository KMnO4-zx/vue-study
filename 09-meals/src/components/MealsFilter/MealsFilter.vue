<template>
    <div class="filter">
        <div class="filter-inner">
            <input class="filter-input" type="text" placeholder="请输入关键字" />
            <i class="ri-search-2-line"></i>
        </div>
    </div>
</template>
<style scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid #e6e6e6;

    /* background-color: #bfa; */
}

.filter-inner {
    display: flex;
    align-items: center;
    height: 80rem;
    /* background-color: #bfa; */
    position: relative;
}

.filter-input {
    background-color: #F2F2F2;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 20rem 0 80rem;
}

.filter-inner i {
    position: absolute;
    font-size: 30rem;
    color: #C8C8C8;

    left: 30rem;
}
</style>