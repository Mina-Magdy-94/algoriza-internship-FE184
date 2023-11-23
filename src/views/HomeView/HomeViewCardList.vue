<template>
    <section class="my-[60px] space-y-[16px]">
        <h2 class="w- w-[504px] h-8 text-[#181818] text-[28px] font-semibold">{{props.heading}}</h2>
        <p class="w-[610px] h-11 text-[15px] font-normal" v-if="props.description">{{props.description}}</p>
        <ul class="flex justify-between">
            <li v-for="item in props.list" :key="`${item.name}${item.description}`">
                <HomeViewCardListCardItem :list-item="item"/>
            </li>
        </ul>
    </section>
</template>

<script setup>
import HomeViewCardListCardItem from './HomeViewCardListCardItem.vue';
let props=defineProps({
    list:Array,
    heading:String,
    description:String
})
</script>
