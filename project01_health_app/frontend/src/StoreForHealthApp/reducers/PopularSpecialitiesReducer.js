import axios from "axios";

const initialValue = {
    allPopularSpecialities: []
}
const PopularSpecialitiesReducer = (state=initialValue, action) => {
    let getType = action.type;
    let getData = action.payload;
    switch (getType){
        case 'APS':
            return {
                allPopularSpecialities: state.allPopularSpecialities =  getData
            }
        default:
            return state
    }

}
export default PopularSpecialitiesReducer;