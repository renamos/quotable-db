import {combineReducers} from 'redux';
import fetchReducer from './fetch-reducer'


//noinspection JSAnnotator
const rootReducer = combineReducers({
    fetchReducer: fetchReducer
});

export default rootReducer;
