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
export const getAccessAdminFromApi = (sendData) => {
    return axios.post(BASE_URL + "login", sendData)
};
export const postCompanyData = (sendItem) => {
    return axios.post(BASE_URL + "companies", sendItem);
};
export const deleteCompany = (id) => {
    return axios.delete(BASE_URL + `companies/${id}`);
};
export const updateCompany = (id, updateData) => {
    return axios.put(BASE_URL + `companies/${id}`, updateData).catch(e => console.log(e))
};
export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
};
