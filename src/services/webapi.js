const axios = require("axios");
const BASE_URL = "http://localhost:63042/api/";

export const fetchAllTobaccoCompaniesFromApi = () => {
    return axios(BASE_URL + "companies");
};
export const fetchTobaccoCompaniesByStrFromApi = (soft, middle, rare) => {
    return axios(BASE_URL + `companies/filter?soft=${soft}&middle=${middle}&rare=${rare}`);
};
export const fetchTobaccoByCompanyFromApi = (id) => {
    return axios.get(BASE_URL + `tproduct/${id}`)
};
export const fetchCurrentTobaccoItemFromApi = (id) => {
    return axios.get(BASE_URL + `tproduct?id=${id}`)
};
export const getAccessAdminFromApi = (login, password) => {
    return axios.get(BASE_URL + `admlogin?login=${login}&password=${password}`)
};
export const postCompanyData = (sendItem) => {
    return axios.post(BASE_URL + "companies", {
        body: sendItem
    });
};
