<template>
    <TheNavigation :isRenderHeaderLogoOnly="route.name==='signin'" />
    <main :class="`px-[15px] md:px-[30px] lg:px-[100px] my-[12px] min-h-screen box-border h-fit ${stylingOfMainSection}`">
        <RouterView />
    </main>
    <TheFooter v-if="route.name !=='signin'" :class="`${stylingOfFooter}`" />
</template>

<script setup>
import { computed, onMounted, ref} from 'vue';
import TheFooter from './TheFooter.vue';
import TheNavigation from './TheNavigation.vue';
import { useRoute } from 'vue-router';

let route = useRoute()

let stylingOfMainSection=computed(()=>{
    console.log(route.name)
    if(route.name==='home' || route.name==='signin' || route.name==='searchResults'){
        return 'bg-[#FFF]'
    }
    return 'bg-[#F4F4F4] py-[12px] my-0'
})
let stylingOfFooter=computed(()=>{
    console.log(route.name)
    if(route.name==='home' || route.name==='signin' || route.name==='searchResults'){
        return 'bg-[#FFF]'
    }
    return 'bg-[#F4F4F4]'
})

</script>
