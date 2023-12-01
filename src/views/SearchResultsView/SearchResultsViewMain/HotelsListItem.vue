<template>
    <div
        class=" flex flex-nowrap justify-between gap-5 w-full h-[240px] p-5 rounded-[5px] border-[1px] border-solid border-[#E0E0E0]">
        <figure class="rounded-[5px] w-[285px] h-[200px]">
            <img :src="imgSrc" alt="" class="w-full h-full rounded-[5px]">
        </figure>
        <!-- right side of product card -->
        <div class="flex flex-col justify-between w-[566px] h-[200px] p-1 pl-0">
            <!-- first row -->
            <div class="flex flex-nowrap justify-between items-center w-full h-8 mb-[10px]">
                <h3 :title="hotelName"
                    class="h-8 w-fit max-w-[345px] flex flex-col justify-center text-[#1A1A1A] text-[20px] font-medium leading-normal tracking-[0.2px] truncate ...">
                    {{ hotelName }}
                </h3>
                <p v-if="strikethroughPrice && benefitBadge !==''"
                    class="inline-flex justify-center items-center gap-[10px] rounded-md bg-[#EB5757] text-[#FFF] text-[13px] leading-[18px] font-medium tracking-[0.26px] py-1 px-2">
                    {{benefitBadge}}</p>
            </div>
            <!-- second row -->
            <div class="flex flex-nowrap flex-start">
                <figure v-for="num in reviewScore">
                    <img src="../../../assets/icons/star.svg" alt="">
                </figure>
                <p class="w-[123px] h-[20px] text-[#4f4f4f] text-[14px] leading-[19.6px] tracking-[0.28px] font-normal ">
                    {{ reviewScore }} ({{ reviewCount }} Reviews)</p>
            </div>
            <!-- third row -->
            <div class="flex flex-nowrap justify-between items-end">
                <div
                    class="flex flex-col justify-between text-[#4f4f4f] text-[13px] h-[58px] leading-[18.2px] tracking-[0.26]">
                    <h4 class=" font-semibold h-[18px] w-[380px]">{{ reviewScoreWord }}</h4>
                    <p class="font-normal h-[36px] w-[380px] text-ellipsis overflow-hidden " :title="accessibilityLabel">{{
                        accessibilityLabel }}...</p>
                </div>
                <span v-if="discount !== 0"
                    class="inline-flex justify-center items-center gap-[10px] py-1 px-2 h-[26px] rounded-md bg-[#219653] text-[#FFFFFF] text-[13px] font-medium leading-[18px] tracking-[0.26px]">{{ discount }}%
                    off</span>
            </div>
            <!-- forth row -->
            <div class="flex flex-nowrap justify-between">
                <!-- The ApI "hotel details doesn't provide the "rating" so I sent it as a param to the "hotelDetails" page instead of using static ot dummy data-->
                <BaseButton button-text="See availability" class="py-[10px] px-[18px]" @click="router.push({name:'hotelDetails',params:{id:hotel.property.id,rating:reviewScore}})"/>
                <div class="flex flex-col items-end w-[143px] h-[47px]">
                    <div :class="`flex flex-nowrap w-fit max-w-[105px] items-center ${priceDynamicStyling}`">
                        <template v-if="strikethroughPrice !== 0">
                            <span
                                class="w-fit h-[17px] text-[14px] font-medium leading-normal tracking-[0.14px] text-[#EB5757] line-through text-left">
                                ${{ strikethroughPrice }}
                            </span>
                        </template>
                        <span class="w-fit h-[24px] text-[20px] font-medium leading-normal tracking-[0.2px] text-right">
                            ${{ grossPrice }}
                        </span>
                    </div>
                    <p class="w-full h-[17px] text-[#333] text-[14px] font-light leading-normal tracking-[0.28px]">Includes
                        taxes and fees</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

let props = defineProps({
    hotel: Object
})

let router=useRouter()

let setDescription = (string) => {
    if (string.length > 120) {
        let descArr = string.split(" ")
        string = descArr.slice(0, descArr.length - 1).join(" ")
        return setDescription(string)
    } else {
        return string
    }
}
// Hotel Main Information
let hotelName = computed(() => props.hotel.property.name)
let imgSrc = computed(() => props.hotel.property.photoUrls[0])
let accessibilityLabel = computed(() => {
    let descriptionArray = props.hotel.accessibilityLabel.split(".")
    let description = descriptionArray.join(".")
    return description
})

// Information related to review
let reviewCount = computed(() => props.hotel.property.reviewCount)
let reviewScore = computed(() => Math.round(props.hotel.property.reviewScore / 2))
let reviewScoreWord = computed(() => props.hotel.property.reviewScoreWord)

// information related to price
let strikethroughPrice = computed(() => {
    if (props.hotel.property.priceBreakdown.strikethroughPrice) {
        return Math.round(props.hotel.property.priceBreakdown.strikethroughPrice.value)
    } else {
        return 0
    }
})
let grossPrice = computed(() => Math.round(props.hotel.property.priceBreakdown.grossPrice.value))
let benefitBadge = computed(() => {
    if(props.hotel.property.priceBreakdown.benefitBadges.length){
        return props.hotel.property.priceBreakdown.benefitBadges[0].text
    }else{
        return ""
    }
})


let discount = computed(() => strikethroughPrice.value !== 0 ? Math.round(((strikethroughPrice.value - grossPrice.value) / strikethroughPrice.value) * 100) : 0)

let priceDynamicStyling = computed(() => strikethroughPrice.value === 0 ? 'justify-end' : 'justify-between')

</script>
