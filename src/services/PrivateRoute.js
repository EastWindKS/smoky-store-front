import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import jwt from "jsonwebtoken";
import {Route, Redirect} from "react-router-dom"

export const PrivateRouter = ({component, path}) => {
    const auth = useSelector(state => state.authReducer.isAuth);
    const [isAuthenticated, setIsAuthenticated] = useState(auth);
    useEffect(() => {
        let token = localStorage.getItem('jwtToken');
        if (token) {
            let tokenExpiration = jwt.decode(token).exp;
            let dateNow = new Date();

            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false)
            } else {
                setIsAuthenticated(true)
            }
        } else {
            setIsAuthenticated(false)
        }
    }, [auth]);

    return (
       isAuthenticated ? <Route exact path={path} component={component} />: <Redirect to={"/admin-authorization"}/>
    )
};