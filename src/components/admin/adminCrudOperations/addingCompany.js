import React, {useState} from "react";
import {useStyles} from "./styles";
import {savingAddCompanyData} from "../../../store/actions"
import {
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Input,
    TextField,
    Button,
    ListItem,
    Checkbox,
    ListItemIcon,
    ListItemText,
    List,
    ListSubheader
} from "@material-ui/core";
import {connect} from "react-redux";
import {postCompanyData} from "../../../services/webapi";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};
const listAdding = ["Add tobacco company", "Add coal company"];
const _addCompany = ({addCompanyData, collectDataForSend}) => {
    const [addingValue, setAddingValue] = useState("");
    const classes = useStyles();
    const handleNameFiledChange = (event) => {
        collectDataForSend(event.target.id, event.target.value)
    };
    const handleImgUrlChange = (event) => {
        collectDataForSend(event.target.id, event.target.value);
    };
    const handleActionChange = (event) => {
        setAddingValue(event.target.value)
    };
    const getStrArraySend = (data) => {
        const strArray = [];
        Object.entries(data).map(item => {
            if (item[1] === true) {
                strArray.push(item[0])
            }
        });
        return strArray;
    };
    const sendData = () => {
        const strArray = getStrArraySend(addCompanyData);
        const sendObject = {
            CompanyName: addCompanyData.CompanyName,
            ImgUrl: addCompanyData.ImgUrl,
            Strengths: strArray,
        };
        console.log(sendObject);
        postCompanyData(sendObject);
    };

    const strBoxComponent = <List subheader={<ListSubheader className={classes.subHeader}>Strs:</ListSubheader>}
                                  className={classes.checkBoxList}>
        {Object.entries(addCompanyData).map(item => {
            if (item[0] !== "CompanyName" && item[0] !== "ImgUrl") {
                return (
                    <ListItem id={item} button dense onClick={() => collectDataForSend(item[0], !item[1])}>
                        <ListItemIcon>
                            <Checkbox disableRipple inputProps={{"aria-labelledby": item[0]}} checked={item[1]}/>
                        </ListItemIcon>
                        <ListItemText id={item[0]} primary={item[0]}/>
                    </ListItem>
                )
            }
        })};
    </List>;


    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id={"kind-company"} className={classes.inputLabel}>Kind of company</InputLabel>
                <Select
                    value={addingValue}
                    MenuProps={MenuProps}
                    input={<Input/>}
                    labelId={"kind-company"}
                    onChange={handleActionChange}>
                    {listAdding.map(item => (
                        <MenuItem value={item} key={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <form autoComplete={"off"} noValidate className={classes.form}>
                <TextField
                    variant={"outlined"}
                    label={"Company Name"}
                    id={"CompanyName"}
                    onChange={handleNameFiledChange}/>
                <TextField

                    variant={"outlined"}
                    label={"img url string"}
                    id={"ImgUrl"}
                    onChange={handleImgUrlChange}/>
            </form>
            {addingValue === listAdding[0] && strBoxComponent}
            <Button color={"secondary"} variant={"contained"} onClick={sendData}>Add</Button>
        </div>
    )
};
const mapStateToProps = state => ({
    addCompanyData: state.addCompanyDataReducer
});
const mapActionsToProps = {
    collectDataForSend: (key, value) => savingAddCompanyData(key, value),
};
export const AddingCompany = connect(mapStateToProps, mapActionsToProps)(_addCompany);