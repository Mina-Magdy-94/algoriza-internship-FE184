<template>
    <div class="relative flex justify-between  rounded-[4px] w-[173px]">
        <VueDatePicker ref="datePickerInput" v-model="date" :min-date="props.minDate"
            @update:model-value="emits('dateSelected', date)" :placeholder="props.placeholder" class="text-[13px] leading-5 "
            input-class-name="date-picker"></VueDatePicker>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { ref } from 'vue'
let props = defineProps({
    'minDate': String | Date,
    'placeholder': String
})
let emits = defineEmits(['dateSelected'])
let datePickerInput = ref()

let date = ref()

</script>

<style scoped>
:root {
    --dp-font-size: 12px;
    /*Default font-size*/
}
.dp__main{
    border: none;
    outline: none;
}


.dp__theme_light{
    --dp-background-color:#F2F2F2
}

.dp__action_select{
    background-color: var(--dp-background-color);
    color: white;
}
</style>