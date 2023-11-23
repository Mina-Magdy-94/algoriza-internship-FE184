<template>
    <footer class="grid grid-rows-[minmax(200px,1fr),40px] md:gap-12 bottom-0 left-0 text-left box-border ">
        <div class="px-[15px] md:px-[30px] lg:px-[100px]">
            <ul class=" p-1 w-full sm:grid lg:grid-cols-[repeat(5,minmax(auto,1fr))] md:grid-cols-[repeat(3,minmax(auto,1fr))] sm:grid-cols-[repeat(2,50%)]  gap-6 justify-between ">
                <li class="flex flex-col justify-center items-center sm:justify-start sm:items-start">
                    <div class="flex justify-start">
                        <img src="../../assets/icons/bxs-plane-alt 1MyDreamPlace.svg" alt="My Dream Place Icon"
                            title="My Dream Place">
                        <p class="text-lg font-medium leading-5">
                            my Dream Place
                        </p>
                    </div>
                    <p class="sm:ml-6 w-11/12 h-10 text-center sm:text-left">Your next go to companion for travel</p>
                </li>
                <li v-for="item in footerItems">
                    <h4 class="font-medium text-base">{{ item.title }}</h4>
                    <p :class="['font-normal text-sm py-2',{'text-blue-1':cont==='see more'}]" v-for="cont in item.content">{{ cont }}</p>
                </li>
            </ul>
        </div>
        <div class="grid lg:grid-cols-12 justify-center items-center font-normal text-sm bg-footer">
            <p class="col-span-6 lg:col-start-10 lg:col-end-12">&copy; my Dream Place {{ copyRightYear }}</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const footerItems = ref([
    {
        title: 'Company',
        content: ['About', 'Jobs', 'Newsroom', 'Advertising', 'Contact us']
    },
    {
        title: 'Explore',
        content: ['Australia', 'New Zeeland', 'United States America (USA)', 'Greece', 'Maldives', 'Singapore','see more']
    },
    {
        title: 'Terms and Policies',
        content: ['Privacy Policy', 'Terms of use', 'Accessability', 'Reward system policy']
    },
    {
        title: 'Help',
        content: ['Support', 'Cancel your bookings', 'Use Coupon', 'Refund Policies', 'International Travel Documents']
    },
])

let copyRightYear = ref(new Date().getFullYear())

</script>
