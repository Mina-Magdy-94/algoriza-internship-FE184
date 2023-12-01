<template>
    <section v-if="photos.length"
        class="w-[1240px] h-[452px] mt-[12px] mb-[24px] flex justify-between bg-gradient-to-t from-transparent via-white to-white">
        <div class="rounded-[5px] h-full w-[820px] bg-cover bg-no-repeat grayscale-[50%] "
            :style="{ backgroundImage: `url('${firstPhoto}')` }">
        </div>
        <div class="flex flex-col justify-between w-[400px] h-[452px]">
            <div class="rounded-[5px] h-[218px] w-full bg-cover bg-no-repeat grayscale-[50%]" :style="{ backgroundImage: `url('${secondPhoto}')` }">
            </div>
            <div class="rounded-[5px] h-[218px] w-full bg-cover bg-no-repeat grayscale-[50%]" :style="{ backgroundImage: `url('${thirdPhoto}')` }">
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
let props = defineProps({
    hotelDetails: Object
})

let photos = computed(() => {
    let roomsObject = props.hotelDetails.rooms
    let firstKeyOfRoomObject = Object.values(roomsObject)[0]
    return firstKeyOfRoomObject.photos
})

let firstPhoto = ref()
let secondPhoto = ref()
let thirdPhoto = ref()


onMounted(()=>{
    console.log(photos.value.length)
    if(photos.value.length){
        firstPhoto.value=photos.value[0].url_max750
        secondPhoto.value=photos.value[1].url_max750
        thirdPhoto.value=photos.value[2].url_max750
    }
})
</script>
