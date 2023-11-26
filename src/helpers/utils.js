import { v4 as uuid } from 'uuid'

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

let getTokenObject=()=>{
    const tokenObject=localStorage.getItem('auth')
    if(tokenObject){
        return JSON.parse(tokenObject)
    }
}

export let checkTokenValidity=()=>{
    const tokenObject=getTokenObject()
    if(!tokenObject){
        return false
    }
    const currentDate=new Date()
    const expiryDate=new Date(tokenObject.expireDate) 
    if(expiryDate>currentDate){
        return true
    }else{
        return false
    }
}