<template>
    <section class="mt-[60px] flex flex-col justify-between h-[336px]">
        <h2 class="w-[504px] h-8 text-[28px] font-semibold">Get inspiration for your next trip</h2>
        <ul class="flex justify-between rounded-lg">
            <li v-for="topic in topics" :key="topic">
                <HomeViewTopicsListItem :topic="topic"/>
            </li>
        </ul>
    </section>
</template>

<script setup>
import HomeViewTopicsListItem from './HomeViewTopicsListItem.vue';

 const props=defineProps({
    "topics":Array
 })
</script>
