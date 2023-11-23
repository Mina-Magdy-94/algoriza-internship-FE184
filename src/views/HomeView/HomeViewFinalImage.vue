<template>
    <div
        class="relative w-[1240] h-[280px] bg-cover rounded-lg bg-[url('../assets/images/HomePageLastImage.webp')] bg-no-repeat pl-[69px] py-16">
        <div class="flex flex-col justify-between w-[580px] h-[152px]">
            <h3 class="text-[28px] font-semibold text-[#FFF]">Download the mobile application for bonus coupons and travel
                codes</h3>
            <div>
                <BaseButton button-text="Download mobile app" />
            </div>
        </div>
        <div
            class="absolute right-52 bottom-0 z-20 bg-[url('../assets/images/hand_with_smartphone.webp')] opacity-100 h-full w-1/2">
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';


</script>
