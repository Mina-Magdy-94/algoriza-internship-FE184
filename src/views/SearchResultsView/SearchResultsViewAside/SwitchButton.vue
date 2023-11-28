<template>
    <label for="toggle" class="flex items-center cursor-pointer w-[32px] h-[20px]" @click.prevent="handleClick">
        <!-- Input checkbox -->
        <input type="checkbox" id="toggle" :value="isSwitchButtonON" class="hidden">
        <!-- Switch track -->
        <div
            :class="[`w-[32px] h-[20px] rounded-full py-1 transition duration-300 ease-in-out flex items-center ${moveTheBall}`, { 'bg-blue-500': isSwitchButtonON, 'bg-gray-300': !isSwitchButtonON }]">
            <div class="w-[20px] h-[20px] bg-white rounded-full shadow-md">
            </div>
        </div>
    </label>
</template>

<script setup>
import { computed, ref } from 'vue';

let props = defineProps({
    isSwitchButtonON: Boolean,
    setSwitchButton: Function
})

let emit =defineEmits(['toggleSwitch'])

const handleClick = () => {
    emit('toggleSwitch')
}

let moveTheBall = computed(() => {
    return props.isSwitchButtonON===true ? "justify-end" : 'justify-start'
})


</script>