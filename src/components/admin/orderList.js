import React from "react";
import {useStyles} from "./styles";
import {connect} from "react-redux";

const _orderList = () => {
    const classes = useStyles();
    return (
        <div>Hello</div>
    )
};
export const OrderList = connect()(_orderList);