import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "78px",
        backgroundImage: `url(${process.env.PUBLIC_URL + "Assets/Images/back.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        maxHeight: "600px",
        minHeight: "900px"
    },
    cardMedia: {}
}))
