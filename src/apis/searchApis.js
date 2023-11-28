import { axiosInstance } from "../apis/axiosInstance"
let getAllCities=(paramsObject)=>{
    return axiosInstance.get('searchDestination',{
        params:paramsObject ,
        headers:{
            requiresNoToken:true
        }
    })
}

let getSortOptions=(paramsObject)=>{
    return axiosInstance.get('getSortBy',{
        params: paramsObject,
        headers:{
            requiresNoToken:true
        }
    })
}

let searchHotels=(filters)=>{
    return axiosInstance.get('searchHotels',{
        params:{
            dest_id:filters.dest_id,
            search_type: 'CITY',
            arrival_date: filters.arrival_date,
            departure_date: filters.departure_date,
            adults: filters.adults,
            room_qty: filters.room_qty,
            page_number: filters.page_number || '1',
            sort_by:filters.sort_by,
            price_min:filters.price_min,
            price_max:filters.price_max
        }
    })
}


export{getAllCities,searchHotels,getSortOptions}