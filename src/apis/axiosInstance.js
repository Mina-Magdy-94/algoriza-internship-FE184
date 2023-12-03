import axios from "axios";
import { checkInLocalStorage, checkTokenValidity } from "@/helpers/utils";
import { isAuthorized } from '../store/auth'


const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/'


export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'X-RapidAPI-Key': 'aec239a957msh9e884010dd093fap16e1e6jsnea4d688faa47',
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

