import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./userTypes"
import axios from "axios"

export const  fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

export const  fetchUsersSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users

    }
}

export const  fetchUsersFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error

    }
}


export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            console.log("res",res.data.products)
            const data=res.data.products
            const newData=data.slice(1,4)
            dispatch(fetchUsersSuccess(newData))
            console.log("res1",newData)
            // dispatch(fetchUsersSuccess(newData))
        })
        .catch((error)=>{
            const errorMessage=error.message
            dispatch(fetchUsersFailure(errorMessage))

        })



    }
}