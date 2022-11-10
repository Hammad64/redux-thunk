import { combineReducers } from "redux";
import userReducer from "./user/userReducers"
import itemReducer from "./items/itemReducer"



const rootReducer=combineReducers({
    user:userReducer,
    item:itemReducer
})

export default rootReducer

