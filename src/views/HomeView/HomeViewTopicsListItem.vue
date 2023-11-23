<template>
    <div class="flex flex-col justify-end p-5 h-[280px] w-[400px] rounded-lg bg-[url('../../assets/images/topic1.webp') bg-green-400">
    <h3 class="w-full text-xl font-semibold">{{ props.topic.title }}</h3>
    <p class="w-full text-base font-normal">{{ props.topic.description }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props=defineProps({
    'topic':Object
})

let source=ref(props.topic.imgSrc)
console.log(props.topic.imgSrc)
</script>
