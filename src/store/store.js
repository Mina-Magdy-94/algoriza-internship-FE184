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
            // hasLastSavedSearch: false
        },
        isAuthorized: false
    }),
    actions: {
        setLastSavedSearch(savedSearch) {
            this.lastSavedSearch = savedSearch
        },
        setISAuthorized(authValue) {
            this.isAuthorized = authValue
        }
    },

}
)