import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {filterReducer, fetchReducer} from "./reducer";


const reducers = combineReducers({
    fetchReducer: fetchReducer,
    filterReducer: filterReducer
});
export const store = createStore(reducers, compose(applyMiddleware(thunk)));

