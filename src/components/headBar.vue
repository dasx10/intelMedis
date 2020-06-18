<template>
    <header class="d-flex justify-content-center align-items-center flex-column"><h1>ИНТЕЛ-МЕДИС</h1><h4>Медицина с интеллектом</h4></header>
</template>
<style lang="scss" scoped>
    header{
        padding-top: 60px;
        background-image: url('/img/slide/3.jpg');
        background-attachment: fixed;
        background-position: center -290px;
        background-repeat: no-repeat;
        background-size:cover;
        height:360px;
        box-shadow:0 0 10px hsla(0,0%,100%,.5);
        text-shadow:2px 5px 3px #fff;
        color:#225;
        @media(max-height:600px){
            &{
                background-position:center;
            }
        }
    }
</style>