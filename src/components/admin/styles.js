import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
        startPanel: {
            marginTop: "100px",
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        root: {
            marginTop: theme.spacing(10),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        alert: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        button: {
            display: "block"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 12,
            paddingTop: 50
        }
    }))
;