import React from "react";
import {
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
import {deleteItemFromShopCart} from "../../store/actions";

const _shopCartContent = ({dialogClose, dialogOpen, productsList, deleteItem}) => {
    const handleDeleteItem = (index) => {
        deleteItem(index);
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
        </Dialog>
    );
};
const mapActionsToProps = {
    deleteItem: index => deleteItemFromShopCart(index),
};
const mapStateToProps = store => ({
    productsList: store.cartReducer.cartList
});
export const ShopCartContent = connect(mapStateToProps, mapActionsToProps)(_shopCartContent);