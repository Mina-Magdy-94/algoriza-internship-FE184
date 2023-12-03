<template>
    <header
        :class="`shadow-[0_0_1px_gray] h-18 grid grid-cols-12 justify-between  auto-rows-auto px-[15px] md:px-[30px] lg:px-[100px]  ${specialStyleForSearchResultPage}`">
        <div class="col-span-9 sm:col-span-3 md:col-span-3 xl:col-span-2 flex items-center justify-start hover:cursor-pointer"
            @click="router.push({ name: 'home' })">
            <img v-if="route.name !== 'searchResults'" src="../../assets/icons/bxs-plane-alt.svg" alt="My Dream Place Icon"
                title="My Dream Place">
            <img v-else src="../../assets/icons/whitePlaneLogo.svg" alt="My Dream Place Icon" title="My Dream Place">
            <p class="text-lg  font-medium leading-5">
                my Dream Place
            </p>
        </div>

        <template v-if="!isRenderHeaderLogoOnly">
            <nav
                class="hidden sm:flex items-center sm:col-start-5 sm:col-end-11 md:col-start-4 md:col-end-10 lg:col-end-10 xl:col-start-4 xl:col-end-10 ">
                <ul class="w-full sm:flex xl:justify-center justify-between content-center p-[5px]">
                    <li v-for="(listItem, index) in NAVIGATION_LINKS" :key="listItem" @click="goTo(listItem)"
                        class="p-0 h-5 xl:mx-6 text-base font-normal leading-5 hover:cursor-pointer">
                        {{ listItem }}
                    </li>
                </ul>
            </nav>

            <div v-if="!isAuthorized"
                class="hidden sm:col-start-11 bg-yellow sm:col-end-13 md:col-start-11 md:col-end-13 xl:col-start-12 sm:flex justify-end items-center">
                <BaseButton :button-text="'Login'" class="col-start-12 col-end-13"  @click="router.push({name:'signin'})"/>
            </div>

            <div v-else
                class="relative hidden md:col-start-11 md:col-end-13 xl:col-start-12 sm:flex justify-evenly items-center">
                <img src="../../assets/icons/notification 1notification.svg" alt="notification icon">
                <figure class="rounded-full w-11 h-11" @click="setShowDropdown">
                    <img src="../../assets/images/Ellipse 2profile pic.jpg" alt="profile picture"
                        class="rounded-full hover:cursor-pointer">
                </figure>
                <UserDropdown v-if="showDropDown" :set-show-dropdown="setShowDropdown" />
            </div>
        </template>

    </header>
</template>


<script setup>
import { computed, ref } from 'vue';
import BaseButton from '../UI/BaseButton'
import { useRoute, useRouter } from 'vue-router';
import { checkTokenValidity } from '../../helpers/utils'
import UserDropdown from '../UI/UserDropdown.vue';
import {isAuthorized} from'../../store/auth' 



let props = defineProps({
    'isRenderHeaderLogoOnly': Boolean
})

let route = useRoute()
let router = useRouter()

const NAVIGATION_LINKS = ref(['Home', 'Discover', 'Activities', 'About', 'Contact'])
const showDropDown = ref(false)


let goTo=(page)=>{
    if(page.toLowerCase()==='home'){
        router.push({name:'home'})
    }else{
        router.push({path:'/notfound'})
    }
}

let setShowDropdown = () => showDropDown.value = !showDropDown.value
let specialStyleForSearchResultPage = computed(() => {
    return route.name === 'searchResults' ? 'bg-gradient-to-b from-[#2969BF] to-[#144E9D] h-[200px] content-start pt-[24px] text-[#FFFFFF]' : ''
})
</script>


