import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    Button,
    List,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    DialogTitle,
    Dialog
} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {connect} from "react-redux";
import {decrementBadge, deleteItemFromShopCart} from "../../store/actions";

const _shopCartContent = ({dialogClose, dialogOpen, productsList, deleteItem,decrBadge}) => {
    const handleDeleteItem = (index) => {
        deleteItem(index);
        decrBadge();
    };
    return (
        <Dialog onClose={dialogClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
            <DialogTitle id="simple-dialog-title">Your shop cart</DialogTitle>
            <List>
                {productsList?.map((product, index) => {
                    return (
                        <ListItem key={product.name}>
                            <ListItemAvatar>
                                <Avatar src={process.env.PUBLIC_URL + `/${product.imgUrl}`}/>
                            </ListItemAvatar>
                            <ListItemText primary={product.name}/>
                            <HighlightOffIcon onClick={() => handleDeleteItem(index)}/>
                        </ListItem>
                    )
                })}
            </List>
            <Button
                variant={"contained"}
                color={"secondary"}
                component={Link}
                to={"/checkout"}
                onClick={dialogClose}
            >Checkout</Button>
        </Dialog>
    );
};
const mapActionsToProps = {
    deleteItem: index => deleteItemFromShopCart(index),
    decrBadge: () => decrementBadge(),
};
const mapStateToProps = store => ({
    productsList: store.cartReducer
});
export const ShopCartContent = connect(mapStateToProps, mapActionsToProps)(_shopCartContent);