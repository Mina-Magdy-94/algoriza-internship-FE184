<template>
    <section class="mt-[60px] flex flex-col">
        <h2 class="w-[504px] h-8 text-[28px] font-semibold mb-5">Get inspiration for your next trip</h2>
        <ul class="flex justify-between rounded-lg">
            <li v-for="topic in topics">
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
