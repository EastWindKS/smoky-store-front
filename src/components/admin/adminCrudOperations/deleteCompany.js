import React, {useEffect, useState} from "react";
import {useStyles} from "./styles";
import {FormControl, Input, InputLabel, MenuItem, Select, Button} from "@material-ui/core";
import {connect} from "react-redux";
import {fetchAllTobaccoCompanies} from "../../../store/actions"
import {deleteCompany} from "../../../services/webapi";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};
const _deleteCompany = ({fetchCompanies, companyList}) => {
    const classes = useStyles();
    const [selectedCompany, setSelectedCompany] = useState("");
    const [id, setId] = useState();
    useEffect(() => {
        fetchCompanies();
    }, []);
    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id={"chooseCompany"} className={classes.inputLabel}>Select company to delete</InputLabel>
                <Select
                    onChange={(event) => {
                        setSelectedCompany(event.target.value);
                        setId(event.currentTarget.id)
                    }}
                    value={selectedCompany}
                    MenuProps={MenuProps}
                    input={<Input/>}
                    labelId={"chooseCompany"}>
                    {companyList?.map(item => {
                        const name = item.companyName;
                        const companyId = item.companyId;
                        return (
                            <MenuItem value={name} id={companyId}>
                                {name}
                            </MenuItem>
                        )
                    })}
                    ))}
                </Select>
            </FormControl>
            <Button variant={"contained"} color={"secondary"} onClick={() => {
                deleteCompany(id);
            }}>Delete company</Button>
        </div>
    )
};
const mapStateToProps = state => ({
    companyList: state.fetchReducer.tobaccoCompaniesList
});
const mapActionsToProps = {
    fetchCompanies: () => fetchAllTobaccoCompanies(),
};
export const DeleteCompany = connect(mapStateToProps, mapActionsToProps)(_deleteCompany);

