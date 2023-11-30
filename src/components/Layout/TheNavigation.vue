<template>
    <header
        :class="`shadow-[0_0_1px_gray] h-18 grid grid-cols-12 justify-between  auto-rows-auto px-[15px] md:px-[30px] lg:px-[100px]  ${specialStyleForSearchResultPage}`">
        <div class="col-span-9 sm:col-span-3 md:col-span-3 xl:col-span-2 flex items-center justify-start">
            <img v-if="route.name !=='searchResults'" src="../../assets/icons/bxs-plane-alt.svg" alt="My Dream Place Icon" title="My Dream Place">
            <img v-else src="../../assets/icons/whitePlaneLogo.svg" alt="My Dream Place Icon" title="My Dream Place">
            <p class="text-lg  font-medium leading-5">
                my Dream Place
            </p>
        </div>

        <template v-if="!isRenderHeaderLogoOnly">
            <nav
                class="hidden sm:flex items-center sm:col-start-5 sm:col-end-11 md:col-start-4 md:col-end-10 lg:col-end-10 xl:col-start-4 xl:col-end-10 ">
                <ul class="w-full sm:flex xl:justify-center justify-between content-center p-[5px]">
                    <li v-for="(listItem, index) in NAVIGATION_LINKS" :key="listItem"
                        class="p-0 h-5 xl:mx-6 text-base font-normal leading-5">
                        {{ listItem }}
                    </li>
                </ul>
            </nav>

            <div v-if="!hasToken"
                class="hidden sm:col-start-11 bg-yellow sm:col-end-13 md:col-start-11 md:col-end-13 xl:col-start-12 sm:flex justify-end items-center">
                <BaseButton :button-text="'Login'" class="col-start-12 col-end-13" />
            </div>

            <div v-else class="hidden md:col-start-11 md:col-end-13 xl:col-start-12 sm:flex justify-evenly items-center">
                <img src="../../assets/icons/notification 1notification.svg" alt="notification icon">
                <div class="rounded-full w-11 h-11">
                    <img src="../../assets/images/Ellipse 2profile pic.jpg" alt="profile picture" class="rounded-full">
                </div>
            </div>

            <div class="h-1/2 my-auto col-span-3  col-start-11 sm:hidden flex flex-col justify-between items-center bg-yellow-300"
                @click="setShowDropDown">
                <div class="w-[40px] h-[4px] bg-gray-600"></div>
                <div class="w-[40px] h-[4px] bg-gray-600"></div>
                <div class="w-[40px] h-[4px] bg-gray-600"></div>
            </div>
        </template>

    </header>
    <ul v-if="showDropDown && !isRenderHeaderLogoOnly" class="w-full px-[15px]">
        <li v-for="navlink in NAVIGATION_LINKS" class="hover:bg-yellow-100  m-0 pl-[5px] py-[10px] w-full">{{ navlink
        }}
        </li>
        <BaseButton v-if="!hasToken" :button-text="'Login'" class="w-full" />
    </ul>
</template>


<script setup>
import { computed, ref } from 'vue';
import BaseButton from '../UI/BaseButton'
import { useRoute } from 'vue-router';
import {checkTokenValidity} from '../../helpers/utils'



let props = defineProps({
    'isRenderHeaderLogoOnly': Boolean
})
const NAVIGATION_LINKS = ref(['Home', 'Discover', 'Activities', 'About', 'Contact'])
const showDropDown = ref(false)
const hasToken = computed(checkTokenValidity)
let setShowDropDown = () => showDropDown.value = !showDropDown.value
let route = useRoute()
let specialStyleForSearchResultPage = computed(() => {
    return route.name === 'searchResults' ? 'bg-gradient-to-b from-[#2969BF] to-[#144E9D] h-[200px] content-start pt-[24px] text-[#FFFFFF]' : ''
})
</script>


