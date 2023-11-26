import axios from "axios";
import { checkTokenValidity } from "@/helpers/utils";
const baseURL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/'


export const axiosInstance = axios.create({
    baseURL,
    headers: {
        'X-RapidAPI-Key': 'e53a664d56msh1bca4469ebc4cf1p1a9a3djsnee298c99174f',
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