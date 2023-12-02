<template>
    <div class="w-full rounded-md mb-[30px]">
        <!-- title  -->
        <div
            :class="`h-[60px] py-[18px] px-[20px] flex flex-nowrap justify-start items-center rounded-t-md bg-[#2F80ED] text-[16px] font-medium leading-[24px] tracking-[0.16px] ${stylingOfTitle}`">
            <template v-if="imgSrc">
                <img :src="require(`../../assets/icons/${imgSrc}`)" alt="" class="mr-[16px]">
            </template>
            <p class="mr-[18px]">{{ title }}</p>
            <p v-if="subtitle">
                {{ subtitle }}
            </p>
        </div>
        <!-- body -->
        <!-- p-[32px] pb-[40px]  -->
        <div :class="`bg-[#FFF] rounded-b-md h-[268px] ${stylingOfSlotRoot}`">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    imgSrc: String,
    title: String,
    subtitle: String,
    stylingOfTitle: String,
    stylingOfSlotRoot: String
})
console.log(props.stylingOfTitle)
</script>
