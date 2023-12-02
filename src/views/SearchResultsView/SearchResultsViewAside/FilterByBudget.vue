<template>
    <BaseFilter title-of-heading="Your budget per day"
        styling-for-root-element="h-fit max-h-[385px] border-[1px] border-solid border-[#E0E0E0]">
        <template #default="slotProps">
            <div
                :class="`flex flex-col pt-[18px] pb-[19px] pl-[18px] pr-[20px] bg-[#FFFFFF] w-full h-fit max-h-[319px] text-[14px] leading-normal font-normal tracking-[0.28px] ${slotProps.class}`">
                <div class="flex flex-col h-[156px] p-0">
                    <div v-for="priceRange in priceList" class="flex flex-nowrap justify-start w-full h-5 mb-[14px]">
                        <div class="flex justify-start items-center gap-2 w-fit h-[20px]">
                            <input type="checkbox" id="vehicle1" name="numbers" :value="priceRange" v-model="prices"
                                :disabled="isSwitchButtonON" class=" cursor-pointer w-[20px] h-[20px]  ">
                            <label for="" class="left-[28px] flex items-center">${{ priceRange.price_min }} - ${{
                                priceRange.price_max
                            }}</label>
                        </div>
                    </div>
                </div>
                <div class="h-[20px] w-full mt-[20px] flex justify-between">
                    <p class="w-[127px] h-[20px] text-[#4F4F4F] text-[14px] font-normal tracking-[0.28px]">Set your own
                        budget</p>
                    <SwitchButton :isSwitchButtonON="isSwitchButtonON" @toggle-switch="setSwitchButton" />
                </div>
                <div class="flex flex-col justify-between w-full" v-if="isSwitchButtonON">
                    <div
                        class="w-full h-[43px] p-0 flex justify-between text-[12px] font-normal tracking-[0.24px] leading-[16.8px] mt-[15px] rounded-[4px] #FFF">
                        <input type="number" name="price_min" placeholder="Min budget"
                            @keydown.enter="handleSendingInpuData" v-model.number="budgetInputs.minBudget"
                            class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
                        <input type="number" name="price_max" placeholder="Max budget"
                            @keydown.enter="handleSendingInpuData" v-model.number="budgetInputs.maxBudget"
                            class="w-[112px] h-[43px] p-[12px] pt-[11px] rounded-[4px] border-[1px] border-solid border-[#E0E0E0]">
                    </div>
                    <span v-if="budgetInputs.budgetError" class="text-[14px] font-normal tracking-[0.28px] text-red-600">{{
                        budgetInputs.budgetError }}</span>
                    <p class="text-[14px] font-normal tracking-[0.28px] h-[17px] mt-[8px]">Press Enter to filtert</p>
                </div>
            </div>
        </template>
    </BaseFilter>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import BaseFilter from './BaseFilter.vue';
import SwitchButton from './SwitchButton.vue';
import * as searchApis from '../../../apis/searchApis'
import * as utils from '../../../helpers/utils'

let props = defineProps(({
    setDataUpdatedToTrue: Function,
    setClientSideFilters:Function
}))

let prices = ref([])
let priceList = [
    { price_min: 0, price_max: 200 },
    { price_min: 200, price_max: 500 },
    { price_min: 500, price_max: 1000 },
    { price_min: 1000, price_max: 2000 },
    { price_min: 2000, price_max: 5000 },
]

let isSwitchButtonON = ref(false)
let setSwitchButton = () => {
    isSwitchButtonON.value = !isSwitchButtonON.value
}

let budgetInputs = ref({
    minBudget: null,
    maxBudget: null,
    budgetError: null
})


let handleSendingInpuData = (e) => {
    if (e.target.value && budgetInputs.value.minBudget < budgetInputs.value.maxBudget) {
        budgetInputs.value.budgetError = null
        prices.value = [{ price_min: budgetInputs.value.minBudget, price_max: budgetInputs.value.maxBudget }]
    } else if (budgetInputs.value.minBudget >= budgetInputs.value.maxBudget) {
        budgetInputs.value.budgetError = "min price must be less than max price"
    }
}

let calculateMinAndMaxValues = (pricesArray) => {
    let minPricesForAllCheckedCheckboxs = pricesArray.map(p => p.price_min)
    let price_min = Math.min(...minPricesForAllCheckedCheckboxs) ?? undefined
    let maxPricesForAllCheckedCheckboxs = pricesArray.map(p => p.price_max)
    let price_max = Math.max(...maxPricesForAllCheckedCheckboxs) ?? undefined

    return { price_min, price_max }
}

let previousTimeoutForDebounce

watch(prices, (newPrices, oldPrices) => {
    clearTimeout(previousTimeoutForDebounce)

    let getPriceFilteredDataFromApi = async () => {
        let { price_min: newprice_min, price_max: newprice_max } = calculateMinAndMaxValues(newPrices)
        let { price_min: oldprice_min, price_max: oldprice_max } = calculateMinAndMaxValues(oldPrices)


        if (!(newprice_min === oldprice_min && newprice_max === oldprice_max)) {
            console.log('entered')
            let searchParameters = utils.getDataFromLocalStorage('searchParameters')
            let newSearchParameters = { ...searchParameters, price_min: newprice_min,price_max: newprice_max,page_number: '1' }
            localStorage.setItem('searchParameters', JSON.stringify(newSearchParameters))
            props.setDataUpdatedToTrue()
            setClientSideFilters({ rating: null, name: null })
        }
    }
    let timeout = setTimeout(getPriceFilteredDataFromApi, 1000);
    previousTimeoutForDebounce = timeout
})



</script>
