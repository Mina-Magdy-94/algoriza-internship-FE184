import { axiosInstance } from "../apis/axiosInstance"
let getAllCities=()=>{
    return axiosInstance.get('searchDestination',{
        params: {query: 'egypt'},
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
            page_number: filters.page_number || '1'
        }
    })
}


export{getAllCities,searchHotels}