import React, {useState} from "react";
import {useStyles} from "./styles";
import {TextField, Button} from "@material-ui/core";

const initFieldValues = {
    name: "",
    phone: "",
    email: ""
};
export const CheckOut = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initFieldValues);
    const [errors, setErrors] = useState({});
    const validate = () => {
        let templ = {};
        templ.name = values.name ? "" : "This field is required.";
        templ.phone = values.phone ? "" : "This field is required.";
        templ.post = values.post ? "" : "This field is required";
        setErrors({...templ});
        return Object.values(templ).every(x => x === "");
    };
    const handleChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
    };
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    onChange={handleChange}
                    {...(errors.name && {error: true, helperText: errors.name})}
                />
            </div>
            <div>
                <TextField
                    name="phone"
                    label="Phone"
                    onChange={handleChange}
                    variant="outlined"
                    {...(errors.phone && {error: true, helperText: errors.phone})}
                />
            </div>
            <div>
                <TextField
                    name="post"
                    label="Post number"
                    onChange={handleChange}
                    variant="outlined"
                    {...(errors.post && {error: true, helperText: errors.post})}
                />
            </div>
            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}>Order</Button>
        </form>
    )
};