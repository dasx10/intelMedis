<template>
    <div>
        <h2 class='text-center'>Свидетельство и лицензии</h2>
        <img v-for='i in 7' :key="i" :src="`/img/doc/${i}.jpg`">
    </div>
</template>
<style lang="scss" scoped>
    img{
        width: 33%;
        padding:5px;
    }
</style>