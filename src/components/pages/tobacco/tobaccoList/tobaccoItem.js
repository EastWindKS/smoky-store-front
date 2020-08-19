import {useStyles} from "./styles";
import {Grid, Card, CardContent, CardMedia, Paper} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom"

export const TobaccoItem = (props) => {
    const {name, imgUrl, id} = props;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4} style={{cursor:"pointer"}} onClick={()=>sessionStorage.setItem("currentItemId",id)}
        component={Link} to={`tobacco/${sessionStorage.getItem("companyName")}/${id}`}>
            <Paper elevation={3}>
                <Card>
                    <CardMedia image={process.env.PUBLIC_URL + imgUrl} className={classes.cardMedia}/>
                    <CardContent className={classes.cardContent}>
                        {name}
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    )
};