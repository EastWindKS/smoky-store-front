import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {filterReducer, fetchReducer, addCompanyDataReducer, authReducer} from "./reducer";
import {setAuthorizationToken} from "../services/webapi";
import {setCurrentUser} from "./actions";
import jwt from "jsonwebtoken"


const reducers = combineReducers({
    fetchReducer: fetchReducer,
    filterReducer: filterReducer,
    addCompanyDataReducer: addCompanyDataReducer,
    authReducer: authReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

