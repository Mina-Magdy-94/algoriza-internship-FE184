<template>
    <div class="w-full h-fit flex flex-col gap-6 p-0" v-if="hotelsToShow.length">
            <HotelsListItem v-for="hotel in hotelsToShow" :key="hotel" :hotel="hotel" />
    </div>
</template>

<script setup>
import HotelsListItem from './HotelsListItem.vue';

let props = defineProps({
    hotelsToShow: Array,
})

</script>
