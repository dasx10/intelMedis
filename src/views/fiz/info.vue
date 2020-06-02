<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/fiz" class="router-link-active">Физиотерапия</router-link>
                </li>
                <li aria-current="page" class="breadcrumb-item active">Подробно</li>
            </ol>
        </nav>
        <h2 class="text-center">Физиотерапия</h2>
        <list-block v-for='(d,i) in fiz' :key="i" :i='i+1'>{{d}}</list-block>
    </div>
</template>
<script>
export default {
    components:{
        listBlock:()=>import('@/components/block/listBlock')
    },
    computed:{
        fiz(){
            return this.$store.getters['fiz']
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