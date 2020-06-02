<template>
    <div>
        <h2 class="text-center">Игромания</h2>
        <list-block v-for='(d,i) in game' :key="i" :i='i+1'>{{d}}</list-block>
    </div>
</template>
<script>
export default {
    components:{
        listBlock:()=>import('@/components/block/listBlock')
    },
    computed:{
        game(){
            return this.$store.getters['game']
        }
    },
    async mounted(){
        if(this[this.$route.name].length==0){
            await this.getData()
        }
    },
    methods:{
        async getData(){
            try{
                await this.$store.dispatch('list',this.$route.name);
            }catch(e){
                console.error(e)
            }
        }
    }
}
</script>