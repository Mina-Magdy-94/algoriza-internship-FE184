<template>
    <section :class="`flex flex-col w-full rounded-[6px] bg-[#f2f2f2] p-0 mb-5 ${stylingForRootElement}`">
        <h3
            :class="`flex items-center bg-[#f2f2f2] rounded-t-[6px] box-border w-full h-[55px] p-[18px]  text-base font-medium tracking[0.16px] ${stylingForHeading}`">
            {{ titleOfHeading }}</h3>
        <slot class="rounded-b-[6px]"></slot>
    </section>
</template>

<script setup>
let props = defineProps({
    stylingForRootElement: {
        type: String,
        required: false,
        default: ''
    },
    stylingForHeading: {
        type: String,
        required: false,
        default: ''
    },
    titleOfHeading: {
        type: String,
        required: true
    }
})
</script>
