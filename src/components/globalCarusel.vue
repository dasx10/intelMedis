<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide v-for="(e,i) in ['doctor','drink','drug','game','contact']" :key="i">
        <template v-slot:img >
          <div class="prev" :style="`background-image: url('/img/slide/${i+1}.jpg');`">
            <div class="conatiner">
              <div>
                <h1 class="m-1 m-sm-2">ИНТЕЛ-МЕДИС</h1>
                <h3 class="m-1 m-sm-2">{{
                  ["Вызов врачей на дом","Выведение из запоя","Никотиновая Зависимость","Игромания","Контакты"][i]
                }}</h3>
              <div>
              <div v-if='tel[e]'>
                <span v-for='t in tel[e].tel' :key="t" class="px-2 text-info font-weight-bold tel"><a :href="`tel:+38${t}`">{{formatTel(t)}}</a></span>
              </div>
            </div>
            <b-btn to='/home' size="lg" variant='info' class="m-2">Подробнее</b-btn>
            </div>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <nav-buttons></nav-buttons>
  </div>
</template>
<script>
  export default {
    components:{
      navButtons:()=>import('@/components/navButtons')
    },
    computed:{
      tel(){
      return this.$store.getters['tel']
    },
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      formatTel(e){
        return "("+e.substr(0,3)+") "+e.substr(3,3)+" "+e.substr(6,2)+" "+e.substr(8,e.length-1)
      }
    },
    mounted(){
      if(!this.tel){
        this.$store.dispatch('tel');
      }
    }
  }
</script>
<style lang="scss">
  .prev{
    background-position: top;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height:100vmin;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    .conatiner{
      position: relative;
      z-index:100;
      margin:0 0 0 200px;
      width:100%;
      @media (max-width:962px) {
        &{
          margin:0 auto;
          text-align:center;
        }
      }
    }
  }
</style>