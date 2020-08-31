import React from 'react';
import {Header} from "../header/header";
import {BrowserRouter, Route} from 'react-router-dom';
import {MainPage} from "../pages/mainPage/mainPage";
import {TobaccoCompaniesList} from "../pages/tobacco/tobaccoCompaniesList/tobaccoCompaniesList"
import {TobaccoList} from "../pages/tobacco/tobaccoList/tobaccoList"
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {CurrentTobaccoItem} from "../pages/tobacco/currentTobaccoItem/currentTobaccoItem";
import {AdminAuthorizationForm} from "../admin/adminAuthorizationForm";
import {AdminPanel} from "../admin/adminPanel";
import {AddingCompany} from "../admin/adminCrudOperations/addingCompany";
import {DeleteCompany} from "../admin/adminCrudOperations/deleteCompany";
import {UpdateCompany} from "../admin/adminCrudOperations/updateCompany";
import {PrivateRoute} from "jwt-auth-react";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route exact path={"/"} component={MainPage}/>
                <Route exact path={"/catalog"} component={TobaccoCompaniesList}/>
                <Route exact path={"/tobacco"} component={TobaccoList}/>
                <Route exact path={"/tobacco/:name/:id"} component={CurrentTobaccoItem}/>
                <Route exact path={"/admin-authorization"} component={AdminAuthorizationForm}/>
                <PrivateRoute exact path={"/admin-panel"} component={AdminPanel}/>
                <PrivateRoute exact path={"/admin-panel/addingCompany"} component={AddingCompany}/>
                <PrivateRoute exact path={"/admin-panel/deleteCompany"} component={DeleteCompany}/>
                <PrivateRoute exact path={"/admin-panel/updateCompany"} component={UpdateCompany}/>
            </BrowserRouter>
        </Provider>
    );
};
