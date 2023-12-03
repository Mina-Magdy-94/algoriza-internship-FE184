<template>
    <BaseSearch class="mt-[-40px]" :function-to-set-hotels-data="setHotelsData" />
    <section class="mt-[62px] mb-[96px] w-full flex flex-nowrap justify-between" v-if="hotelsToShow && !loading">
        <SearchResultsViewAside :set-data-updated-to-true="setDataUpdatedToTrue" :hotels-to-show="hotelsToShow"
            :set-client-side-filters="setClientSideFilters" />
        <SearchResultsViewMain :hotels-to-show="hotelsToShow" :hotels-meta-data="hotelsMetaData" :loading="loading"
            :set-data-updated-to-true="setDataUpdatedToTrue"  :set-client-side-filters="setClientSideFilters" />
    </section>
    <h2 v-if="error">{{ error }}</h2>
    <BaseSpinner v-if="loading" />
    <CovidAlert class="w-full" />
</template>

<script setup>
import BaseSearch from '@/components/SeachForm.vue/BaseSearch.vue';
import SearchResultsViewAside from './SearchResultsViewAside/SearchResultsViewAside.vue';
import SearchResultsViewMain from './SearchResultsViewMain/SearchResultsViewMain.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';
import { onMounted, ref, watch, watchEffect } from 'vue';
import * as searchApis from '../../apis/searchApis'
import { getDataFromLocalStorage, checkInLocalStorage, setDataInLocalStorage } from '../../helpers/utils'
import BaseSpinner from '@/components/UI/BaseSpinner.vue';


let isDataUpdated = ref(false)
let setDataUpdatedToTrue = () => isDataUpdated.value = true

let error = ref()
let loading = ref(false)
let hotelsFromApiRequests = ref([])
let hotelsMetaData = ref([])
let hotelsToShow = ref([])
let setClientSideFilters = (clientSideFilters = { rating: 0, name: "" }) => {
    let hasClientSideFilterInLocalStorage = checkInLocalStorage('clientFilter')
    if (hasClientSideFilterInLocalStorage) {
        let clientSideFiltersinLocalStorage = getDataFromLocalStorage('clientFilter')
        let newClintSideFilter = { ...clientSideFiltersinLocalStorage, ...clientSideFilters }
        setDataInLocalStorage('clientFilter', newClintSideFilter)
        if (newClintSideFilter.rating && newClintSideFilter.name) {
            hotelsToShow.value = hotelsFromApiRequests.value.filter(hotel => {
                return hotel.property.name.toLowerCase().includes(newClintSideFilter.name.toLowerCase()) && Math.round(hotel.property.reviewScore / 2) >= newClintSideFilter.rating
            })
        }
        else if (newClintSideFilter.rating) {
            hotelsToShow.value = hotelsFromApiRequests.value.filter(hotel => {
                return Math.round(hotel.property.reviewScore / 2) >= newClintSideFilter.rating
            })
        }
        
        else {
            hotelsToShow.value = hotelsFromApiRequests.value.filter(hotel => {
                return hotel.property.name.toLowerCase().includes(newClintSideFilter.name.toLowerCase())
            })
        }
    } else {
        setDataInLocalStorage('clientFilter', clientSideFilters)
        setClientSideFilters(clientSideFilters)
    }
}

let setHotelsData = async () => {
    loading.value = true
    let parsedSearchParams = getDataFromLocalStorage('searchParameters')
    try {
        let response = await searchApis.searchHotels(parsedSearchParams)
        let hotelsData = response.data.data
        hotelsFromApiRequests.value = hotelsData.hotels
        hotelsMetaData.value = hotelsData.meta
        hotelsToShow.value = [...hotelsFromApiRequests.value]
        error.value = null
    } catch (error) {
        error.value = error
    } finally {
        loading.value = false
    }
}


onMounted(async () => {
    setHotelsData()
})

watch(isDataUpdated, () => {
    if (isDataUpdated.value === true) {
        setHotelsData()
        isDataUpdated.value = false
    }
})

</script>