<template>
    <ul class="wrap justify-content-between text-center font-weight-bold mx-auto">
        <li v-for='(el,i) in links' :key="i" class='text-center'>
            <a :href='"#"+el'>
                <img :src="`/img/icon/${el}.svg`" class="d-block mx-auto mb-1" width="60px" height="60px">
                <span class="d-none d-lg-inline">{{names[i]}}</span>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    data:()=>({
        links:['doctor','drink','alc','drug','game','fiz'],
        names:['Вызов врачей на дом','Вывидение из запоя','Алкогольная Зависимость','Никотиновая Зависимость','Игромания','Физиотерапия']
    })
}
</script>
<style lang="scss" scoped>
    ul{
        padding:0 5vw;
        position:absolute;
        width:100vw;
        top:calc(100vmin - 160px);
        display: flex;
        justify-content:space-between;
        margin: 0 auto;
        display: flex;
        @media(max-height:600px),(max-width:720px){
            &{
                display: none;
            }
        }
    }
    li{
        & *{
            cursor: pointer;
        }
        transition:.5s;
        display: flex;
        flex-direction: column;
        align-items:center;
        padding:15px 5px;
        background:rgba(255,255,255,.8);
        width:calc(100vw / 6);
        max-width:270px;
        margin:0 5px;
        display:flex;
        list-style:none;
        border-radius:5px;
        z-index:100;
        &:hover{
            background:rgba(255,255,255,.95);
        }
        a{
            color:#313131;
            &:hover{
                text-decoration: none;
            }
        }
    }
</style>