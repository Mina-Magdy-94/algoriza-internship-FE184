<template>
    <section class="w-full mb-[40px] bg-[#F4F4F4]">
        <!-- todo change anchor tag to router-link -->
        <!-- tabs -->
        <div
            class="background: linear-gradient(180deg, rgba(244, 244, 244, 0.00) 0%, #FFF 100%); text-[16px] font-normal leading-normal tracking-[0.32px] text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-[40px]">
            <ul class="flex flex-wrap -mb-px">
                <li class="me-2">
                    <a href="#"
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Overview</a>
                </li>
                <li class="me-2">
                    <a href="#"
                        class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                        aria-current="page">Rooms</a>
                </li>
            </ul>
        </div>
        <!-- overview section -->
        <div class="flex justify-between w-full h-[636px] bg-[#F4F4F4] rounded-md">
            <!-- left side -->
            <div class="w-[810px] h-full bg-[#F4F4F4] flex flex-col justify-between  rounded-md">
                <!-- title and review and location -->
                <div class="w-full h-[97px]  flex flex-col justify-between bg-[#F4F4F4] rounded-md">
                    <h1 class="h-[32px] text-[#1A1A1A] text-[32px] font-semibold p-0 m-0 flex flex-col justify-center">
                        {{hotelDetails?.hotel_name}}</h1>

                    <div class="flex flex-nowrap flex-start h-[20px]">
                        <figure v-for="num in randomReviewStarsIfNotFoundInApi">
                            <img src="../../assets/icons/star.svg" alt="star">
                        </figure>
                        <p
                            class="w-full h-[20px] text-[#4f4f4f] text-[14px] leading-[19.6px] tracking-[0.28px] font-normal ">
                            {{randomReviewStarsIfNotFoundInApi}}({{hotelDetails?.review_nr}} Reviews)</p>
                    </div>

                    <div class="flex justify-start h-[21px]">
                        <figure>
                            <img src="../../assets/icons/locationIcon.svg" alt="location icon" title="location">
                        </figure>
                        <p class="text-[#333] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                            {{hotelDetails?.address}}
                        </p>
                    </div>
                </div>

                <div class="w-full h-fit max-h-[508px] rounded-md bg-[#FFF] ">
                    <div class="w-[740px] h-[239px] pt-[24px] ml-[30px]  mb-[44px]">
                        <h3
                            class="h-[21px] text-[#181818] text-[18px] font-medium leading-normal tracking-[0.18px] mb-[20px]">
                            OverView
                        </h3>
                        <p class="text-[#4F4F4F] text-[16px] font-normal leading-[22.4px] tracking-[0.32px] overflow-auto">
                            {{ description || 'No Description Provided by the api this is a default string' }}
                        </p>
                    </div>
                    <hr class="stroke-[#E0E0E0] stroke-[1px]">
                    <!-- conditional rendering -->
                    <div class="ml-[30px] mt-[26px] mb-[41px] w-[740px] h-[134px] flex flex-col justify-between">
                        <h3
                            class="h-[21px] text-[#181818] text-[18px] leading-normal font-medium traccking-[0.18px] flex flex-col justify-center">
                            Top facilities
                        </h3>
                        <div class="h-[89px]">
                            <ul class="h-full flex flex-col items-start flex-wrap overflow-auto">
                                <li class="flex justify-start items-center w-fit h-[12px] py-[8px] mb-[13px]"
                                    v-for="facility in facilities">
                                    <img src="../../assets/icons/home-wifi.svg" :alt="facility.icon" :title="facility.icon" class="mr-[12px]">
                                    <p>{{ facility?.name  || 'No Facilities found'}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- right side -->
            <div class="w-[400px] h-fit max-h-full bg-[#F4F4F4] rounded-md">

                <iframe :src="`//maps.google.com/maps?q=${latitude},${longtude}&z=15&output=embed`"
                    frameborder="0" class="w-[400px] h-[240px] mb-[35px] rounded-md" allowfullscreen></iframe>
                <ul class="w-full h-fit max-h-full flex flex-col justify-between">
                    <li
                        class="w-full h-auto mb-[12px] flex justify-between items-center text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                        <div class="w-fit flex flex-nowrap max-w-[60%] justify-start">
                            <img src="../../assets/icons/bxs-plane-alt 2.svg" alt="plane">
                            <p>Hotel Penselvenyia</p>
                        </div>
                        <p class="w-fit max-w-[37%]">2 min drive</p>
                    </li>
                    <li
                        class="w-full h-auto mb-[12px] flex justify-between items-center text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                        <div class="w-fit flex flex-nowrap max-w-[60%] justify-start">
                            <img src="../../assets/icons/bxs-plane-alt 2.svg" alt="plane">
                            <p>Travis Bakery store house</p>
                        </div>
                        <p class="w-fit max-w-[37%]">10 min drive</p>
                    </li>
                    <li
                        class="w-full h-auto mb-[12px] flex justify-between items-center text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                        <div class="w-fit flex flex-nowrap max-w-[60%] justify-start">
                            <img src="../../assets/icons/bxs-plane-alt 2.svg" alt="plane">
                            <p>Olivia Johnson Garden</p>
                        </div>
                        <p class="w-fit max-w-[37%]">15 min drive</p>
                    </li>
                    <li
                        class="w-full h-auto mb-[12px] flex justify-between items-center text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                        <div class="w-fit flex flex-nowrap max-w-[60%] justify-start">
                            <img src="../../assets/icons/bxs-plane-alt 2.svg" alt="plane">
                            <p>Norman Opera Circus</p>
                        </div>
                        <p class="w-fit max-w-[37%]">18 min drive</p>
                    </li>
                    <li
                        class="w-full h-auto mb-[12px] flex justify-between items-center text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                        <div class="w-fit flex flex-nowrap max-w-[60%] justify-start">
                            <img src="../../assets/icons/bxs-plane-alt 2.svg" alt="plane">
                            <p>Rockdeset hotel</p>
                        </div>
                        <p class="w-fit max-w-[37%]">32 min drive</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted,ref } from 'vue';

let props=defineProps({
    hotelDetails:Object,
    hotelDescriptions:Array
})

let randomReviewStarsIfNotFoundInApi=ref()

let facilities=ref([])
let latitude=ref()
let longtude=ref()
let description=ref()

onMounted(()=>{
    facilities.value=props.hotelDetails.facilities_block.facilities || 1
    latitude.value=props.hotelDetails.latitude
    longtude.value=props.hotelDetails.longitude
    description.value=props.hotelDescriptions[0].description
    randomReviewStarsIfNotFoundInApi.value=Math.floor(Math.random() * (5 - 1 + 1)) + 1
})

</script>
