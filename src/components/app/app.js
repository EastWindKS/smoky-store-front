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
import {PrivateRouter} from "../../services/PrivateRoute";
import {OrderList} from "../admin/orderList";
import {CheckOut} from "../pages/checkout/checkout";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route exact path={"/checkout"} component={CheckOut}/>
                <Route exact path={"/"} component={MainPage}/>
                <Route exact path={"/catalog"} component={TobaccoCompaniesList}/>
                <Route exact path={"/tobacco"} component={TobaccoList}/>
                <Route exact path={"/tobacco/:name/:id"} component={CurrentTobaccoItem}/>
                <Route exact path={"/admin-authorization"} component={AdminAuthorizationForm}/>
                <Route exact path={"/admin-panel"}>
                    <PrivateRouter path={"/admin-panel"} component={AdminPanel}/>
                </Route>
                <Route exact path={"/admin-panel/addingCompany"}>
                    <PrivateRouter path={"/admin-panel/addingCompany"} component={AddingCompany}/>
                </Route>
                <Route exact path={"/admin-panel/deleteCompany"}>
                    <PrivateRouter path={"/admin-panel/deleteCompany"} component={DeleteCompany}/>
                </Route>
                <Route exact path={"/admin-panel/updateCompany"}>
                    <PrivateRouter path={"/admin-panel/updateCompany"} component={UpdateCompany}/>
                </Route>
                <Route exact path={"/admin-panel/orders"}>
                    <PrivateRouter path={"/admin-panel/orders"} component={OrderList}/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
};
