<template>
  <div>
    <h2 class='text-center'>Контакты</h2>
    <div class="row text-center mt-5">
      
      <div class="col-12 border-bottom">
        <div v-if='tel' class="row border-bottom border-primary d-flex justify-content-center">
          <div class="col-sm-4" v-if='tel.doctor.tel.length>0'>
            <h5>ВЫЗОВ ВРАЧЕЙ НА ДОМ</h5>
            <p v-for='t in tel.doctor.tel' :key="t"><a :href="`tel:+38${t}`">{{formatTel(t)}}</a></p>
          </div>
          <div class="col-sm-4" v-if='tel.drink.tel.length>0'>
            <h5>ВЫВЕДЕНИЕ ИЗ ЗАПОЯ НА ДОМУ</h5>
            <p v-for='t in tel.drink.tel' :key="t"><a :href="`tel:+38${t}`">{{formatTel(t)}}</a></p>
          </div>
          <div class="col-sm-4" v-if='tel.stop.tel.length>0'>
            <h5>ЛЕЧЕНИЕ ЗАВИСИМОСТЕЙ</h5>
            <p v-for='t in tel.stop.tel' :key="t"><a :href="`tel:+38${t}`">{{formatTel(t)}}</a></p>
          </div>
      </div>
      <div class="row d-flex" v-for='f in Object.values(fil).sort((a,b)=>a.index-b.index)' :key="f.id">
          <div class="col-md-12 col-xl-6 align-self-center">
            <h3>{{f.name}}</h3>
            <p v-for='t in f.tel' :key="t"><a href="tel:+380974442416">{{formatTel(t)}}</a></p>
            <p>{{f.loc}}</p>
          </div>
          <div class="col-md-12 col-xl-6">
            <iframe :src="f.map" allowfullscreen="allowfullscreen" class="mt-2 py-2" style="border: 0px none;" width="100%" height="350px" frameborder="0"></iframe>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    tel(){
      return this.$store.getters['tel']
    },
    fil(){
      return this.$store.getters['fil']
    }
  },
  mounted(){
    if(!this.fil){
      this.$store.dispatch('fil');
    }
    if(!this.tel){
      this.$store.dispatch('tel');
    }
  },
  methods:{
    formatTel(e){
      return "("+e.substr(0,3)+") "+e.substr(3,3)+" "+e.substr(6,2)+" "+e.substr(8,e.length-1)
    }
  }
}
</script>
