import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "78px",

    },
    container: {
        paddingTop: "50px",
        paddingLeft: "10px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
        width: "228px",
        height: "228px",
        marginBottom: "10px"
    },
    subTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "black",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));