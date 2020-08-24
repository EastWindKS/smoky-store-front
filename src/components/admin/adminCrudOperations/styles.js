import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        marginLeft: 50
    },
    textField: {
        marginTop: 30
    },
    formControl: {
        margin: theme.spacing(2),
        paddingTop: 15,
        minWidth: 120,
        maxWidth: 300,
    },
    inputLabel: {
      fontWeight:"bold"
    },
    form: {
        marginBottom: 25,
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: "flex",
        flexDirection: "column"
    },
    checkBoxList: {
        maxWidth: 200
    },
    subHeader : {
        marginLeft: 10
    }
}));