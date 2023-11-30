<template>
    <BaseSearch class="mt-[-40px]" />
    <section class="mt-[62px] mb-[96px] w-full flex flex-nowrap justify-between">
        <SearchResultsViewAside :set-data-updated-to-true="setDataUpdatedToTrue"/>
        <SearchResultsViewMain :hotels-from-api-requests="hotelsFromApiRequests" :hotels-meta-data="hotelsMetaData" :set-data-updated-to-true="setDataUpdatedToTrue"/>
    </section>
    <CovidAlert class="w-full" />
</template>

<script setup>
import BaseSearch from '@/components/SeachForm.vue/BaseSearch.vue';
import SearchResultsViewAside from './SearchResultsViewAside/SearchResultsViewAside.vue';
import SearchResultsViewMain from './SearchResultsViewMain/SearchResultsViewMain.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';
import { onMounted, ref, watch, watchEffect } from 'vue';
import * as searchApis from '../../apis/searchApis'
import {getDataFromLocalStorage,checkInLocalStorage} from '../../helpers/utils'


let isDataUpdated=ref(false)
let setDataUpdatedToTrue=()=>isDataUpdated.value =true


let hotelsFromApiRequests = ref([])
let hotelsMetaData = ref([])



let setHotelsDataAndSaveInLocalStorage=async()=>{
    let parsedSearchParams=getDataFromLocalStorage('searchParameters')
    let response = await searchApis.searchHotels(parsedSearchParams)
        let hotelsData = response.data.data
        hotelsFromApiRequests.value = hotelsData.hotels
        hotelsMetaData.value = hotelsData.meta
}


onMounted(async() => {
    setHotelsDataAndSaveInLocalStorage()
})

watch(isDataUpdated,()=>{
    if(isDataUpdated.value===true){
        setHotelsDataAndSaveInLocalStorage()
        isDataUpdated.value=false
    }
})


// let renderHotelsData=()=>{
//     let isHotelsDataInLocalStorage = checkInLocalStorage('hotelsData')
//     if (!isHotelsDataInLocalStorage) {
//         setHotelsDataAndSaveInLocalStorage()
//     } else {
//         let hotelsDataFromLocalStorage=getDataFromLocalStorage('hotelsData')
//         hotelsFromApiRequests.value =hotelsDataFromLocalStorage.hotels
//         hotelsMetaData.value =hotelsDataFromLocalStorage.meta
// }
// }
</script>
