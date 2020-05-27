<template>
    <ul class="wrap d-flex justify-content-between text-center font-weight-bold">
        <router-link v-for='(el,i) in links' :key="i" :to='"/"+el' tag='li' class='text-center'>
            <div>
                <img :src="`/img/icon/${el}.svg`" class="d-block mx-auto mb-1" width="60px" height="60px">{{names[i]}}
            </div>
        </router-link>
    </ul>
</template>
<script>
export default {
    data:()=>({
        links:['doctor','drink','alc','game','drug','fiz'],
        names:['Вызов врачей на дом','Вывидение из запоя','Алкогольная Зависимость','Никотиновая Зависимость','Игромания','Физиотерапия']
    })
}
</script>
<style lang="scss" scoped>
    ul{
        padding:0 20px;
        position:absolute;
        width:100%;
        max-width:1920px;
        top:calc(100vmin - 160px);
        display: flex;
        justify-content:space-between;
    }
    li{
        & *{
            cursor: pointer;
        }
        transition:.5s;
        display: flex;
        flex-direction: column;
        align-items:center;
        padding:2.5vmin 5px 5px 5px;
        background:rgba(255,255,255,.8);
        width:calc(100vw / 6);
        max-width:270px;
        height:140px;
        margin:0 5px;
        display:flex;
        list-style:none;
        border-radius:5px;
        z-index:100;
        &:hover{
            background:rgba(255,255,255,.95);
        }
    }
</style>