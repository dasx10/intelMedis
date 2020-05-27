<template>
  <div id="app" class='pb-4'>
    <div class="mask">
      <nav-bar></nav-bar>
      <global-carusel v-if='$route.name=="Home"'></global-carusel>
      <div class="container p-lg-4 p-md-3 p-2 my-2 my-md-3 my-lg-4">
        <router-view class='mt-4 pt-4'/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    navBar:()=>import('@/components/navBar'),
    globalCarusel:()=>import('@/components/globalCarusel'),
  }
}
</script>
<style lang="scss" scoped>
  #app{
    background: fixed url(/img/bg.jpg) no-repeat;
    background-size:cover;
    .mask{
      background:linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.8));
      width:100%;height:100%;
    }
  }
  .container{
    background:rgba(255,255,255,.8);
    border-radius:5px;
    max-width:85%;
    margin: 0 auto;
    @media(max-width:1280px){
      &{
        max-width:90%;
      }
    }
    @media(max-width:768px) {
      &{
        max-width:calc(100% - 10px);
      }
    }
  }
</style>