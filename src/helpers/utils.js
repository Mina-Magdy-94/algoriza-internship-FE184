import { v4 as uuid } from 'uuid'
import { ref } from 'vue'


// Token Related utilities
export let addHours = function (h, date) {
    date.setTime(date.getTime() + (h * 60 * 60 * 1000));
    return date;
}

export let createOrRenewToken = () => {
    let token = uuid()
    let currentDate = new Date()
    let expireDate = addHours(3, currentDate)
    let strigifiedTokenObject = JSON.stringify({ token, expireDate })
    localStorage.setItem('auth', strigifiedTokenObject)
}

let getTokenObject = () => {
    const tokenObject = localStorage.getItem('auth')
    if (tokenObject) {
        return JSON.parse(tokenObject)
    }
}

export let checkTokenValidity = () => {
    const tokenObject = getTokenObject()
    if (!tokenObject) {
        return false
    }
    const currentDate = new Date()
    const expiryDate = new Date(tokenObject.expireDate)
    if (expiryDate > currentDate) {
        return true
    } else {
        return false
    }
}

// Hotel Data Fetching Related Utilities

let checkHotelsInLocalStorage = () => {
    if (localStorage.getItem('hotelsData')) {
        return true
    } else {
        return false
    }
}

let getHotelsDataFromLocalStorage = () => {
    let stringifiedHotelsData = localStorage.getItem('hotelsData')
    let parsedHotelsData = JSON.parse(stringifiedHotelsData)
    return parsedHotelsData
}

export let getSearchParametersFromLocalStorage = () => {
    let searchParameters = localStorage.getItem('searchParameters')
    let parsedSearchParams = JSON.parse(searchParameters)
    return parsedSearchParams
}

let setHotelsDataAndSaveInLocalStorage = async (hotelsFromApiRequests,hotelsMetaData) => {
    let parsedSearchParams = getSearchParametersFromLocalStorage()
    let response = await searchApis.searchHotels(parsedSearchParams)
    let hotelsData = response.data.data
    console.log(hotelsData)
    hotelsFromApiRequests.value = hotelsData.hotels
    hotelsMetaData.value = hotelsData.meta
    let hotelsDataToSetInLocalStorage = JSON.stringify(hotelsData)
    localStorage.setItem('hotelsData', hotelsDataToSetInLocalStorage)
}

export let fetchHotelData = () => {
    let hotelsFromApiRequests = ref([])
    let hotelsMetaData = ref([])

    let isHotelsDataInLocalStorage = checkHotelsInLocalStorage()
    if (!isHotelsDataInLocalStorage) {
        setHotelsDataAndSaveInLocalStorage(hotelsFromApiRequests,hotelsMetaData)
    } else {
        let hotelsDataFromLocalStorage = getHotelsDataFromLocalStorage()
        hotelsFromApiRequests.value = hotelsDataFromLocalStorage.hotels
        hotelsMetaData.value = hotelsDataFromLocalStorage.meta
    }
    return {hotelsFromApiRequests,hotelsMetaData}
}