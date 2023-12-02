<template>
    <BaseFilter title-of-heading="Rating" styling-for-root-element="border-[1px] border-solid border-[#E0E0E0]">
        <template #default="slotProps">
            <div
                :class="`h-[115px] pt-[20px] pr-[23px] pb-[24px] pl-[18px] flex flex-col gap-[8px] bg-[#FFF] ${slotProps.class}`">
                <p class="text-[#4F4F4F] text-[14px] font-normal tracking-[0.28px] leading-normal">Show only ratings more
                    than</p>
                <div class="w-[250px] h-[46px] rounded-[5px] flex flex-nowrap">
                    <div v-for="rating in 5"
                    :class="[`flex flex-nowrap justify-evenly items-center border-[#E0E0E0] border-[1px] w-[50px] h-[46px] hover:cursor-pointer ${borderStylingForFirstAndLastStars(rating)}`]" :title="`${rating} star${rating > 1 ? 's' : ''}`"
                    @click="setClientSideFilters({rating})"
                    >
                        <p>{{ rating }}</p>
                        <img src="../../../assets/icons/star.svg" :alt="`${rating} star${rating > 1 ? 's' : ''}`"
                            :title="`${rating} star${rating > 1 ? 's' : ''}`" class="w-[18px] h-[18px]">
                    </div>
                </div>
            </div>
        </template>
    </BaseFilter>
</template>

<script setup>
import { computed } from 'vue';
import BaseFilter from './BaseFilter.vue';
let props=defineProps({
    setClientSideFilters:Function
})



let borderStylingForFirstAndLastStars=computed(()=>(rating)=>rating===1?'rounded-l-[5px]':rating===5?'rounded-r-[5px]':''
)

</script>
