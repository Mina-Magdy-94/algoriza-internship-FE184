<template>
    <ul class="absolute top-[60px] right-0 z-40 text-[#4F4F4F] text-[15px] font-normal leading-[20px] tracking-[0.3px] rounded-[10px]  w-fit h-fit py-[10px]">
        <li class="p-[10px] bg-[#FFF] shadow-[0_0.5px_0p_-0p_rgba(214,214,214)] flex justify-start items-center border-b-[1px] rounded-t-[10px] w-full h-[40px] hover:cursor-pointer hover:bg-slate-400" @click="goTo('notfound')">
            <img src="../../assets/icons/user-square 2.svg" alt="" class="mr-[10px] w-[20px] h-[20px]">
            <span>Manage account</span>
        </li>
        <li class="p-[10px] bg-[#FFF] shadow-[0_0.5px_0p_-0p_rgba(214,214,214)] flex justify-start items-center border-b-[1px] w-[200px] h-[40px] hover:cursor-pointer hover:bg-slate-400" @click="goTo('mytrips')">
            <img src="../../assets/icons/bxs-plane-take-off 1.svg" alt="" class="mr-[10px] w-[20px] h-[20px]">
            <span>My trips</span>
        </li>
        <li class="p-[10px] bg-[#FFF] shadow-[0_0.5px_0p_-0p_rgba(214,214,214)] flex justify-start items-center border-b-[1px] w-full h-[40px] hover:cursor-pointer hover:bg-slate-400" @click="goTo('notfound')">
            <img src="../../assets/icons/wallet-3 1.svg" alt="" class="mr-[10px] w-[20px] h-[20px]">
            <span>Reward and wallet</span>
        </li>
        <li class="p-[10px] bg-[#FFF] shadow-[0_0.5px_0p_-0p_rgba(214,214,214)] flex justify-start items-center rounded-b-[10px] w-full h-[40px] hover:cursor-pointer hover:bg-slate-400" @click="goTo('signin')">
            <img src="../../assets/icons/logout 1.svg" alt="" class="mr-[10px] w-[20px] h-[20px]">
            <span>Sign out</span>
        </li>
    </ul>
</template>

<script setup>
import { useRouter } from 'vue-router';

let props=defineProps({
    setShowDropdown:Function
})

let router=useRouter()

let goTo=(pageToGo)=>{
    props.setShowDropdown()
    if(pageToGo==='signin'){
        localStorage.clear()
    }
    router.push({path:`/${pageToGo}`})
}
</script>
