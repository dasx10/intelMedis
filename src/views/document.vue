<template>
    <div class="row">
        <img v-for='i in 7' :key="i" :src="`/img/doc/${i}.jpg`">
    </div>
</template>
<style lang="scss" scoped>
    img{
        width: 33%;
        padding: 5px;
    }
</style>