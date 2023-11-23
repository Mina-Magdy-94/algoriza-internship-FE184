<template>
    <div class="flex flex-nowrap justify-between rounded-[4px] w-[124px] p-3 bg-[#F2F2F2]">
        <img :src="require(`@/assets/icons/${props.src}`)">
        <input type="text" class="h-5/6 outline-none rounded-[4px] w-3/4 bg-[#F2F2F2] text-sm font-normal"
            :placeholder="props.placeholder" />
    </div>
</template>

<script setup>
const props=defineProps({
    placeholder:String,
    src:String
})
</script>
