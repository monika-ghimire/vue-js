
<template>
<p>Hi{{name}}</p>
<div class="box1right"> <Box1 />
<Box2  /></div>



</template>

<script>
import Box1 from './Box1.vue'
import Box2 from './Box2.vue'

export default{
    components:{
        Box1,
        Box2
    }
    ,data:()=>({
        name:"Monika"
    })
}
</script>

<style scoped>
.box1right
{
    display: flex;
}
</style>
