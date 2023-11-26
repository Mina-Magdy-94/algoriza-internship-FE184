<template>
    <BaseFilter title-of-heading="Your budget per day" styling-for-root-element="h-[346px] border-[1px] border-solid border-[#E0E0E0]">
        <template #default="slotProps">
            <div
                :class="`flex flex-col pt-[18px] pb-[19px] pl-[18px] pr-[20px] bg-[#FFFFFF] w-full h-[291px] text-[14px] leading-normal font-normal tracking-[0.28px] ${slotProps.class}`">
                <div class="flex flex-col h-[156px] p-0">
                    <div v-for="num in 5" class="flex flex-nowrap justify-between w-full h-5 mb-[14px]">
                        <div class="flex justify-start items-center gap-2 w-fit h-[20px]">
                            <input type="checkbox" id="vehicle1" name="numbers" :value="num" v-model="prices"
                                class=" cursor-pointer w-[20px] h-[20px]  ">
                            <label for="" class="left-[28px] flex items-center">anything</label>
                        </div>
                        <p>100</p>
                    </div>
                </div>
                <div class="h-[20px] w-full mt-[20px] flex justify-between">
                    <p class="w-[127px] h-[20px] text-[#4F4F4F] text-[14px] font-normal tracking-[0.28px]">Set your own budget</p>
                    <SwitchButton  :model-value="isSwitchButtonON"/>
                </div>
                <div class="w-full h-[43px] p-0 flex justify-between text-[12px] font-normal tracking-[0.24px] leading-[16.8px] mt-[15px] rounded-[4px] #FFF">
                    <input type="text" placeholder="Min budget" class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
                    <input type="text" placeholder="Max budget" class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
                </div>
            </div>
        </template>
    </BaseFilter>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import BaseFilter from './BaseFilter.vue';
import SwitchButton from './SwitchButton.vue';
let prices = ref([])

let isSwitchButtonON=ref(false)

</script>
