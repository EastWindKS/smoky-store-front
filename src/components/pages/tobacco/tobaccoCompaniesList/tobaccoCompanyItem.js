import React from "react";
import {useStyles} from "./styles";
import {Card, CardContent, CardMedia, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

export const TobaccoCompanyItem = (props) => {
    const {companyId, companyName, imgUrl} = props;
    const classes = useStyles();
    return (
        <Grid item xs={11} sm={4} key={companyId}>
            <Card onClick={() => {
                sessionStorage.setItem('companyId', companyId);
                sessionStorage.setItem('companyName', companyName)
            }
            } component={Link} to={"tobacco"}
                  style={{cursor: "pointer"}}>
                <CardContent>
                    {companyName}
                </CardContent>
                <CardMedia image={process.env.PUBLIC_URL + imgUrl} className={classes.cardMedia}/>
            </Card>
        </Grid>
    )
}