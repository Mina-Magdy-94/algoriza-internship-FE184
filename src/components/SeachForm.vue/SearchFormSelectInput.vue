<template>
        <div class="relative flex justify-between border-none outline-none bg-[#F2F2F2] rounded-[4px]">
            <select name="destination" id=""
                class="bg-[#F2F2F2] text-gray-900 rounded-[4px] focus:ring-blue-500 block pl-4 py-2 outline-none">
                <option value="option" disabled selected hidden>Where do you want to go?</option>
                <option value="fayoum">fayoum</option>
                <option value="giza">giza</option>
                <option value="cairo">caissro</option>
                <option value="cairo">caissro</option>
                <option value="cairo">caissro</option>
            </select>
            <div class="absolute inset-y-0 left-0   
                    flex items-center  
                    pointer-events-none">
                <img src="../../assets/icons/location 1locationIcon.svg">
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>
