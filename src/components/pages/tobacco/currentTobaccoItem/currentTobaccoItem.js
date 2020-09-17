import React, {useEffect, useState} from "react";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {addToShopCartItem, countBadge, fetchTobaccoItemById} from "../../../../store/actions";
import {
    Grid,
    Typography,
    CardMedia,
    Card,
    CardContent,
    Backdrop,
    CircularProgress,
    Button,
    TextField,
    ButtonGroup
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const _currentTobaccoItem = ({currentItemInfo, getCurrentItem, countingBadge, addItemToCart, addedItemToCart}) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    useEffect(() => {
        getCurrentItem(sessionStorage.getItem("currentItemId"));
    }, []);
    const handleAddButton = () => {
        countingBadge();
        addItemToCart({
            itemId: sessionStorage.getItem("currentItemId"),
            name: currentItemInfo.flavor,
            imgUrl: currentItemInfo.imgUrl,
        });
    };
    const load = <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color={"secondary"}/>
    </Backdrop>;
    const content = <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={8}>
            <Typography variant={"h2"}>
                {currentItemInfo.flavor}
            </Typography>
            <Card>
                <CardMedia image={process.env.PUBLIC_URL + `/${currentItemInfo.imgUrl}`} className={classes.cardMedia}/>
                <CardContent>
                    <Typography variant={"h4"}>
                        {currentItemInfo.productDescription}
                    </Typography>
                </CardContent>
            </Card>
            <div>
                <TextField
                    value={count}
                    className={classes.counter}
                    label={"Count"}
                    onChange={(event) => setCount(event.currentTarget.value)}/>
                <ButtonGroup className={classes.grBtns}>
                    <Button
                        disabled={count === 0}
                        aria-label="reduce"
                        onClick={() => setCount(prevState => --prevState)}
                    >
                        <RemoveIcon fontSize="small"/>
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={() => setCount(prevState => ++prevState)}
                    >
                        <AddIcon fontSize="small"/>
                    </Button>
                </ButtonGroup>
            </div>
            <Button
                variant={"contained"}
                color={"secondary"}
                onClick={handleAddButton}>Add to bracket</Button>
        </Grid>
        <Grid item xs={1}/>
    </Grid>
    return (
        <div className={classes.root}>
            {Object.keys(currentItemInfo).length === 0 && load}
            {Object.keys(currentItemInfo).length > 0 && content}
        </div>
    )
};
const mapActionsToProps = {
    getCurrentItem: id => fetchTobaccoItemById(id),
    countingBadge: () => countBadge(),
    addItemToCart: item => addToShopCartItem(item),
};
const mapStateToProps = state => ({
    currentItemInfo: state.fetchReducer.tobaccoCurrentItem,
    addedItemToCart: state.cartReducer,
});

export const CurrentTobaccoItem = connect(mapStateToProps, mapActionsToProps)(_currentTobaccoItem);
