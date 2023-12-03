import axios from "axios";
import { checkInLocalStorage, checkTokenValidity } from "@/helpers/utils";
import { isAuthorized } from '../store/auth'


const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/'


export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'X-RapidAPI-Key': '7f3f56a7ffmsh295d5078ea3ff32p155409jsn936e06fa82ef',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    },
})

axiosInstance.interceptors.request.use((req) => {
    if (req.headers.requiresNoToken) {
        return req
    } else {
        const isValidToken = checkTokenValidity()
        if (isValidToken) {
            return req
        } else {
            // localStorage.clear()
            localStorage.removeItem('auth')
            isAuthorized.value = false
            // location.pathname = '/signin'
            return req

        }
    }
})

