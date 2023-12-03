<template>
    <template v-if="trips">
        <h1 class="text-[#1A1A1A] text-[32px] font-semibold leading-normal tracking-[0.32px] h-[32px] mb-[28px]">My trips
        </h1>
        <ul v-for="trip in trips" :key="trip.hotel_id">
            <!-- h-[240px] -->
            <li
                class=" p-[20px] pr-[24px] rounded-[5px] bg-[#FFFFFF] border-[1px] border-solid border-[#E0E0E0] flex justify-between items-center mb-[24px]">
                <!-- left side -->
                <figure class="rounded-[5px] mr-[24px]" v-for="room in trip.rooms" :key="room.description">
                    <img :src="room.photos[0].url_max750" alt="" class="w-[285px] h-[200px] rounded-[5px]">
                </figure>
                <!-- right side -->
                <div class="w-[677px]">
                    <!-- first row -->
                    <h2 class="w-[380px] h-[32px] text-[20px] font-medium leading-normal tracking-[0.2px] mb-[7px] overflow-hidden"
                        :title="trip.hotel_name">Lakeside
                        {{ trip.hotel_name }}
                    </h2>
                    <!-- second row -->
                    <div class="flex flex-nowrap flex-start mb-[30px]">
                        <figure v-for="num in 4" :key="num">
                            <img src="../../assets/icons/star.svg" alt="">
                        </figure>
                        <p
                            class="w-[123px] h-[20px] text-[#4f4f4f] text-[14px] leading-[19.6px] tracking-[0.28px] font-normal ">
                            4 ({{ trip.review_nr }} Reviews)</p>
                    </div>
                    <!-- third row -->
                    <div class="flex justify-between">
                        <ul
                            class=" w-fit max-w-[40%]  text-[#4F4F4F] text-[14px] font-normal leading-[20px] tracking-[0.14px]">
                            <li class="h-[20px] mb-[8px] text-[#EB5757] ">Non refundable</li>
                            <li class="h-[20px] mb-[8px]">Check in: Sunday, {{ monthes[trip.arrival_date.split("-")[1]] }}
                                {{ trip.arrival_date.split("-").reverse().filter((d, i) => i !== 0).join() }}</li>
                            <li class="h-[20px] mb-[8px]">Check out: Tuesday, {{ monthes[trip.departure_date.split("-")[1]]
                            }} {{ trip.departure_date.split("-").reverse().filter((d, i) => i !== 0).join() }}</li>
                            <li class="h-[20px]">{{ Math.round((new Date(trip.departure_date) - new
                                Date(trip.arrival_date)) / (1000 * 60 * 60 * 24)) }} night stay</li>
                        </ul>
                        <div class="w-fit max-w-[40%]">
                            <div class="flex justify-end items-center mb-[6px]">
                                <span
                                    class="mr-[8px] text-[#EB5757] text-[14px] font-medium leading-normal tracking-[0.14px] line-through">${{
                                        Math.round(trip.composite_price_breakdown.gross_amount.value +
                                            trip.composite_price_breakdown.excluded_amount.value) }}</span>
                                <span class="text-[#333] text-[20px] font-medium leading-normal tracking-[0.2px]">${{
                                    Math.round(trip.composite_price_breakdown.gross_amount.value) }}</span>
                            </div>
                            <p
                                class="text-[#333] text-[14px] font-light leading-normal tracking-[0.28px] mb-[16px] text-right">
                                Includes
                                taxes and fees</p>
                            <BaseButton button-text="View trip details" class="px-[18px] py-[10px]"
                                @click="router.push({ name: 'hotelDetails', params: { id: trip.hotel_id, rating: 4 } })" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <CovidAlert class="" />
    </template>
    <h1 v-else class="text-[22px] text-red-400 font-bold text-center">No Trips To Show</h1>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';
import { getDataFromLocalStorage } from '@/helpers/utils';
import { useRouter } from 'vue-router';


let trips = getDataFromLocalStorage('trips')
let router = useRouter()

let monthes = {
    '1': "January",
    '2': "February",
    "3": "March",
    '4': "April",
    '5': "May",
    "6": "June",
    '7': "July",
    '8': "August",
    "9": "September",
    '10': "Cotober",
    '11': "November",
    "12": "December",
}
</script>
<!-- :imgSrc="imgSrc" :hotelName="hotelName" :strikethroughPrice="strikethroughPrice"
                    :grossPrice="grossPrice" :benefitBadge="benefitBadge" :reviewScore="reviewScore"
                    :reviewCount="reviewCount" -->