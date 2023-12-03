<template>
    <TheNavigation :isRenderHeaderLogoOnly="route.name==='signin'" />
    <main :class="` min-h-screen box-border h-fit ${stylingOfMainSection}`">
        <RouterView />
    </main>
    <TheFooter v-if="!['signin','checkout'].includes(route.name)" :class="`${stylingOfFooter}`" />
</template>

<script setup>
import { computed, onMounted, ref} from 'vue';
import TheFooter from './TheFooter.vue';
import TheNavigation from './TheNavigation.vue';
import { useRoute } from 'vue-router';

let route = useRoute()

let stylingOfMainSection=computed(()=>{
    // ['home','signin','searchResults'].includes(route.name)
    // route.name==='home' || route.name==='signin' || route.name==='searchResults'
    if(['home','signin','searchResults'].includes(route.name)){
        return 'bg-[#FFF] lg:px-[100px] my-[12px]'
    }else if(route.name==='checkout'){
        return 'bg-[#F4F4F4] mt-[0px] pt-[60px] lg:px-[100px] mb-[12px]'
    }else if(route.name==='mytrips'){
        return 'bg-[#F4F4F4] my-[0px] pt-[60px] px-[205px]'
    }
    return 'bg-[#F4F4F4] py-[12px] my-0 lg:px-[100px]'
})
let stylingOfFooter=computed(()=>{
    if(route.name==='home' || route.name==='signin' || route.name==='searchResults'){
        return 'bg-[#FFF]'
    }
    return 'bg-[#F4F4F4]'
})

</script>
