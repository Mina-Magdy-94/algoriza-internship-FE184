<template>
    <div class="flex flex-col justify-between">
        <div class="flex flex-nowrap justify-between rounded-[4px] h-[40px] w-[124px] p-3 bg-[#F2F2F2]">
            <img :src="require(`@/assets/icons/${props.src}`)">
            <input :modelValue="modelValue" @input="handleInputUpdate" type="text" class="h-5/6 outline-none rounded-[4px] w-3/4 bg-[#F2F2F2] text-sm font-normal"
                :placeholder="props.placeholder" />
        </div>
    </div>
</template>

<script setup>

const props=defineProps({
    placeholder:String,
    src:String,
    modelValue:String
})

let emit=defineEmits(['update:modelValue'])


let handleInputUpdate=(e)=>{
    emit('update:modelValue',e.target.value)
}


</script>
