<template>
    <form @submit.prevent="submitForm"
        class="flex flex-col justify-between w-[441px] min-h-[383px] m-[60px] p-5 box-border mx-auto">
        <h2 class="w-[401px] h-[32px] flex justify-center items-center mb-5  text-[28px] font-semibold text-center ">Sign in
        </h2>
        <div class="flex flex-col justify-between min-h-[68px] w-[400px] ">
            <p class="w-[88px] h-5 text-sm font-medium text-[#181818] ">Email address</p>
            <input id="email" name="email" :value="email" type="text" @input="validateInputs"
                class="w-[400px] h-11 bg-[#F2F2F2] rounded-[4px] border-none outline-none pl-[10px]">
            <p v-if="emailError" class="text-red-400 text-sm">{{ emailError }}</p>
        </div>
        <div class="flex flex-col justify-between min-h-[68px] w-[400px] ">
            <p class="w-[61px] h-5 text-sm font-medium text-[#181818] ">Password</p>
            <div class="flex flex-nowrap justify-evenly items-center bg-[#F2F2F2] w-[400px] h-11 rounded-[4px]">
                <input id="password" name="password" :value="password" @input="validateInputs" ref="passwordInput"
                    type="password" class="w-[350px] h-full border-none outline-none pl-[2px] bg-[#F2F2F2]">
                <img src="../../assets//icons/eye.svg" class="w-5 h-5 cursor-pointer" @click="togglePasswordVisibility">
            </div>
            <p v-if="passwordError" class="text-red-400 text-sm">{{ passwordError }}</p>
        </div>
        <BaseButton button-text="Sign in" class="w-[400px] h-[43px] font-medium text-[15px] box-border rounded-[4px]" />
        <p class="w-[400px] h-[19px] text-center flex justify-center items-center bg-green-2">Don’t have an account? <span
                class="text-[#2F80ED]">Register</span></p>
    </form>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { ref } from 'vue';
import {createOrRenewToken} from '../../helpers/utils'
import { useRouter } from 'vue-router';
import { isAuthorized } from '@/store/auth';

let router=useRouter()

let passwordInput = ref(null)

let email = ref('')
let emailError = ref(null)

let password = ref('')
let passwordError = ref(null)

let togglePasswordVisibility = () => {
    passwordInput.value.type = passwordInput.value.type === 'password' ? 'text' : 'password'
    passwordInput.value.focus()
}


let validateInputs = (e) => {
    const emailRegEx = /\w{1,20}@[a-zA-z]+\.\w+/ig
    const passwordRegEx = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    let validate = (inputValue, regex, inputError, errorMsgToSet) => {
        inputValue.value = e.target.value
        if (regex.test(e.target.value)) {
            inputError.value = null
        } else {
            inputError.value = errorMsgToSet
        }
    }

    if (e.target.name === 'email') {
        validate(email, emailRegEx, emailError, 'please write a valid email ex: a@a.a')
    } else if (e.target.name === 'password') {
        validate(password, passwordRegEx, passwordError, 'password should be at least 8 characters containing at least one capital letter and one digit')
    }
}


let submitForm = () => {
    if (!(emailError.value || passwordError.value)) {
        createOrRenewToken()
        isAuthorized.value=true
        router.push({name:'searchResults'})
    }
}
</script>
