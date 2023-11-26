<template>
    <section class="w-[915px] h-fit flex flex-col justify-between ">
        <!-- Head of SearchResultsViewMain -->
        <div class="flex justify-between flex-nowrap mb-[24px]">
            <h2 class=" w-[504p] h-[32px] font-semibold text-[24px] leading-normal text-[#181818]">Melbourne : 2,582
                search results
                found</h2>
            <div class="rounded-md w-[190px] py-2 px-3 border-[1px] border-solid border-[#DBDBDB]  h-fit ">
                <div class="flex flex-col justify-start gap-[2px] w-full rounded-md ">
                    <span
                        class="text-[#828282] text-[12px] font-medium leading-3 tracking-[0.24px] min-w-[32px] min-h-[12px] rounded-t-md ">Sort
                        by</span>
                    <select name="sorting" id="sorting"
                        class="text-[#333] text-[14px] font-normal leading-normal tracking-[0.28px] rounded-b-md ">
                        <option value="recommended">Recommended</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- The container of all search results hotels list -->
        <HotelsList />
        <Pagination :currentPage="2" :totalPages="5" />
    </section>
</template>

<script setup>
import HotelsList from './HotelsList.vue';
import Pagination from './Pagination.vue';



</script>
