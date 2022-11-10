import { ActionTypes } from "@mui/base"
import {ITEM_ADD,ITEM_REMOVE,ADD_QUANTITY,REMOVE_QUANTITY,ALL_ITEMS_REMOVED} from "./itemTypes"

let quantity=1
export const  buyItem=(data)=>{
    
    return {
        type:ITEM_ADD,
        payload:{...data,quantity}
    }
}

export const  removeItem=(data)=>{
    return {
        type:ITEM_REMOVE,
        payload:data
    }
}

export const  addQuantity=(data)=>{
    return {
        type:ADD_QUANTITY,
        payload:data
        
    }
}
export const  removeQuantity=(data)=>{
    return {
        type:REMOVE_QUANTITY,
        payload:data
        
    }
}

export const allItemsRemoved=()=>{
    return {
        type:ALL_ITEMS_REMOVED,
    }
}