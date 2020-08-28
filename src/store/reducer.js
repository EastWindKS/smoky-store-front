import {ACTION_TYPES} from "./actions";

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
    getAccess: false,
    loading: false,
    error: false
};
const tobaccoList = {
    tobaccoCompaniesList: [],
    tobaccoItemsList: [],
    tobaccoCurrentItem: {},
    postCompany: {},
    badgeCount: 0,
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
        case ACTION_TYPES.ACCESS_ADMIN_LOGIN:
            return {
                ...state, loading: true
            };
        case ACTION_TYPES.ACCESS_ADMIN_SUCCESS :
            return {
                ...state, loading: false, getAccess: action.value
            };
        case ACTION_TYPES.ACCESS_ADMIN_ERROR:
            return {
                ...state, loading: false, error: true
            };
        default:
            return state;
    }
};