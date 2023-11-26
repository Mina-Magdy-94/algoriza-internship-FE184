<template>
    <BaseSearch class="mt-[-40px]" />
    <section class="mt-[62px] mb-[96px] w-full flex flex-nowrap justify-between">
        <SearchResultsViewAside />
        <SearchResultsViewMain/>
    </section>
    <CovidAlert class="w-full"/>
</template>

<script setup>
import BaseSearch from '@/components/SeachForm.vue/BaseSearch.vue';
import SearchResultsViewAside from './SearchResultsViewAside/SearchResultsViewAside.vue';
import SearchResultsViewMain from './SearchResultsViewMain/SearchResultsViewMain.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';


</script>
