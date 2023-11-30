<template>
    <template v-if="hotelDetails">
        <!-- hotel details top -->
        <HotelDetailsViewTopImages :hotel-details="hotelDetails" />
        <!-- description section -->
            <HotelDetailsViewOverview v-if="hotelDescriptions" :hotel-details="hotelDetails" :hotel-descriptions="hotelDescriptions" />
        <!-- available rooms section -->
        <HotelDetailsViewAvailableRooms :hotel-details="hotelDetails" />
        <CovidAlert />
    </template>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HotelDetailsViewAvailableRooms from './HotelDetailsViewAvailableRooms.vue';
import HotelDetailsViewTopImages from './HotelDetailsViewTopImages.vue';
import HotelDetailsViewOverview from './HotelDetailsViewOverview.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';
import { useRoute } from 'vue-router';
import { getDataFromLocalStorage } from '../../helpers/utils'
import * as searchApis from '../../apis/searchApis'

let hotel_id = ref()
let hotelDetails = ref(null)
let hotelDescriptions = ref(null)
let route = useRoute()


let getDescriptionAndInfo = async() => {
    let response = await searchApis.getDescriptionAndInfo({hotel_id:hotel_id.value})
    hotelDescriptions.value =response.data.data
}

let getHotelDetails = async () => {
    hotel_id.value = route.params.id
    let searchParams = getDataFromLocalStorage('searchParameters')
    let { arrival_date, departure_date, room_qty, adults } = searchParams
    if (room_qty && adults) {
        let requestParams = { arrival_date, departure_date, room_qty, adults, hotel_id: hotel_id.value }
        let response = await searchApis.getHotelDetails(requestParams)
        hotelDetails.value = response.data.data
    } else {
        let response = await searchApis.getHotelDetails({ hotel_id: hotel_id.value, arrival_date, departure_date })
        hotelDetails.value = response.data.data
    }
    getDescriptionAndInfo()
    // let responseTwo = await searchApis.getDescriptionAndInfo({hotel_id:hotel_id.value})
    // hotelDescriptions.value =responseTwo.data.data
}

onMounted(() => {
    getHotelDetails()
})

</script>
