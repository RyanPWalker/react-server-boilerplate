import { combineReducers } from 'redux';
import appData from './initialState';

const rootReducer = combineReducers({
    appData,
});

export default rootReducer;
