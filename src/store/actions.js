import {
    fetchAllTobaccoCompaniesFromApi,
    fetchTobaccoCompaniesByStrFromApi,
    fetchTobaccoByCompanyFromApi, fetchCurrentTobaccoItemFromApi, getAccessAdminFromApi, setAuthorizationToken
} from "../services/webapi";
import jwt from "jsonwebtoken"


export const ACTION_TYPES = {
    SAVING_TOBACCO_FILTER: "SAVING_TOBACCO_COMPANIES_FILTER",
    FETCH_ALL_TOBACCO_COMPANIES: "FETCH_ALL_TOBACCO_COMPANIES",
    FETCH_TOBACCO_COMPANIES_WITH_FILTER: "FETCH_TOBACCO_COMPANIES_WITH_FILTER",
    FETCH_TOBACCO_BY_COMPANY_NAME: "FETCH_TOBACCO_BY_COMPANY_NAME",
    FETCH_CURRENT_TOBACCO_ITEM: "FETCH_CURRENT_TOBACCO_ITEM",
    ACCESS_ADMIN_LOGIN: "ACCESS_ADMIN_LOGIN",
    LOG_OUT_USER: "LOG_OUT_USER",
    ACCESS_ADMIN_LOGIN_ERROR: "ACCESS_ADMIN_LOGIN_ERROR",
    SET_CURRENT_USER: "SET_CURRENT_USER",
    POST_COMPANY_DATA: "POST_COMPANY_DATA",
    COLLECT_ADD_COMPANY_DATA: "COLLECT_ADD_COMPANY_DATA",
    COUNTING_BADGE: "COUNTING_BADGE",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART"

};
const getAccessAdmin = () => {
    return {type: ACTION_TYPES.ACCESS_ADMIN_LOGIN}
};
const errorAccessAdmin = () => {
    return {
        type: ACTION_TYPES.ACCESS_ADMIN_LOGIN_ERROR
    }
};

export const addToShopCartItem = (item) => dispatch => {
    dispatch({
        type: ACTION_TYPES.ADD_ITEM_TO_CART,
        value: item
    });
};
export const setCurrentUser = (user) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_USER,
        user
    }
};
export const logOutUser = () => {
    return {
        type: ACTION_TYPES.LOG_OUT_USER
    }
}
export const accessAdmin = (data) => {
    return (dispatch) => {
        dispatch(getAccessAdmin());
        getAccessAdminFromApi(data)
            .then(response => {
                const token = response.data.access_token;
                const decodeToken = jwt.decode(token);
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(decodeToken))
            }).catch(error => dispatch(errorAccessAdmin()));
    }
};
export const fetchTobaccoItemById = (id) => dispatch => {

    fetchCurrentTobaccoItemFromApi(id).then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_CURRENT_TOBACCO_ITEM,
            value: response.data
        });
    }).catch(error => console.log(error))
};
export const fetchTobaccoByCompany = (id) => dispatch => {
    fetchTobaccoByCompanyFromApi(id).then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_TOBACCO_BY_COMPANY_NAME,
            value: response.data
        })
    }).catch(error => console.log(error))
};
export const fetchAllTobaccoCompanies = () => dispatch => {
    fetchAllTobaccoCompaniesFromApi().then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL_TOBACCO_COMPANIES,
            value: response.data
        })
    }).catch(error => console.log(error));
};
export const fetchAllTobaccoCompaniesWithFilter = (soft, middle, rare) => dispatch => {
    fetchTobaccoCompaniesByStrFromApi(soft, middle, rare).then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_TOBACCO_COMPANIES_WITH_FILTER,
            value: response.data
        })
    }).catch(error => console.log(error));
};
export const savingAddCompanyData = (key, value) => dispatch => {
    dispatch({
        type: ACTION_TYPES.COLLECT_ADD_COMPANY_DATA,
        key: key,
        value: value
    })
};
export const savingTobaccoFilter = (key, value) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SAVING_TOBACCO_FILTER,
        key: key,
        value: value
    })
};
export const countBadge = () => dispatch => {
    dispatch(
        {
            type: ACTION_TYPES.COUNTING_BADGE,
        }
    )
}