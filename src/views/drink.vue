<template>
    <div>
        <h2 class="text-center">Выведение из запоя</h2>
        <list-block v-for='(d,i) in drink' :key="i" :i='i+1'>{{d}}</list-block>
    </div>
</template>
<script>
export default {
    components:{
        listBlock:()=>import('@/components/block/listBlock')
    },
    computed:{
        drink(){
            return this.$store.getters['drink']
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