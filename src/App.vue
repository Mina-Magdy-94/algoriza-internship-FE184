<template>
    <RouterView />
</template>

<script setup>
import { onMounted,watch } from 'vue';
import { useRouter } from 'vue-router';
import {isAuthorized} from'./store/auth'

let router=useRouter()
onMounted(()=>{

})

watch(isAuthorized,((newValue)=>{
    console.log(newValue)
    if(!newValue){
        router.push({name:"signin"})
    }
}))


</script>