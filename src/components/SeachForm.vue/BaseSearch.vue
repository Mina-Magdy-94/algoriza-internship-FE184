<template>
    <div class="flex flex-col justify-center bg-white rounded-lg  min-h-[64px] max-h-[90px] box-border p-2 shadow">
        <form class="z-1 text-[#4f4f4f]  flex  justify-evenly items-center text-[13px] leading-5 "
            @submit.prevent="search()">
            <SearchFormSelectInput v-model="filters.dest_id" />
            <SearchFormDatePickerInput placeholder="Check in date" :min-date="tomorrowDate" v-model="filters.arrival_date"
                :max-date="maxCheckInDate" />
            <SearchFormDatePickerInput placeholder="Check out date" :min-date="minimumCheckOutDate"
                v-model="filters.departure_date" />
            <SearchFormTextInput src="userIcon.svg" placeholder="Guests" v-model="filters.adults" />
            <SearchFormTextInput src="roomsIcon.svg" placeholder="Rooms" v-model="filters.room_qty" />
            <BaseButton button-text="Search" class="w-[134px]" />
        </form>
        <p v-if="error" class="text-sm text-center text-red-400">{{ error }}</p>
    </div>
</template>

<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, computed, onMounted } from 'vue';
import SearchFormSelectInput from './SearchFormSelectInput';
import SearchFormDatePickerInput from './SearchFormDatePickerInput.vue';
import SearchFormTextInput from './SearchFormTextInput.vue';
import BaseButton from '../UI/BaseButton.vue';
import { useRouter, useRoute } from 'vue-router';
import * as searchApis from '@/apis/searchApis';
import { checkTokenValidity } from '@/helpers/utils';
import { useAppStore } from '../../store/store'
import { checkInLocalStorage, getDataFromLocalStorage, setDataInLocalStorage } from '../../helpers/utils'



let props = defineProps({
    functionToSetHotelsData: Function
})

let today = ref(new Date())
const tomorrowDate = new Date(today.value.getFullYear(), today.value.getMonth(), today.value.getDate() + 1)
const maxCheckInDate = computed(() => {
    if (filters.value.departure_date) {
        return filters.value.departure_date
    } else {
        return undefined
    }
})
let minimumCheckOutDate = computed(() => {
    let arrivalDatePlusOne = filters.value.arrival_date && new Date(filters.value.arrival_date.getFullYear(), filters.value.arrival_date.getMonth(), filters.value.arrival_date.getDate() + 1)
    return arrivalDatePlusOne || tomorrowDate
})


const filters = ref({
    dest_id: null,
    arrival_date: null,
    departure_date: null,
    adults: null,
    room_qty: null,
})

let router = useRouter()
let route = useRoute()
let error = ref(null)



let search = async () => {
    let arrival_date = filters.value.arrival_date && filters.value.arrival_date.toISOString().split("T")[0]
    let departure_date = filters.value.departure_date && filters.value.departure_date.toISOString().split("T")[0]

    let searchParameters = { ...filters.value, arrival_date, departure_date, page_number: '1' }
    setDataInLocalStorage('searchParameters', searchParameters)

    let isValidToken = checkTokenValidity()
    if (![filters.value.dest_id, filters.value.arrival_date, filters.value.departure_date].includes(null)) {
        error.value = null
        if (isValidToken) {
            if (route.name === 'home') {
                router.push({ name: 'searchResults' })
            } else if (route.name === 'searchResults') {
                props.functionToSetHotelsData()
            }
        } else {
            router.push({ name: 'signin' })
        }
    } else {
        console.log('else')
        let allEmptyInputs = Object.keys(filters.value).filter(key => filters.value[key] === null)
        let emptyRequiredInputs = allEmptyInputs.filter(key => !(key === 'adults' || key === 'room_qty'))
        let userFriendlyRequiredInputNames = emptyRequiredInputs.map((k => k === "dest_id" ? "Destination" : k === "arrival_date" ? "Checkin Date" : "Checkout Date"))
        error.value = `${userFriendlyRequiredInputNames.join(",")} ${userFriendlyRequiredInputNames.length === 1 ? 'is' : 'are'} required for search`
    }
}

</script>