import axios from "axios";
import { checkInLocalStorage, checkTokenValidity } from "@/helpers/utils";
import { isAuthorized } from '../store/auth'


const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/'


export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'X-RapidAPI-Key': '4df8d48c40mshebbee8e2b8c572bp1fb00ejsna400b20a979f',
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

