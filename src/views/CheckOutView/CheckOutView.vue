<template>
    <h1
        class="flex flex-col justify-center h-[32px] text-[#1A1A1A] text-[32px] font-semibold leading-normal tracking-[0.32px]">
        Secure your reservation</h1>
    <CovidAlert class="my-[30px]" />

    <section class="flex justify-between mt-[-20px] pb-[141px]">
        <!-- left side -->
        <CheckOutViewLeftSide :change-modal-state="changeModalState"/>
        <!-- right side -->
        <div class="w-[400px] rounded-md">
            <BaseCard photo-to-display="images/house.webp">
                <div class="h-[220px] p-[20px] bg-[#FFF] rounded-b-md">
                    <h3 class="h-[21px] mb-[18px] text-[#181818] text-[18px] leading-normal tracking-[0.18px]">
                        Lakeside Motel Warefront
                    </h3>
                    <div class="flex justify-start items-center mb-[25px]">
                        <img src="../../assets/icons/star.svg" alt="star(s)" v-for="star in 4">
                        <p class="text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">4 (1200 Reviews)</p>
                    </div>
                    <div class="flex flex-col justify-between h-[104px] text-[14px] font-normal leading-[20px] tracking-[0.14px]">
                        <p class="h-[20px] text-[#EB5757]">Non refundable</p>
                        <p class="h-[20px]">Check in: Sunday, March 18, 2022</p>
                        <p class="h-[20px]">Check out: Tuesday, March 20, 2022</p>
                        <p class="h-[20px]">2 night stay</p>
                    </div>
                </div>
            </BaseCard>
            <CheckOutViewCard title="Price Details" styling-of-title="bg-[#85E0AB] text-[#181818]" styling-of-slot-root="p-[0px] h-fit" class="mt-[30px]">
                <div class="px-[18px] pt-[23px] pb-[20px] flex flex-col justify-between h-[95px] text-[14px] font-normal leading-[20px] tracking-[0.14px] border-b-[1px] border-solid border-[#E0E0E0]">
                    <div class="flex justify-between items-center">
                        <span>1 room X 2 nights</span>
                        <span>$ 120.32</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span>Tax and service fees</span>
                        <span>$ 8.32</span>
                    </div>
                </div>
                <div class="px-[18px] pt-[25px] pb-[23px] flex justify-between text-[#333] text-[20px] font-semibold leading-normal trackin-[0.2px]">
                    <span>Total</span><span>$130</span>
                </div>
            </CheckOutViewCard>
        </div>
    </section>
    <BaseModal v-if="isModalOpen" :close-modal="changeModalState"/>
</template>


<script setup>
import CovidAlert from '@/components/UI/CovidAlert.vue';
import CheckOutViewLeftSide from './CheckOutViewLeftSide.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import CheckOutViewCard from './CheckOutViewCard.vue';
import BaseModal from '@/components/UI/BaseModal.vue';
import { ref } from 'vue';

let isModalOpen=ref(false)

let changeModalState=()=>{isModalOpen.value=!isModalOpen;console.log(isModalOpen.value)}


</script>
<style></style>