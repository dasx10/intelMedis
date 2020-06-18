<template>
    <footer>
        <div class="text-light p-3 container">
            <h4 class="text-center border-bottom border-primary p-2">Контактная информация</h4>
            <div class="row text-center p-3 d-flex justify-content-center border-bottom border-primary">
                <div class="col-md-6 col-lg-4" v-for='f in fil' :key="f.id">
                    <p class="mx-2">{{f.name}}</p>
                    <p>
                        <span v-for='t in f.tel' :key="t">
                            <b-icon icon='phone'/>
                            <a :href="`tel:+38${t}`" class="text-light"> {{formatTel(t)}} </a>
                        </span>
                    </p>
                    <p class="mx-2">{{f.loc}}</p>
                </div>
                <div>
                    <p>Наша почта</p>
                    <p class="mx-2">
                        <a href="mailto:intel-medis@ukr.net" class="text-light">intel-medis@ukr.net</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    footer {
        background: fixed url(/img/foo.jpg) top no-repeat;
        background-size: auto;
        background-size: cover;
    }
</style>
<script>
export default {
    computed:{
        fil(){
            return this.$store.getters['fil']
        }
    },
    methods:{
        formatTel(e){
            return "("+e.substr(0,3)+") "+e.substr(3,3)+" "+e.substr(6,2)+" "+e.substr(8,e.length-1)
        }
    },
    mounted(){
        if(!this.fil){
            this.$store.dispatch('fil');
        }
    }
}
</script>