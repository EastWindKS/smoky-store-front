import React, {useEffect, useState} from "react";
import {useStyles} from "./styles"
import {connect} from "react-redux";
import {fetchTobaccoByCompany} from "../../../../store/actions";
import {Backdrop, CircularProgress, Grid} from "@material-ui/core";
import {TobaccoItem} from "./tobaccoItem";

const _tobaccoList = ({fetchTobacco, tobaccoList}) => {
    const classes = useStyles();

    useEffect(() => {
        document.title = `${sessionStorage.getItem("companyName")} list`;
        fetchTobacco(sessionStorage.getItem("companyId"));
    }, []);
    const tobaccoItems = tobaccoList.map((item) => {
        return (
            <TobaccoItem key={item.flavor} name={item.flavor} imgUrl={item.imgUrl} id={item.productId}/>
        )
    });
    const load = <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color={"secondary"}/>
    </Backdrop>;
    const content = <Grid container>
        <Grid item xs={3}/>
        <Grid container item xs={8} spacing={5}>
            {tobaccoItems}
        </Grid>
        <Grid item xs={1}/>
    </Grid>;
    return (
        <div className={classes.root}>
            {tobaccoList.length === 0 && load}
            {tobaccoList.length > 0 && content}
        </div>
    )
};
const mapStateToProps = state => ({
    tobaccoList: state.fetchReducer.tobaccoItemsList
});
const mapActionsToProps = {
    fetchTobacco: (id) => fetchTobaccoByCompany(id),
};
export const tobaccoList = connect(mapStateToProps, mapActionsToProps)(_tobaccoList);