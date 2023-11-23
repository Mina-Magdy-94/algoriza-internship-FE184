<template>
    <TheNavigation />
    <main class="px-[15px] md:px-[30px] lg:px-[100px] my-[12px] min-h-screen box-border h-fit">
        <RouterView />
    </main>
    <TheFooter />
</template>

<script setup>
import TheFooter from './TheFooter.vue';
import TheNavigation from './TheNavigation.vue';

</script>
