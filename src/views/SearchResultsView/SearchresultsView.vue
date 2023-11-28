<template>
    <BaseSearch class="mt-[-40px]"  />
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
import { computed, onMounted, ref, watch } from 'vue';
import { useAppStore } from '@/store/store';
import * as searchApis from '../../apis/searchApis'
import {getSearchParametersFromLocalStorage} from '../../helpers/utils'
// import {getDataAndSaveData} from '../../helpers/getAndSaveDataInLocalStorage'


let appStore = useAppStore()
let isDataUpdated=ref(false)
let setDataUpdatedToTrue=()=>isDataUpdated.value =true



let hotelsFromApiRequests = ref([])
let hotelsMetaData = ref([])


// let {dataToRetrieve,getAndSave}=getDataAndSaveData()


let checkHotelsInLocalStorage = () => {
    if (localStorage.getItem('hotelsData')) {
        return true
    } else {
        return false
    }
}


let getHotelsDataFromLocalStorage = () => {
    let stringifiedHotelsData = localStorage.getItem('hotelsData')
    let parsedHotelsData = JSON.parse(stringifiedHotelsData)
    return parsedHotelsData
}


let setHotelsDataAndSaveInLocalStorage=async()=>{
    let parsedSearchParams=getSearchParametersFromLocalStorage()
    let response = await searchApis.searchHotels(parsedSearchParams)
        let hotelsData = response.data.data

        hotelsFromApiRequests.value = hotelsData.hotels
        hotelsMetaData.value = hotelsData.meta
        let hotelsDataToSetInLocalStorage = JSON.stringify(hotelsData)
        localStorage.setItem('hotelsData', hotelsDataToSetInLocalStorage)
}



let renderHotelsData=()=>{
    let isHotelsDataInLocalStorage = checkHotelsInLocalStorage()
    if (!isHotelsDataInLocalStorage) {
        setHotelsDataAndSaveInLocalStorage()
    } else {
        let hotelsDataFromLocalStorage=getHotelsDataFromLocalStorage()
        hotelsFromApiRequests.value =hotelsDataFromLocalStorage.hotels
        hotelsMetaData.value =hotelsDataFromLocalStorage.meta
}
}


onMounted(() => {

    setHotelsDataAndSaveInLocalStorage()


    // getAndSave('hotelsData',searchApis.searchHotels,parsedSearchParams)


    // console.log(dataToRetrieve.meta)
})

watch(isDataUpdated,()=>{
    if(isDataUpdated.value=true){

        renderHotelsData()


        isDataUpdated.value=false
    }
})

</script>
