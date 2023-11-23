<template>
    <form
        class="z-1 text-[#4f4f4f] rounded-lg bg-white h-[64px] flex justify-evenly items-center text-[13px] leading-5 shadow">
        <SearchFormSelectInput />
        <SearchFormDatePickerInput placeholder="Check in date" :min-date="minimumCheckInDate" @dateSelected="setCheckInDate"/>
        <SearchFormDatePickerInput placeholder="Check out date" :min-date="minimumCheckOutDate"/>
        <SearchFormTextInput src="userIcon.svg" placeholder="Guests"/>
        <SearchFormTextInput src="roomsIcon.svg" placeholder="Rooms"/>
        <BaseButton button-text="Search" class="w-[134px]"/>
    </form>
</template>

<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref ,computed} from 'vue';
import SearchFormSelectInput from './SearchFormSelectInput';
import SearchFormDatePickerInput from './SearchFormDatePickerInput.vue';
import SearchFormTextInput from './SearchFormTextInput.vue';
import BaseButton from '../UI/BaseButton.vue';

let today = ref(new Date())
let checkInDate=ref(today)
let minimumCheckInDate = ref(new Date(today.value.getFullYear(), today.value.getMonth(), today.value.getDate() + 1))
let minimumCheckOutDate = computed(()=>{
    return new Date(checkInDate.value.getFullYear(), checkInDate.value.getMonth(), checkInDate.value.getDate() + 1)
})

function setCheckInDate(date){
    checkInDate.value=date
}

</script>


