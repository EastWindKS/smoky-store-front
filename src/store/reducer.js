import {ACTION_TYPES} from "./actions";
import {isEmpty} from "lodash"

const collectAddCompanyData = {
    Soft: false,
    Middle: false,
    Rare: false,
    CompanyName: "",
    ImgUrl: ""
};
const filterList = {
    Soft: false,
    Middle: false,
    Rare: false,
};
const authInitial = {
    isAuth: false,
    user: {},
    loading: false
};
const tobaccoList = {
    tobaccoCompaniesList: [],
    tobaccoItemsList: [],
    tobaccoCurrentItem: {},
    postCompany: {},
    badgeCount: 0,
};
const shopCartList = [];

export const cartReducer = (state = shopCartList, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_ITEM_TO_CART:
            return [...state, action.value];
        case ACTION_TYPES.DELETE_ITEM_FROM_CART :
            const i = action.value;
            state.splice(i, 1);
            return [...state];
        default:
            return state;
    }
};

export const authReducer = (state = authInitial, action) => {
    switch (action.type) {
        case ACTION_TYPES.ACCESS_ADMIN_LOGIN:
            return {
                ...state, loading: true
            };
        case ACTION_TYPES.ACCESS_ADMIN_LOGIN_ERROR:
            return {
                ...state, loading: false
            };
        case ACTION_TYPES.LOG_OUT_USER:
            return {
                ...state, isAuth: false
            };
        case ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                isAuth: !isEmpty(action.user),
                user: action.user,
                loading: false
            };
        default:
            return state
    }
};
export const addCompanyDataReducer = (state = collectAddCompanyData, action) => {
    switch (action.type) {
        case    ACTION_TYPES.COLLECT_ADD_COMPANY_DATA:
            return {
                ...state, [action.key]: action.value
            };
        default:
            return state;
    }
};

export const fetchReducer = (state = tobaccoList, action) => {
    switch (action.type) {
        case  ACTION_TYPES.FETCH_TOBACCO_BY_COMPANY_NAME:
            return {
                ...state, tobaccoItemsList: [...action.value]
            };
        case ACTION_TYPES.FETCH_ALL_TOBACCO_COMPANIES :
            return {
                ...state, tobaccoCompaniesList: [...action.value]
            };
        case ACTION_TYPES.FETCH_TOBACCO_COMPANIES_WITH_FILTER :
            return {
                ...state, tobaccoCompaniesList: [...action.value]
            };
        case ACTION_TYPES.FETCH_CURRENT_TOBACCO_ITEM :
            return {
                ...state, tobaccoCurrentItem: {...action.value}
            };
        case ACTION_TYPES.COUNTING_BADGE:
            return {
                ...state, badgeCount: state.badgeCount + 1
            };
        case ACTION_TYPES.DECREMENT_BADGE :
            return {
                ...state, badgeCount: state.badgeCount - 1
            }
        default :
            return state;
    }
};
export const filterReducer = (state = filterList, action) => {
    switch (action.type) {
        case ACTION_TYPES.SAVING_TOBACCO_FILTER:
            return {
                ...state, [action.key]: action.value
            };
        default:
            return state;
    }
};