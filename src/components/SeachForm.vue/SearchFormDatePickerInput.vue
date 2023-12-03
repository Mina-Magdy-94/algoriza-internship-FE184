<template>
    <div class="relative flex justify-between  rounded-[4px] w-[173px]">
        <VueDatePicker :enable-time-picker="false" ref="datePickerInput" :model-value="modelValue"
            @update:model-value="handleDateSelection" :max-date="maxDate" :min-date="minDate" :placeholder="props.placeholder"
            class="text-[13px] leading-5 " input-class-name="date-picker"></VueDatePicker>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { ref } from 'vue'
let props = defineProps({
    'minDate': String | Date,
    maxDate: String | Date,
    'placeholder': String,
    'modelValue': Date | String | Object
})

let emit = defineEmits(["update:modelValue"])
let datePickerInput = ref()


const handleDateSelection = (val) => {
    emit('update:modelValue', val)
}



</script>

<style>
/* :root {
    --dp-font-size: 12px;
}

.dp__main {
    border: none;
    outline: none;
}


*/ .dp__theme_light {
    --dp-background-color: #F2F2F2
} 

.dp__action_button.dp__action_select{
    background-color:#2F80ED;
    color: white;
}
</style>
