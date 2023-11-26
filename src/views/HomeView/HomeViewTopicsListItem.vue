<template>
    <div
        :class="['flex flex-col justify-end p-5 h-[280px] w-[400px] rounded-lg  text-white', { 'topic1': source === 'topic1.webp', 'topic2': source === 'topic2.webp', 'topic3': source === 'topic3.webp' }]">
        <h3 class="w-full text-xl font-semibold mb-[10px]">{{ props.topic.title }}</h3>
        <p class="w-full text-base font-normal">{{ props.topic.description }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    'topic': Object
})

let source = ref(props.topic.imgSrc)
</script>

<style scoped>
.topic1 {
    background-image: url('../../assets/images/topic1.webp');
}

.topic2 {
    background-image: url('../../assets/images/topic2.webp');
}

.topic3 {
    background-image: url('../../assets/images/topic3.webp');
}</style>
