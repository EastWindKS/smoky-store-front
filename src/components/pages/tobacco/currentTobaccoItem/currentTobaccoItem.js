import React, {useEffect, useState} from "react";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {fetchTobaccoItemById} from "../../../../store/actions";
import {Grid, Typography, CardMedia, Card, CardContent, Backdrop, CircularProgress} from "@material-ui/core";

const _currentTobaccoItem = ({currentItemInfo, getCurrentItem}) => {
    const classes = useStyles();
    useEffect(() => {
        getCurrentItem(sessionStorage.getItem("currentItemId"));
        console.log(currentItemInfo)
    }, []);
    const load = <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color={"secondary"}/>
    </Backdrop>;
    const content = <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={8}>
            <Typography variant={"h2"}>
                {currentItemInfo.flavor}
            </Typography>
            <Card>
                <CardMedia image={process.env.PUBLIC_URL + `/${currentItemInfo.imgUrl}`} className={classes.cardMedia}/>
                <CardContent>
                    <Typography variant={"h4"}>
                        {currentItemInfo.productDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={1}/>
    </Grid>
    return (
        <div className={classes.root}>
            {Object.keys(currentItemInfo).length === 0  && load}
            {Object.keys(currentItemInfo).length > 0 && content}
        </div>
    )
};
const mapActionsToProps = {
    getCurrentItem: (id) => fetchTobaccoItemById(id),
};
const mapStateToProps = state => ({
    currentItemInfo: state.fetchReducer.tobaccoCurrentItem,
});
export const CurrentTobaccoItem = connect(mapStateToProps, mapActionsToProps)(_currentTobaccoItem);
