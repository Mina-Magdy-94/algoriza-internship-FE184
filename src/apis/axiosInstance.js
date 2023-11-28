import axios from "axios";
import { checkTokenValidity } from "@/helpers/utils";
const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/'


export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'X-RapidAPI-Key': 'ed63304da4mshe099ff961c84e88p1da070jsn777769f54e20',
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
            localStorage.clear()
            location.pathname = '/signin'
        }
    }
})