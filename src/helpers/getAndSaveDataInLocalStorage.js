import { ref } from "vue"

export const getDataAndSaveData = () => {
    let dataToRetrieve = ref([])
    let getAndSave = (itemKeyInLocalStorage, apiFunctionToCall, functionArgument, filterFunction) => {
        if (!localStorage.getItem(itemKeyInLocalStorage)) {
            apiFunctionToCall(functionArgument).then(res => {
                const dataArray = res.data.data
                console.log(dataArray)
                if (filterFunction) {
                    const filteredData = dataArray.filter(filterFunction)
                    dataToRetrieve.value = filteredData
                    let storedData = JSON.stringify(filteredData)
                    localStorage.setItem(itemKeyInLocalStorage, storedData)
                } else {
                    dataToRetrieve.value = dataArray
                    let storedData = JSON.stringify(dataArray)
                    localStorage.setItem(itemKeyInLocalStorage, storedData)
                }
            })
        } else {
            let StringifiedData = localStorage.getItem(itemKeyInLocalStorage)
            let parsedSortOptions = JSON.parse(StringifiedData)
            dataToRetrieve.value = parsedSortOptions
        }
    }
    return { dataToRetrieve, getAndSave }
}