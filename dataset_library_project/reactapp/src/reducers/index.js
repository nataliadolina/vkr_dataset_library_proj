import { combineReducers } from 'redux';
import datasetsListReducer from './datasetsListReducer';
import statusesReducer from "./statusesReducer"

const rootReducer = combineReducers({
    datasets: datasetsListReducer,
    statuses: statusesReducer
});
export default rootReducer;