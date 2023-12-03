<template>
    <h1
        class="flex flex-col justify-center h-[32px] text-[#1A1A1A] text-[32px] font-semibold leading-normal tracking-[0.32px]">
        Secure your reservation</h1>
    <CovidAlert class="my-[30px]" />

    <section class="flex justify-between mt-[-20px] pb-[141px]">
        <!-- left side -->
        <CheckOutViewLeftSide :open-modal="openModal" />
        <!-- right side -->
        <div class="w-[400px] rounded-md">
            <BaseCard :photo-to-display="firstPhoto">
                <div class="h-[220px] p-[20px] bg-[#FFF] rounded-b-md">
                    <h3 class="h-[21px] mb-[18px] text-[#181818] text-[18px] leading-normal tracking-[0.18px]">
                        {{hotel && hotel.hotel_name}}
                    </h3>
                    <div class="flex justify-start items-center mb-[25px]">
                        <img src="../../assets/icons/star.svg" alt="star(s)" v-for="star in 4" :key="star">
                        <p class="text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">4 (1200 Reviews)</p>
                    </div>
                    <div
                        class="flex flex-col justify-between h-[104px] text-[14px] font-normal leading-[20px] tracking-[0.14px]">
                        <p class="h-[20px] text-[#EB5757]">Non refundable</p>
                        <p class="h-[20px]">Check in: Sunday, March 18, 2022</p>
                        <p class="h-[20px]">Check out: Tuesday, March 20, 2022</p>
                        <p class="h-[20px]">{{hotel && name_with_count || '2 night stay'}}</p>
                    </div>
                </div>
            </BaseCard>
            <CheckOutViewCard title="Price Details" styling-of-title="bg-[#85E0AB] text-[#181818]"
                styling-of-slot-root="p-[0px] h-fit" class="mt-[30px]">
                <div
                    class="px-[18px] pt-[23px] pb-[20px] flex flex-col justify-between h-[95px] text-[14px] font-normal leading-[20px] tracking-[0.14px] border-b-[1px] border-solid border-[#E0E0E0]">
                    <div class="flex justify-between items-center">
                        <span>1 room X 2 nights</span>
                        <span>$ 120.32</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span>Tax and service fees</span>
                        <span>$ 8.32</span>
                    </div>
                </div>
                <div
                    class="px-[18px] pt-[25px] pb-[23px] flex justify-between text-[#333] text-[20px] font-semibold leading-normal trackin-[0.2px]">
                    <span>Total</span><span>$130</span>
                </div>
            </CheckOutViewCard>
        </div>
    </section>
    <BaseModal v-if="isModalOpen" :btn-function="btnFunction" title="Booking Successful"
        content="Congratulations your reservation has been made. You will be notified 2 days prior the date."
        button="View Trip">
        <CheckOutModalPicture />
    </BaseModal>
</template>


<script setup>
import CovidAlert from '@/components/UI/CovidAlert.vue';
import CheckOutViewLeftSide from './CheckOutViewLeftSide.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import CheckOutViewCard from './CheckOutViewCard.vue';
import BaseModal from '@/components/UI/BaseModal.vue';
import { ref, computed, onMounted } from 'vue';
import CheckOutModalPicture from './CheckOutModalPicture.vue';
import { useAppStore } from '@/store/store';
import { useRouter ,useRoute} from 'vue-router';
import { checkInLocalStorage, getDataFromLocalStorage, setDataInLocalStorage } from '@/helpers/utils';
import * as searchApis from '@/apis/searchApis';


let isModalOpen = ref(false)
let router = useRouter()
let route = useRoute()

let openModal = () => isModalOpen.value = true

let btnFunction = () =>{
let isTripsInLocalStorage=checkInLocalStorage('trips')
if(isTripsInLocalStorage){
    let localStroageTrips=getDataFromLocalStorage('trips')

    let isTripRepeated=localStroageTrips.some(t=>{
        return t.hotel_id===parseInt(hotel_id)
    })
    
    if(!isTripRepeated){
        let updatedTrips=[...localStroageTrips,hotel.value]
        setDataInLocalStorage('trips',updatedTrips)
    }

}else{
    let trips=[hotel.value]
    setDataInLocalStorage('trips',trips)
}

    router.push({name:'mytrips'})
}


let hotel_id=route.params.id
let hotel = ref()
let rooms = ref()
let photos = ref()
let firstPhoto = ref()


let bedTypes=ref()
let name_with_count=ref()


onMounted(async() => {
    let searchParams=getDataFromLocalStorage('searchParameters')
    let {arrival_date,departure_date}=searchParams
    let response=await searchApis.getHotelDetails({hotel_id,arrival_date,departure_date})
    hotel.value=response.data.data
    rooms.value=hotel.value.rooms
    let firstKeyOfRoomObject = Object.values(rooms.value)[0]
    photos.value=firstKeyOfRoomObject.photos
    firstPhoto.value=photos.value[0].url_max1280


    bedTypes.value=firstKeyOfRoomObject.bed_configurations[0].bed_types[0]
    name_with_count.value=bedTypes.value.name_with_count
})


</script>
<style></style>