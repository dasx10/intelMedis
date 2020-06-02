<template>
    <div class="mb-4 p-4">
        <img :src="`/img/${$route.name}/${i}.jpg`" class="float-none px-4" :class="i%2==0?'float-lg-right':'float-lg-left'">
        <p class="px-4"><slot></slot></p>
    </div>
</template>
<script>
export default {
    props:['i']
}
</script>
<style lang="scss" scoped>
    div,img{
        min-height:250px;
    }
    img {
        height:33%;
        max-height:250px;
        object-fit:cover;
        border-radius:5px;
    }
</style>