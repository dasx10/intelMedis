<template>
  <div>
    <div class="row d-flex border-bottom" v-for="(h,i) in home" :key='i' :class='i%2==0?"flex-row-reverse":""' :id='h.id'>
      <div class="col-lg-6 align-self-center py-2 py-lg-4">
        <h2>
          {{h.name}}
        </h2>
        <h5 class="my-2 my-lg-4">{{h.data}}</h5>
        <router-link :to='"/"+h.id' tag="button" type="button" class="btn mt-4 mx-auto mx-sm-1 px-4 btn-primary" style="max-width: 200px;" >Подробнее</router-link>
        
      </div>
      <div class="col-lg-6 align-self-center d-sm-flex d-none my-1 my-md-2 my-lg-3">
        <img :src="`/img/home/${i}.jpg`">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  img{
    width:95%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px;
  }
</style>
<script>
export default {
  computed:{
    home(){
      return this.$store.getters['home']
    }
  },
  mounted(){
    if(this.home.length===0){
      this.getData();
    }
  },
  methods:{
    getData(){
      this.$store.dispatch('home');
    }
  }
}
</script>