<template>
                <div class=" flex flex-nowrap justify-between gap-5 w-full h-[240px] p-5 rounded-[5px] border-[1px] border-solid border-[#E0E0E0]"
                    >
                    <figure class="rounded-[5px] w-[285px] h-[200px]">
                        <img src="../../../assets/images/FiresideDinners.webp" alt="" class="w-full h-full">
                    </figure>
                    <!-- right side of product card -->
                    <div class="flex flex-col justify-between w-[566px] h-[200px] p-1 pl-0">
                        <!-- first row -->
                        <div class="flex flex-nowrap justify-between items-center w-full h-8 mb-[10px]">
                            <h3
                                class="h-8 flex flex-col justify-center text-[#1A1A1A] text-[20px] font-medium leading-normal tracking-[0.2px]">
                                Julia Dens Resort
                            </h3>
                            <p
                                class="inline-flex justify-center items-center gap-[10px] rounded-md bg-[#EB5757] text-[#FFF] text-[13px] leading-[18px] font-medium tracking-[0.26px] py-1 px-2">
                                Book now and receive 15% off</p>
                        </div>
                        <!-- second row -->
                        <div class="flex flex-nowrap flex-start">
                            <figure v-for="num in 5">
                                <img src="../../../assets/icons/star.svg" alt="">
                            </figure>
                            <p
                                class="w-[123px] h-[20px] text-[#4f4f4f] text-[14px] leading-[19.6px] tracking-[0.28px] font-normal ">
                                4.5 (1200 Reviews)</p>
                        </div>
                        <!-- third row -->
                        <div class="flex flex-nowrap justify-between items-end">
                            <div
                                class="flex flex-col justify-between text-[#4f4f4f] text-[13px] h-[58px] leading-[18.2px] tracking-[0.26]">
                                <h4 class=" font-semibold h-[18px] w-[380px]">Live a little and celbrate with champagne</h4>
                                <p class="font-normal h-[36px] w-[380px]">Reats include a glass of French champagne, parking
                                    and a late checkout. Gym included. Flexible cancellation applies</p>
                            </div>
                            <span class="inline-flex justify-center items-center gap-[10px] py-1 px-2 h-[26px] rounded-md bg-[#219653] text-[#FFFFFF] text-[13px] font-medium leading-[18px] tracking-[0.26px]">5% off</span>
                        </div>
                        <!-- forth row -->
                        <div class="flex flex-nowrap justify-between">
                            <BaseButton button-text="See availability" class="py-[10px] px-[18px]" />
                            <div class="flex flex-col items-end w-[143px] h-[47px]">
                                <div class="flex flex-nowrap justify-between items-center w-[88px]">
                                    <span class="w-[33px] h-[17px] text-[14px] font-medium leading-normal tracking-[0.14px] text-[#EB5757] line-through">
                                        $150
                                    </span>
                                    <span class="w-[47px] h-[24px] text-[20px] font-medium leading-normal tracking-[0.2px]">
                                        $130
                                    </span>
                                </div>
                                <p class="w-full h-[17px] text-[#333] text-[14px] font-light leading-normal tracking-[0.28px]">Includes taxes and fees</p>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';

</script>