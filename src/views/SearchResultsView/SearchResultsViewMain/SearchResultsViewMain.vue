<template>
    <section class="w-[915px] h-fit flex flex-col justify-between ">
        <!-- Head of SearchResultsViewMain -->
        <div class="flex justify-between flex-nowrap mb-[24px]" v-if="hotelsToShow.length">
            <h2 class=" w-[504p] h-[32px] font-semibold text-[24px] leading-normal text-[#181818]">
                {{ hotelsToShow[0] && hotelsToShow[0].property.wishlistName }} : {{ hotelsMetaData[0] &&
                    hotelsMetaData[0].title }}
                search results
                found</h2>
            <SearchResultsViewMainSortBy :set-data-updated-to-true="setDataUpdatedToTrue" />
        </div>
        <!-- The container of all search results hotels list -->
            <HotelsList :hotels-to-show="hotelsToShow" />
            <Pagination :currentPage="currentPage" :set-current-page="setCurrentPage" :totalPages="5"
                :set-data-updated-to-true="setDataUpdatedToTrue" :set-client-side-filters="setClientSideFilters" />
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import HotelsList from './HotelsList.vue';
import Pagination from './Pagination.vue';
import SearchResultsViewMainSortBy from './SearchResultsViewMainSortBy.vue';
import { getDataFromLocalStorage } from '../../../helpers/utils'

let props = defineProps({
    hotelsToShow: Array,
    hotelsMetaData: Array,
    setDataUpdatedToTrue: Function,
    loading: Boolean,
})

let totalPages = ref()
let currentPage = ref()
let setCurrentPage = (pageNumber) => {
    currentPage.value = pageNumber
}


let searchParameters = ref({})



// let getMetaDataFromLocalStorage=()=>{
//     let stringifiedMetaData= localStorage.getItem('hotelsData')
//     let parsedMetaData=JSON.parse(stringifiedMetaData)
//     return parsedMetaData
// }

onMounted(() => {
    searchParameters.value = getDataFromLocalStorage('searchParameters')
    currentPage.value = parseInt(searchParameters.value?.page_number)
    // totalPages.value=meta.length? Math.ceil(parseInt(meta[0].title)/20) :1
    // console.log(totalPages.value)
})


</script>
