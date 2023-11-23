<template>
        <button class="px-4 py-2 bg-blue-1 text-white rounded-md font-medium text-base">{{ props.buttonText }}</button>
</template>

<script setup>
const props=defineProps({
    'buttonText':{
        type:String,
        required:true
    }
})
</script>
