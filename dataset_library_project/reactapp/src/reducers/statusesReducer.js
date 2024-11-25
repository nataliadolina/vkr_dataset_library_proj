import {API_URL_STATUSES} from "./../index";
import axios from "axios";

const initialState = {
    statusList: [],
    activeStatuses: []
}

const statusesReducer = (state = initialState, action) => {
    switch (action.type){
        case "statuses/GET_ALL":
            return {...state, statusList: action.payload};
        
        case "statuses/SET_ACTIVE_STATUS":
            if (state.activeStatuses.includes(action.payload)){
                return {...state, activeStatuses: state.activeStatuses.filter(item => item !== action.payload)}
            }
            else{
                console.log([...state.activeStatuses, action.payload])
                return  {...state, activeStatuses: [...state.activeStatuses, action.payload]}
            }

        default:
            return state;
    }
}
export default statusesReducer;