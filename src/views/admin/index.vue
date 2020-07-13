<template>
    <div>
        <admin-auth></admin-auth>
    </div>
</template>
<script>
export default {
    components:{
        adminAuth:()=>import('./adminAuth')
    }
}
</script>