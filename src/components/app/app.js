import React from 'react';
import {Header} from "../header/header";
import {BrowserRouter, Route} from 'react-router-dom';
import {MainPage} from "../pages/mainPage/mainPage";
import {tobaccoCompaniesList} from  "../pages/tobacco/tobaccoCompaniesList/tobaccoCompaniesList"
import {tobaccoList} from "../pages/tobacco/tobaccoList/tobaccoList"
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {CurrentTobaccoItem} from "../pages/tobacco/currentTobaccoItem/currentTobaccoItem";
import {adminAuthorizationForm} from "../admin/adminAuthorizationForm";
import {adminPanel} from "../admin/adminPanel";
import {AddingCompany} from "../admin/adminCrudOperations/addingCompany"

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route exact path={"/"} component={MainPage}/>
                <Route exact path={"/catalog"} component={tobaccoCompaniesList}/>
                <Route exact path={"/tobacco"} component={tobaccoList}/>
                <Route exact path={"/tobacco/:name/:id"} component={CurrentTobaccoItem}/>
                <Route exact path={"/admin-authorization"} component={adminAuthorizationForm}/>
                <Route exact path={"/admin-panel"} component={adminPanel}/>
                <Route exact path={"/admin-panel/addingCompany"} component={AddingCompany}/>
            </BrowserRouter>
        </Provider>
    );
};
