<template>
    <form class="w-[810px] rounded-md" @submit.prevent="submitForm">
        <!-- first card -->
        <CheckOutViewCard img-src="security-user.svg" title="Room 1"
            subtitle="2 adults, 1 double bed and 1 twin bed, Non-smoking" styling-of-title="text-[#FFFFFF]"
            styling-of-slot-root="p-[32px] pb-[40px]">
            <div class="pb-[40px] h-[208px]">
                <div class="w-[500px] h-[196px] flex flex-col justify-between">
                    <!-- first row -->
                    <div class="flex justify-between">
                        <div class="w-[240px] h-[68px] flex flex-col justify-between rounded-[4px]">
                            <label for="first-name"
                                class="text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">First
                                name</label>
                            <input type="text" id="first-name" name="firstName" :ref="assignRef('firstName')"
                                v-model="formValues.firstName" @input="validate"
                                :class="[`rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1`]">
                        </div>
                        <div class="w-[240px] h-[68px] flex flex-col justify-between rounded-[4px]">
                            <label for="last-name"
                                class="text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">Last
                                name</label>
                            <input type="text" id="last-name" name="lastName" :ref="assignRef('lastName')"
                                v-model="formValues.lastName"
                                class="rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                        </div>
                    </div>
                    <!-- second row -->
                    <div class="flex justify-between">
                        <div class="w-[150px] h-[68px] flex flex-col justify-between rounded-[4px] relative">
                            <label for="mobile"
                                class="text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">
                                Mobile number
                            </label>
                            <select disabled
                                class="rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pl-[48px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                                <option value="+20">+02</option>
                            </select>
                            <img src="../../assets/icons/EG-Egypt-Flag-icon.webp" alt="Eg Flag"
                                class="absolute top-[32px] left-[12px] w-[24px] h-[24px]">
                        </div>
                        <div class="w-[338px] h-[68px] flex flex-col justify-end rounded-[4px]">
                            <input type="number" id="mobile" name="mobile" :ref="assignRef('mobile')"
                                v-model="formValues.mobile"
                                class="rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                        </div>
                    </div>
                    <!-- third row -->
                    <div class="h-[20px] flex justify-start">
                        <input type="checkbox" id="recieve-alerts" name="recieveAlerts" :ref="assignRef('recieveAlerts')"
                            v-model="formValues.recieveAlerts">
                        <label for="recive-alerts"
                            class="text-[#333] text-[14px] font-normal leading-normal tracking-[0.28px]">Receive text
                            alerts about this trip.</label>
                    </div>
                </div>
            </div>
        </CheckOutViewCard>

        <!-- second card -->
        <CheckOutViewCard img-src="card-tick 1.svg" title="Payment options"
            styling-of-slot-root="p-[32px] pb-[40px] pt-0 h-fit" styling-of-title="text-[#FFFFFF]">
            <!-- tab -->
            <div
                class="background: linear-gradient(180deg, rgba(244, 244, 244, 0.00) 0%, #FFF 100%); text-[14px] font-normal leading-normal tracking-[0.28px] text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-[32px]">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2">
                        <!-- todo change anchor tag to router-link -->
                        <a href="#"
                            class="inline-block p-3 text-blue-1 border-b-[3px] border-blue-1 rounded-t-lg active dark:text-blue-1 dark:border-blue-1">Debit/Credit
                            Card</a>
                    </li>
                </ul>
            </div>
            <!-- payment options -->
            <section class="mb-[26px]">
                <div class=" flex justify-start">
                    <img src="../../assets/icons/image 6.svg" alt="mastercard" class="m6-[6px]">
                    <img src="../../assets/icons/image 7.svg" alt="visa" class="m6-[6px]">
                    <img src="../../assets/icons/image 8.svg" alt="Am express" class="m6-[6px]">
                    <img src="../../assets/icons/image 10.svg" alt="Discover" class="m6-[6px]">
                </div>
            </section>

            <!-- inputs container -->
            <section class="h-[330px] w-[536px] flex flex-col justify-between">
                <!-- first input -->
                <div class="h-[68px] flex flex-col justify-between">
                    <label for="full-name"
                        class="h-[20px] text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">Name
                        on card</label>
                    <div class="h-[68px] flex justify-between items-center">
                        <input type="text" id="full-name" name="nameOnCard" :ref="assignRef('nameOnCard')"
                            v-model="formValues.nameOnCard"
                            class="h-[44px] w-[500px] p-[12px] pt-[11px] bg-[#F2F2F2] rounded-md outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                        <img src="../../assets/icons/right-circle.svg" alt="valid icon" class="w-[20px] h-[20px]">
                    </div>
                </div>
                <!-- second input -->
                <div class="h-[68px] flex flex-col justify-between">
                    <label for="card-number"
                        class="h-[20px] text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">Debit/Credit
                        card number</label>
                    <div class="h-[68px] flex justify-between items-center">
                        <input type="text" id="card-number" name="cardNumber" :ref="assignRef('cardNumber')"
                            v-model="formValues.cardNumber"
                            class="h-[44px] w-[500px] p-[12px] pt-[11px] bg-[#F2F2F2] rounded-md outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                        <img src="../../assets/icons/right-circle.svg" alt="valid icon" class="w-[20px] h-[20px]">
                    </div>
                </div>
                <!-- third row -->
                <div class="h-[66px] flex flex-col justify-between">
                    <label class="h-[20px] text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">
                        Expiration Date</label>
                    <div class="h-[42px] flex justify-start items-center">
                        <select :ref="assignRef('expirationMonth')" v-model="formValues.expirationMonth"
                            class="h-[42px] w-[150px] p-[12px] pt-[11px] bg-[#F2F2F2] rounded-md outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1 mr-[12px]">
                            <option
                                v-for="month in ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']"
                                :value="month.slice(0, 3)">{{ month.replace(/^\w/, (c) => c.toUpperCase()) }}</option>
                        </select>
                        <select :ref="assignRef('expirationYear')" v-model="formValues.expirationYear"
                            class="h-[42px] w-[150px] p-[12px] pt-[11px] bg-[#F2F2F2] rounded-md outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1 mr-[16px]">
                            <option v-for="year in expirationDateOptions" :value="year">{{ year }}</option>
                        </select>
                        <img src="../../assets/icons/right-circle.svg" alt="valid icon" class="w-[20px] h-[20px]">
                    </div>
                </div>
                <!-- forth row -->
                <div class="h-[68px] flex justify-between items-center">
                    <div class="w-[240px] h-[68px] flex flex-col justify-between rounded-[4px]">
                        <label for="security-code"
                            class="text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">
                            Security Code</label>
                        <input type="number" id="security-code" name="securityCode" :ref="assignRef('securityCode')"
                            v-model="formValues.securityCode"
                            class="rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                    </div>
                    <div class="w-[240px] h-[68px] flex flex-col justify-between rounded-[4px]">
                        <label for="zip-code"
                            class="text-[#181818] text-[14px] font-semibold leading-[19.6px] tracking-[0.28px]">
                            Billing Zip code</label>
                        <input type="number" id="zip-code" name="billingZipCode" :ref="assignRef('billingZipCode')"
                            v-model="formValues.billingZipCode"
                            class="rounded-[4px] bg-[#F2F2F2] flex items-center p-[12px] pt-[11px] outline-none focus:bg-[#FFF] focus:border-[1px] hover-border-solid focus:border-blue-1">
                    </div>
                    <img src="../../assets/icons/right-circle.svg" alt="valid icon"
                        class="w-[20px] h-[20px] relative bottom-[10px] self-end">
                </div>
            </section>
        </CheckOutViewCard>

        <!-- third card -->
        <CheckOutViewCard title="Important information about your booking"
            styling-of-title="bg-[#F2C94C] text-[#333] text-[18px] tracking-[0.18px]"
            styling-of-slot-root="px-[24px] pt-[32px] pb-[35px] h-[363px]">
            <article class="w-[762px] mb-[32px] text-[#333] text-[15px] font-normal leading-[22.5px] tracking-[0.3px]">
                <ol class="list list-inside list-decimal">
                    <li> This rate is non-refundable. If you change or cancel your booking you will not get a refund or
                        credit to
                        use for a future stay.
                    </li>
                    <li>
                        Stay extensions will require a new reservation.
                    </li>
                    <li>
                        Front desk staff will greet guests on arrival
                    </li>
                    <li>
                        No refunds will be issued for late check-in or early check-out.
                    </li>
                </ol>
            </article>
            <p class="text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px] mb-[24px]">
                By clicking the button below, I acknowledge that I have reviewed the <span
                    class="text-blue-1 text-[14px] font-normal tracking-[0.2px]">Privacy Statement</span> and have reviewd
                and accept the <span class="text-blue-1 text-[14px] font-normal tracking-[0.2px]">Rules and
                    Restrictions</span> and <span class="text-blue-1 text-[14px] font-normal tracking-[0.2px]">Terms of
                    Use.</span>
            </p>

            <BaseButton button-text="Complete Booking"
                class="text-[15px] leading-[20px] tracking-[0.3px] py-[12px] px-[18px] mb-[21px]" />
            <div class="flex justify-start">
                <img src="../../assets/icons/lock-circle.svg" alt="lock" class="w-[24px] h-[24px]">
                <p class="text-[#4F4F4F] text-[14px] font-normal leading-[19.6px] tracking-[0.28px]">
                    We use secure transmission and encrypted storage to protect your personal information
                </p>
            </div>
        </CheckOutViewCard>

    </form>
</template>

<script setup>
import { computed, ref } from 'vue';
import CheckOutViewCard from './CheckOutViewCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

let props = defineProps({
    openModal: Function
})

let refMap = ref({})

const assignRef = (fieldName) => (el) => {
    refMap.value[fieldName] = el;
};


let formValues = ref({
    firstName: ref(null),
    lastName: ref(null),
    mobile: ref(null),
    recieveAlerts: ref(false),
    nameOnCard: ref(null),
    cardNumber: ref(null),
    expirationMonth: ref(null),
    expirationYear: ref(null),
    securityCode: ref(null),
    billingZipCode: ref(null)
})



// let validate = (e) => {
//     let regexObj = {
//         "firstName": /^[A-Z][a-z]{2,}$/, //name must be at least 3 letters with first letter capitalized
//         'lastName': /^[A-Z][a-z]{2,}$/, //name must be at least 3 letters with first letter capitalized
//         'mobile': '0(10|11|12|14|15|16|17|18|19)\d{8}$',//mobile must be 11 numbers starting with 010 011 012 014 015 016 0170 
//         'nameOnCard': /`${formValues.firstName} ${formValues.lastName}`/,
//         'cardNumber': /\d{16}/,//16 digits
//         'securityCode': /\d{3}/,
//         'billingZipCode': '\d{5}'
//     }

//     let regex = regexObj[e.target.name]
//     // console.log({regex})
//     let isValid = regex.test(e.target.value)
//     // console.log({isValid})
//     // return isValid
//     if(!isValid){
//         e.target.classList.add('invalid')
//     }else{
//         e.target.classList.remove('invalid')
//     }
// }

let submitForm = () => {
    if (!Object.values(formValues.value).includes(null)) {
        props.openModal()
    } else {
        let emptyInputs = Object.keys(formValues.value).filter(key => { return formValues.value[key] === null })
        emptyInputs.forEach(key => refMap.value[key].classList.add('invalid'))
    }
}

let expirationDateOptions = computed(() => {
    let dateArray = []
    let generateYears = (start, end) => {
        for (let i = start; i <= end; i++) {
            dateArray.push(i)
        }
        return dateArray
    }
    return generateYears(2023, 2040)
})


</script>
<style scoped>.invalid {
    border: 1px solid red
}</style>
