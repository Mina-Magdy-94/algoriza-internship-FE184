<template>
    <BaseFilter title-of-heading="Your budget per day"
        styling-for-root-element="h-fit max-h-[346px] border-[1px] border-solid border-[#E0E0E0]">
        <template #default="slotProps">
            <div
                :class="`flex flex-col pt-[18px] pb-[19px] pl-[18px] pr-[20px] bg-[#FFFFFF] w-full h-fit max-h-[291px] text-[14px] leading-normal font-normal tracking-[0.28px] ${slotProps.class}`">
                <div class="flex flex-col h-[156px] p-0">
                    <div v-for="priceRange in priceList" class="flex flex-nowrap justify-start w-full h-5 mb-[14px]">
                        <div class="flex justify-start items-center gap-2 w-fit h-[20px]">
                            <input type="checkbox" id="vehicle1" name="numbers" :value="priceRange" v-model="prices"
                                :disabled="isSwitchButtonON" class=" cursor-pointer w-[20px] h-[20px]  ">
                            <label for="" class="left-[28px] flex items-center">${{ priceRange.min }} - ${{ priceRange.max }}</label>
                        </div>
                    </div>
                </div>
                <div class="h-[20px] w-full mt-[20px] flex justify-between">
                    <p class="w-[127px] h-[20px] text-[#4F4F4F] text-[14px] font-normal tracking-[0.28px]">Set your own
                        budget</p>
                    <SwitchButton :isSwitchButtonON="isSwitchButtonON" @toggle-switch="setSwitchButton" />
                </div>
                <div v-if="isSwitchButtonON"
                    class="w-full h-[43px] p-0 flex justify-between text-[12px] font-normal tracking-[0.24px] leading-[16.8px] mt-[15px] rounded-[4px] #FFF">
                    <input type="text" placeholder="Min budget"
                        class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
                    <input type="text" placeholder="Max budget"
                        class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
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
let priceList=[
    {min:0,max:200},
    {min:200,max:500},
    {min:500,max:1000},
    {min:1000,max:2000},
    {min:2000,max:5000},
]

let isSwitchButtonON = ref(false)
let setSwitchButton = () => {
    isSwitchButtonON.value = !isSwitchButtonON.value
}


let props = defineProps(({
    setDataUpdatedToTrue: Function
}))

</script>
