import React, {useEffect, useState} from "react"
import {useStyles} from "./styles";
import {
    CircularProgress,
    Grid,
    Backdrop,
    ListItem,
    List,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListSubheader
} from "@material-ui/core";
import {connect} from "react-redux";
import {
    fetchAllTobaccoCompanies,
    fetchAllTobaccoCompaniesWithFilter,
    savingTobaccoFilter
} from "../../../../store/actions";
import {TobaccoCompanyItem} from "./tobaccoCompanyItem";

const _tobaccoCompaniesList = ({fetchAllTobaccoCompaniesWithFilter, fetchAllTobaccoCompanies, checkboxStatus, companiesList, saveChecksStatus}) => {
    const classes = useStyles();
    useEffect(() => {
        document.title = "Product list";
        fetchAllTobaccoCompanies();
    }, []);
    useEffect(() => {
        fetchAllTobaccoCompaniesWithFilter(checkboxStatus.Soft, checkboxStatus.Middle, checkboxStatus.Rare);
    }, [checkboxStatus]);
    const tobaccoCompanyItem = companiesList?.map((item) => {
        return (
            <TobaccoCompanyItem key={item.companyId} companyId={item.companyId} companyName={item.companyName}
                                imgUrl={item.imgUrl}/>
        )
    });

    const content = <div className={classes.root}>
        <Grid container spacing={5} className={classes.container}>
            <Grid item xs={12} sm={3}>
                <List subheader={<ListSubheader className={classes.subTitle}>Strength:</ListSubheader>}>
                    {Object.entries(checkboxStatus).map((item) => {
                        const key = item[0];
                        const status = item[1];
                        if (key !== "id" && key !=="loading" && key!=="error" && key !== "getAccess") {
                            return (
                                <ListItem key={key} button dense onClick={() => {
                                    saveChecksStatus(key, !checkboxStatus[key]);
                                }}>
                                    <ListItemIcon>
                                        <Checkbox disableRipple inputProps={{"aria-labelledby": key}}
                                                  checked={status}/>
                                    </ListItemIcon>
                                    <ListItemText id={key} primary={key}/>
                                </ListItem>
                            )
                        }
                    })}
                </List>
            </Grid>
            <Grid item container xs={8} spacing={2}>
                {tobaccoCompanyItem}
            </Grid>
            <Grid item xz={1}/>
        </Grid>
    </div>;
    const load = <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color={"secondary"}/>
    </Backdrop>;
    return (
        <div className={classes.root}>
            {companiesList.length === 0 && load}
            {companiesList.length > 0 && content}
        </div>
    )
};

const mapStateToProps = state => ({
    checkboxStatus: state.filterReducer,
    companiesList: state.fetchReducer.tobaccoCompaniesList
});
const mapActionsToProps = {
    fetchAllTobaccoCompanies: () => fetchAllTobaccoCompanies(),
    saveChecksStatus: (key, value) => savingTobaccoFilter(key, value),
    fetchAllTobaccoCompaniesWithFilter: (soft, middle, rare) => fetchAllTobaccoCompaniesWithFilter(soft, middle, rare),
};
export const tobaccoCompaniesList = connect(mapStateToProps, mapActionsToProps)(_tobaccoCompaniesList);