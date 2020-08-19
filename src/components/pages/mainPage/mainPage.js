import React, {useEffect} from 'react';
import {useStyles} from "./styles";
import {CardMedia} from "@material-ui/core";

export const MainPage = () => {
    const classes = useStyles();
useEffect(()=>{
    document.title = "Store main paige"
},[])
    return (
<div className={classes.root}>

</div>
    )
}