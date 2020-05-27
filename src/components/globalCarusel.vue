<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide v-for='i in 5' :key="i">
        <template v-slot:img >
          <div class="prev" :style="`background-image: url('/img/slide/${i}.jpg');`">
            <div class="conatiner">
              <div class="minf">
                <h1 class="m-1 m-sm-2">ИНТЕЛ-МЕДИС</h1>
                <h3 class="m-1 m-sm-2">{{
                  ["Вызов врачей на дом","Выведение из запоя","Никотиновая Зависимость","Игромания","Контакты"][i-1]
                }}</h3>
              <div>
              <div>
                <span class="px-2 text-info font-weight-bold tel">
                  <a href="tel:+380612707703">(061) 270 77 03</a>
                  </span><span class="px-2 text-info font-weight-bold tel"><a href="tel:+380672707703">(067) 270 77 03</a></span>
                  </div></div><b-btn to='/home' size="lg" variant='info' class="m-2">Подробнее</b-btn>
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
      left:200px;
    }
  }
</style>