<template>
    <section class="w-full h-fit flex flex-col justify-between mb-[172px]">
        <h3 class="text-[24px] font-semibold leading-normal h-[32px] flex items-center mb-8">Available rooms</h3>
        <div class="flex justify-between w-full h-[432px] items-stretch">
            <div class="w-[400px] h-[340px] bg-gradient-to-b from-[#4796FF] to-[#2366BF] rounded-md relative">
                <div
                    class="absolute top-[72px] left-[28px] w-[195px] h-[176.5px] text-[#FFF]  flex flex-col justify-between">
                    <div class="flex justify-start items-center h-[24px] ">
                        <img src="../../assets//icons/plane.svg" alt="white plane" title="plane"
                            class="w-[24px] h-[24px] mr-[4px]">
                        <h4 class="text-[18px]  font-medium leading-normal tracking-[0.36px]">
                            my Dream Place
                        </h4>
                    </div>
                    <h2 class="h-[126px] text-[24px] font-bold leading-normal p-0 m-0">
                        20% off <br>
                        Use Promotional Coupon Code:
                        <span class="#FFD723">Orlando</span>
                    </h2>
                </div>
                <img src="../../assets/images/Frameperson.svg" alt="travelling tourist" class="absolute z-10 top-[35px] right-[50px]">
            </div>

            <BaseCard v-for="photo in photosToShow" :photo-to-display="photo">
                <div class="w-full h-[223px] bg-[#FFF] rounded-b-md p-[20px] pb-[24px]">
                    <h3
                        class="h-[22px] flex flex-col justify-center text-[#1A1A1A] text-[18px] font-medium leading-normal tracking-[0.18px] mb-[18px]">
                        {{name_with_count || 'ordinary bed'}}
                    </h3>
                    <div class="flex flex-col justify-between h-[80px] mb-[24px] overflow-auto">
                        <div class="h-[20px] w-fit max-w-full flex justify-start items-center mb-[3px]" v-for="roomFacility in roomFacilities">
                            <img src="../../assets/icons/bag-tick.svg" alt="bag" class="mr-[10px]">
                            <p class="text-[14px] font-normal leading-[19.6px] tracking-[0.28]">{{ roomFacility.name }}</p>
                        </div>
                    </div>
                    <BaseButton button-text="Reserve suite" @click="router.push({name:'checkout'})"
                        class="w-full py-[12px] px-[18px] text-[15px] leading-[20px] tracking-[0.3px]" />
                </div>
            </BaseCard>
        </div>
    </section>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseCard from '../../components/UI/BaseCard.vue'

import { computed } from 'vue'
import { useRouter } from 'vue-router';
let props = defineProps({
    hotelDetails: Object
})

let router=useRouter()

let rooms=computed(()=>{
    return props.hotelDetails.rooms
})

let photos = computed(() => {
    let firstKeyOfRoomObject = Object.values(rooms.value)[0]
    return firstKeyOfRoomObject.photos
})

let firstPhoto = computed(() => {
    return photos.value[0].url_max1280
})
let secondPhoto = computed(() => {
    return photos.value[1].url_max750
})

let photosToShow=computed(()=>[firstPhoto.value,secondPhoto.value])

let roomFacilities=computed(()=>{
    let firstKeyOfRoomObject = Object.values(rooms.value)[0]
    return firstKeyOfRoomObject.facilities
})


let bedTypes=computed(()=>{
    if(props.hotelDetails.bed_configurations){
        return props.hotelDetails.bed_configurations[0].bed_types[0]
    }
})
let name_with_count=computed(()=>{
    if(bedTypes.value){
        return bedTypes.value.name_with_count
    }
})

</script>
