<template>
            <BaseFilter title-of-heading="Search by property name" styling-for-heading="pt-[20px] pb-[16px]">
                <template #default="slotProps">
                    <div :class="`pb-[18px] bg-[#f2f2f2] ${slotProps.class}`">
                        <div
                            class="flex flex-row flex-nowrap w-[259px] box-border h-[44px] bg-[#FFF] border-[#E0E0E0] p-3 space-x-2.5 items-center rounded mx-auto">
                            <img src="../../../assets/icons/search 1.svg" alt="search icon" title="search" class="w-5 h-5">
                            <input type="text" placeholder="eg. Beach westpalm"
                                class="w-[142px] h-[21px] mt-[-3px] text-[14px] font-normal leading-[19.6px] text-[#4F4F4F]">
                        </div>
                    </div>
                </template>
            </BaseFilter>
</template>

<script setup>
import BaseFilter from './BaseFilter.vue';


</script>
