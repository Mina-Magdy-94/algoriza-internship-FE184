<template>
    <div class="rounded-md w-[190px] py-2 px-3 border-[1px] border-solid border-[#DBDBDB]  h-fit ">
        <div class="flex flex-col justify-start gap-[2px] w-full rounded-md ">
            <span
                class="text-[#828282] text-[12px] font-medium leading-3 tracking-[0.24px] min-w-[32px] min-h-[12px] rounded-t-md ">Sort
                by</span>
            <select name="sorting" id="sorting" @change="handleSortChange"
                class="text-[#333] text-[14px] font-normal leading-normal tracking-[0.28px] border-none  outline-none">
                <option :value="'default option'" @click="(e) => console.log(e.target.value)" disabled selected hidden>
                    {{ dataToRetrieve.length && dataToRetrieve[0].title }}</option>
                <option v-for="option in dataToRetrieve" :value="option.id" @click="(e) => console.log(e.target.value)">
                    {{ option.title }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import * as searchApis from '../../../apis/searchApis'
import { useAppStore } from '../../../store/store'
import { getDataAndSaveData } from '../../../helpers/getAndSaveDataInLocalStorage'
import { ref, onMounted } from 'vue'



let props=defineProps(({
    setDataUpdatedToTrue:Function
}))

let store = useAppStore()
// let sortOptions = ref([])
// const getSortOptions = () => {
//     if (!localStorage.getItem('sortOptions')) {
//         console.log(store.lastSavedSearch)
//         searchApis.getSortOptions({...store.lastSavedSearch,search_type: 'CITY'}).then(res => {
//             const sortOptionsArray = res.data.data
//             console.log(sortOptionsArray)
//             // const filteredCities = citiesArray.filter((city) => city.search_type === 'city')
//             sortOptions.value = sortOptionsArray
//             let storedSearchOptions = JSON.stringify(sortOptionsArray)
//             localStorage.setItem('sortOptions', storedSearchOptions)
//         })
//     }else {
//         let StringifiedSortOptions = localStorage.getItem('sortOptions')
//         let parsedSortOptions = JSON.parse(StringifiedSortOptions)
//         sortOptions.value = parsedSortOptions
//     }
// }


const { dataToRetrieve, getAndSave } = getDataAndSaveData()

onMounted(() => getAndSave('sortOptions', searchApis.getSortOptions, { ...store.lastSavedSearch, search_type: 'CITY' }))

let handleSortChange = async (e) => {
    let sortBy = e.target.value
    let stringifiedSearchParam = localStorage.getItem('searchParameters')
    let parsedSearchParameters = JSON.parse(stringifiedSearchParam)
    let newSearchParameters = { ...parsedSearchParameters, sort_by: sortBy }
    localStorage.setItem('searchParameters', JSON.stringify(newSearchParameters))
    console.log({newSearchParameters})
    const response = await searchApis.searchHotels(newSearchParameters)
    const hotelsData = response.data.data
    console.log({ hotelsData })
    const stringifiedhotelsData = JSON.stringify(hotelsData)
    localStorage.setItem('hotelsData', stringifiedhotelsData)
    props.setDataUpdatedToTrue()
}


</script>
