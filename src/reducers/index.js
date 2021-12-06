import  changeTheNumber  from "./newRed";
import changeVal from "./nanRed";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber,
    changeVal: changeVal
});

export default rootReducer;