import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {filterReducer, fetchReducer, addCompanyDataReducer, authReducer} from "./reducer";
import {setAuthorizationToken} from "../services/webapi";
import {logOutUser, setCurrentUser} from "./actions";
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

    let expireTime = jwt.decode(localStorage.jwtToken);
    let currentTime = Date.now() / 1000;
    if (currentTime > expireTime.exp) {
        localStorage.removeItem("jwtToken");
        store.dispatch(setCurrentUser({}));
        store.dispatch(logOutUser());
        console.log("expire")
    } else {
        console.log("not yet")
    }
}
