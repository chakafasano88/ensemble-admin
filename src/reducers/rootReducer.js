import { combineReducers } from "redux";
import authReducer from "./auth";
import menuReducer from "./menu";

export default combineReducers({
    auth: authReducer,
    menu: menuReducer
})