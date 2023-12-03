<template>
  <main>
    <BaseModal v-if="isModalOpen" :btn-function="closeModal" title="Welcome to My Dream Place" content="You can now enjoy your travel experience with easy access to resources and more" button="Get Started">
  <WelcomePictureInModal/>
    </BaseModal>
    <HomeViewHeroImage />
    <section class="px-[105px] translate-y-[-50%]">
      <BaseSearch />
    </section>
    <CovidAlert/>
    <HomeViewCardList :heading="'Enjoy your dream vacation'" :description="`Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us`" :list="countries" />
    <HomeViewTopicsList :topics="topics" />
    <HomeViewCardList :heading="'Popular hotels'" :list="hotels" />
    <HomeViewFinalImage/>
    <div class="flex flex-col justify-between items-center h-[70px] text-center my-20">
      <h3 class="h-8 text-[28px] font-semibold  mt-0">Explore the world with My Dream place</h3>
      <p class="text-[#2F80ED] text-base font-normal">Discover new places and experiences</p>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BaseSearch from '@/components/SeachForm.vue/BaseSearch.vue';
import HomeViewHeroImage from './HomeViewHeroImage.vue';
import { ref } from 'vue';
import HomeViewCardList from './HomeViewCardList.vue';
import HomeViewTopicsList from './HomeViewTopicsList.vue';
import HomeViewFinalImage from './HomeViewFinalImage.vue';
import CovidAlert from '@/components/UI/CovidAlert.vue';
import BaseModal from '@/components/UI/BaseModal.vue';
import WelcomePictureInModal from '@/components/UI/WelcomePictureInModal.vue';
import { onMounted } from 'vue';

// @ is an alias to /src
let route=useRoute()
let isModalOpen=ref(true)

let closeModal=()=>isModalOpen.value=false

let countries = ref([
  { name: 'Australia', description: '2246 properties', imgSrc: 'australia.webp' },
  { name: 'Japan', description: '1278 properties', imgSrc: 'japan.webp' },
  { name: 'New Zeeland', description: '480 properties', imgSrc: 'newzeeland.webp' },
  { name: 'Greece', description: '320 properties', imgSrc: 'greece.webp' },
])

let topics = ref([
  { title: 'Sydeny’s 10 most fashionable 5 star hotels', description: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....', imgSrc: 'topic1.webp' },
  { title: 'Top cities for Vegan Travellers', description: 'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...', imgSrc: 'topic2.webp' },
  { title: 'New World’s top destinations during and post covid timeline', description: 'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...', imgSrc: 'topic3.webp' },
])

let hotels = ref([
  { name: 'Lakeside Motel Warefront', description: 'Lakeside Motel Warefront', imgSrc: 'LakesideMotelWarefront.webp' },
  { name: 'Recce Graham resort', description: '1278 properties', imgSrc: 'RecceGrahamResort.webp' },
  { name: 'Fireside Dinners', description: '480 properties', imgSrc: 'FiresideDinners.webp' },
  { name: 'Oculous Inn Stay', description: '320 properties', imgSrc: 'OculousInnStay.webp' },
])


</script>
