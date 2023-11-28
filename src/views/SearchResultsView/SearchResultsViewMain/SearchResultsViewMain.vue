<template>
    <section class="w-[915px] h-fit flex flex-col justify-between ">
        <!-- Head of SearchResultsViewMain -->
        <div class="flex justify-between flex-nowrap mb-[24px]">
            <!-- hotelsFromApiRequests[0].property.wishlistName -->
            <!-- hotelsMetaData[0].title -->
            <h2 class=" w-[504p] h-[32px] font-semibold text-[24px] leading-normal text-[#181818]">{{hotelsFromApiRequests[0] && hotelsFromApiRequests[0].property.wishlistName}} : {{hotelsMetaData[0] && hotelsMetaData[0].title}}
                search results
                found</h2>
                <SearchResultsViewMainSortBy :set-data-updated-to-true="setDataUpdatedToTrue"/>
        </div>
        <!-- The container of all search results hotels list -->
        <HotelsList :hotels-from-api-requests="props.hotelsFromApiRequests" />
        <!-- :hotels-from-api-requests="hotelsFromApiRequests" -->
        <Pagination :currentPage="2" :totalPages="5" />
    </section>
</template>

<script setup>

import { onMounted,ref } from 'vue';
import HotelsList from './HotelsList.vue';
import Pagination from './Pagination.vue';
import SearchResultsViewMainSortBy from './SearchResultsViewMainSortBy.vue';

let props=defineProps({
    hotelsFromApiRequests:Array,
    hotelsMetaData:Array,
    setDataUpdatedToTrue:Function
})


// onMounted(()=>console.log(props.hotelsFromApiRequests))


</script>
