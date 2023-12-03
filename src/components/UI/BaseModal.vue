<template>
<teleport to=".modals">
    <div class="fixed flex justify-center items-center z-40 w-screen h-screen top-0 left-0 bg-[#0003]" @click="btnFunction">
        <!-- absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 -->
        <div class="w-[400px]  px-[24px] pt-[50px] pb-[28px] text-center bg-[#FFF] rounded-[10px]">
            <slot></slot>
            <h1 class="text-[#181818] text-[20px] font-semibold leading-normal mb-[12px]">{{ title }}</h1>
            <p class="text-[#4F4F4F] text-[16px] font-normal leading-[22.4px] tracking-[0.32px] mb-[45px]">{{ content }}</p>
            <BaseButton :button-text="button" class="px-[18px] py-[12px] w-full" @click="btnFunction"/>
        </div>
    </div>
</teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import BaseButton from './BaseButton.vue';

let props=defineProps({
    btnFunction:Function,
    title:String,
    content:String,
    button:String
})

onMounted(()=>{
document.body.style.overflow='hidden'
})

onUnmounted(()=>{
document.body.style.overflow='visible'
})
</script>
