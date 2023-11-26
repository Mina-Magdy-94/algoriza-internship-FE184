<template>
    <TheNavigation :isRenderHeaderLogoOnly="route.name==='signin'" />
    <main class="px-[15px] md:px-[30px] lg:px-[100px] my-[12px] min-h-screen box-border h-fit">
        <RouterView />
    </main>
    <TheFooter v-if="route.name !=='signin'" />
</template>

<script setup>
import { onMounted, ref} from 'vue';
import TheFooter from './TheFooter.vue';
import TheNavigation from './TheNavigation.vue';
import { useRoute } from 'vue-router';

let route = useRoute()

</script>
