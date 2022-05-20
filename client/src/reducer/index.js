import counterReducer from "./counter";
import isLogged from "./isLogged";
import addQues from './addQues'
import { combineReducers } from "redux";

 const allReducer=combineReducers({
    counter:counterReducer,
    logged:isLogged,
    addQues:addQues
})

export default allReducer