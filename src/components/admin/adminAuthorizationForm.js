import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {accessAdmin} from "../../store/actions";
import {useStyles} from "./styles";
import {Container, Typography, Button, TextField, CssBaseline, Avatar, Snackbar} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const _adminAuthorizationForm = ({access, accessAdmin, loading}) => {
    const [open, setOpen] = useState(false);
    const [validation, setValidtaion] = useState(false);
    const classes = useStyles();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (!loading) {
            setOpen(true)
        }
    }, [loading]);
    const handleLogin = async (event) => {
        await event.preventDefault();
        await accessAdmin(login, password);
        setTimeout(() => setValidtaion(true), 70);
    };
    const handleOnChangeLogin = (event) => {
        setLogin(event.currentTarget.value);
    };
    const handleOnChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    };
    const ValidationContent = () => {
        if (access) {
            return (
                <Alert onClose={() => setOpen(false)} severity="success">
                    Success!
                </Alert>
            )
        }
        return (
            <Alert onClose={() => setOpen(false)} severity="error">
                Wrong data!
            </Alert>
        )
    };
    return (
        <Container component="main" className={classes.root} maxWidth={"xs"}>
            <CssBaseline/>
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleLogin}>
                    <TextField required fullWidth autoFocus
                               variant={"outlined"}
                               margin={"normal"}
                               id={"login"}
                               label={"Login"}
                               name={"login"}
                               autoComplete={"email"}
                               onChange={handleOnChangeLogin}>
                    </TextField>
                    <TextField required fullWidth
                               variant={"outlined"}
                               margin={"normal"}
                               id={"password"}
                               label={"Password"}
                               name={"login"}
                               type={"password"}
                               autoComplete={"password"}
                               onChange={handleOnChangePassword}>
                    </TextField>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    <div className={classes.alert}>
                        {validation && <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                            <ValidationContent/>
                        </Snackbar>}
                    </div>
                </form>
            </div>
        </Container>
    )
};
const mapActionToProps = {
    accessAdmin: (login, password) => accessAdmin(login, password)
};
const mapStateToProps = state => ({
    access: state.filterReducer.getAccess,
    loading: state.filterReducer.loading,
});

export const adminAuthorizationForm = connect(mapStateToProps, mapActionToProps)(_adminAuthorizationForm);