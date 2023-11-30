<template>
    <div class="w-[400px] rounded-md flex flex-col">
        <figure class="">
            <img v-if="photoToDisplay" :src="photoToDisplay" alt="room" class="w-full h-[200px] rounded-t-md">
            <img v-else src="../../assets/images/No-Image-Placeholder.webp" alt="room" class="w-full h-[200px] rounded-t-md">
        </figure>
        <slot></slot>
    </div>
</template>

<script setup>
let props=defineProps({
    photoToDisplay:{
        type:String,
        // required:false,
        // default:"../../assets/images/No-Image-Placeholder.webp"
    }
})
// default value of photoToDisplay appear in the console but never renders
// so I was forced to use conditional rendering instead of using default which is much cleaner code
// console.log(props.photoToDisplay)
</script>

