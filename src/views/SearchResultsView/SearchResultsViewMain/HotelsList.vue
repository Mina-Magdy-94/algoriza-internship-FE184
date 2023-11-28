<template>
    <div class="w-full h-fit flex flex-col gap-6 p-0" v-if="props.hotelsFromApiRequests.length">
            <HotelsListItem v-for="hotel in props.hotelsFromApiRequests.slice(0, 8)" :hotel="hotel" />
    </div>
    <h3 v-else class="text-xl text-red-500 font-semibold text-center ">Sorry,No Hotels To Show</h3>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HotelsListItem from './HotelsListItem.vue';

let props = defineProps({
    hotelsFromApiRequests: Array
})

// let hotelsToShow = ref([])

// onMounted(() => {
//     console.log(props.hotelsFromApiRequests)
//     hotelsToShow.value = props.hotelsFromApiRequests.slice(0, 8)
//     console.log(hotelsToShow.value[0])
// })

// console.log(props)

</script>
