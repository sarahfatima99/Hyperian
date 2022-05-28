import counterReducer from "./counter";
import isLogged from "./isLogged";
import addPayload from './addPayload'
import { combineReducers } from "redux";

 const allReducer=combineReducers({
    counter:counterReducer,
    logged:isLogged,
    Payload:addPayload
})

export default allReducer