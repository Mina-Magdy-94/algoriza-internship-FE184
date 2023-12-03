<template>
    <RouterView />
</template>

<script setup>
import { onMounted,watch } from 'vue';
import { useRouter } from 'vue-router';
import {isAuthorized} from'./store/auth'
import { checkTokenValidity } from './helpers/utils';

let router=useRouter()
onMounted(()=>{
    isAuthorized.value=checkTokenValidity()
})

watch(isAuthorized,((newValue)=>{
    console.log(newValue)
    if(!newValue){
        router.push({name:"signin"})
    }
}))


</script>