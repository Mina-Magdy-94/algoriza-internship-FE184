<template>
    <label for="toggle" class="flex items-center cursor-pointer w-[32px] h-[20px]">
        <!-- Input checkbox -->
        <input type="checkbox" id="toggle" v-model="isSwitchOn" class="hidden">
        <!-- Switch track -->
        <div :class="[`w-[32px] h-[20px] rounded-full py-1 transition duration-300 ease-in-out flex items-center ${moveTheBall}`,{ 'bg-blue-500': isSwitchOn, 'bg-gray-300': !isSwitchOn }]">
            <div class="w-[20px] h-[20px] bg-white rounded-full shadow-md">
            </div>
        </div>
    </label>
</template>

<script setup>
import { computed, ref } from 'vue';

let props=defineProps({
    isSwitchButtonON:Boolean
})
let isSwitchOn=ref(false)
let moveTheBall=computed(()=>{
    return isSwitchOn.value?"justify-end":'justify-start'
})


</script>