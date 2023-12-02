<template>
    <aside class="flex flex-col w-[295px] justify-between h-fit">
        <FilterByName :set-client-side-filters="setClientSideFilters"/>
        <h2 class=" text-lg font-semibold tracking[0.36px] text-[#333333] w-[66px] h-[21px] ml-[18px] mb-5">Filter by
        </h2>
        <FilterByBudget :set-data-updated-to-true="setDataUpdatedToTrue" :set-client-side-filters="setClientSideFilters"/>
        <FilterByRating  :set-client-side-filters="setClientSideFilters"/>
    </aside>
</template>

<script setup>
import FilterByBudget from './FilterByBudget.vue';
import FilterByName from './FilterByName.vue';
import FilterByRating from './FilterByRating.vue';

let props=defineProps(({
    setDataUpdatedToTrue:Function,
    setClientSideFilters:Function,
    hotelsToShow:Array
}))



</script>
