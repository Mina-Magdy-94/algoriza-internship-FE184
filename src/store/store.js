import { defineStore } from "pinia";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        lastSavedSearch: {
            dest_id: null,
            arrival_date: null,
            departure_date: null,
            adults: null,
            room_qty: null,
            page_number: '1',
        },
        isAuthorized: false,
        hotelToCheckOut:{},
        trips:[]
    }),
    actions: {
        setLastSavedSearch(savedSearch) {
            this.lastSavedSearch = savedSearch
        },
        setISAuthorized(authValue) {
            this.isAuthorized = authValue
        },
        setHotelAsCheckOutHotel(hotel){
            this.hotelToCheckOut=hotel
        },
        addTrip(trip){
            this.trips=[...this.trips,trip]
        },
        removeTrip(trip){
            this.trips=this.trips.filter(t=>t.property.name !==trip.property.name)
        },

    },

}
)