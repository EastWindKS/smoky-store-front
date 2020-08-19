import React, {useState} from "react";
import {useStyles} from "./styles";
import {FormControl, Select, InputLabel, MenuItem, Input, TextField, Button} from "@material-ui/core";
import {postCompanyData} from "../../../services/webapi";

const strArray = ["Soft", "Middle", "Rare"];
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250,
        },
    },
};
const listAdding = ["Adding tobacco company", "Adding coal company"];
export const AddingCompany = () => {
    const classes = useStyles();
    const [addingValue, setAddingValue] = useState("");
    const [nameField, setNameField] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const handleNameFiledChange = (event) => {
        setNameField(event.target.value)
    };
    const handleImgUrlChange = (event) => {
        setImgUrl(event.target.value);
    };
    const handleActionChange = (event) => {
        setAddingValue(event.target.value)
    };
    const handleSendButton = () => {
        let newData = Object.assign({}, {CompanyName: nameField}, {ImgUrl: imgUrl});
        postCompanyData(newData);
    };
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
                    id={"companyName"}
                    onChange={handleNameFiledChange}/>
                <TextField

                    variant={"outlined"}
                    label={"img url string"}
                    id={"imgUrl"}
                    onChange={handleImgUrlChange}/>
            </form>
            <Button color={"secondary"} variant={"contained"} onClick={handleSendButton}>Add</Button>
        </div>
    )
};