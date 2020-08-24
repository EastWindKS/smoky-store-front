import React, {useEffect, useState} from "react";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {Button, FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {updateCompany} from "../../../services/webapi";
import {fetchAllTobaccoCompanies} from "../../../store/actions";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};
const _updateCompany = ({companyList, fetchCompanies}) => {
    const [updateName, setUpdateName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [updateImgUrl, setUpdateImgUrl] = useState("");
    const [id, setId] = useState();
    const classes = useStyles();
    const sendUpdateData = () => {
        const sendItem = {
            CompanyName: updateName,
            ImgUrl: updateImgUrl
        };
        console.log(sendItem)
        updateCompany(id, sendItem)
    };
    useEffect(() => {
        fetchCompanies();
    }, []);
    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id={"chooseCompany"} className={classes.inputLabel}>Select company to update</InputLabel>
                <Select
                    onChange={(event) => {
                        setCompanyName(event.target.value);
                        setUpdateName(event.target.value);
                        setId(event.currentTarget.id);
                        setImgUrl(companyList[event.currentTarget.id - 1].imgUrl);
                        setUpdateImgUrl(companyList[event.currentTarget.id - 1].imgUrl);
                    }}
                    value={companyName}
                    MenuProps={MenuProps}
                    input={<Input/>}
                    labelId={"chooseCompany"}>
                    {companyList?.map(item => {
                        const name = item.companyName;
                        const url = item.ImgUrl
                        const companyId = item.companyId;
                        return (
                            <MenuItem value={name} id={companyId} key={name}>
                                {name}
                            </MenuItem>
                        )
                    })}
                </Select>
                <TextField className={classes.textField} label={"Company name"} value={updateName}
                           onChange={(event) => setUpdateName(event.target.value)}/>
                <TextField className={classes.textField} label={"Img Url"} value={updateImgUrl}
                           onChange={(event) => setUpdateImgUrl(event.target.value)}/>
            </FormControl>
            <Button variant={"contained"} color={"secondary"} onClick={sendUpdateData}>Update</Button>
        </div>
    )
};
const mapActionsToProps = {
    fetchCompanies: () => fetchAllTobaccoCompanies()
};
const mapStateToProps = state => ({
    companyList: state.fetchReducer.tobaccoCompaniesList
});
export const UpdateCompany = connect(mapStateToProps, mapActionsToProps)(_updateCompany);