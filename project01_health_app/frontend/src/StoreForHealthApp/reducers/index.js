import {combineReducers} from "redux";
import PopularSpecialitiesReducer from "./PopularSpecialitiesReducer";
import LoginOrNot from "./LoginReducer";


const allReducers = combineReducers({
    getAllPopularSpecialities: PopularSpecialitiesReducer,
    loginOrNot: LoginOrNot
});

export default allReducers;