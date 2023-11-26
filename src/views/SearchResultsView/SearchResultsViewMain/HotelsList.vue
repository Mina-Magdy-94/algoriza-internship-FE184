<template>
    <div class="w-full h-fit flex flex-col gap-6 p-0">
        <HotelsListItem v-for="num in 8"/>
    </div>
</template>

<script setup>
import HotelsListItem from './HotelsListItem.vue';


</script>
