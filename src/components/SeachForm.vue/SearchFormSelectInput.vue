<template>
    <div class="relative flex justify-between border-none outline-none bg-[#F2F2F2] rounded-[4px]">
        <select name="destination" id="destination" :modelValue="modelValue" @change="handleSelectionUpdate"
            class="bg-[#F2F2F2] text-gray-900 rounded-[4px] focus:ring-blue-500 block pl-4 py-2 outline-none">
            <option value="option" disabled selected hidden>Where do you want to go?</option>
            <option v-for="city in cities" :value="city.dest_id">{{city.city_name}}</option>
        </select>
        <div class="absolute inset-y-0 left-0   
                    flex items-center  
                    pointer-events-none">
            <img src="../../assets/icons/location 1locationIcon.svg">
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as searchApis from '../../apis/searchApis'

let props=defineProps({
    modelValue:String
})

let emit=defineEmits(['update:modelValue'])
let handleSelectionUpdate=(e)=>{
    emit('update:modelValue',e.target.value)
}

let cities = ref([])
const getAllCities=()=>{
    searchApis.getAllCities().then(res=>{
        const citiesArray=res.data.data
        const filteredCities=citiesArray.filter((city)=>city.search_type==='city')
        cities.value=filteredCities
    })
}


onMounted(()=>getAllCities())
</script>
